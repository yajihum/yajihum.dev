export interface Env {
	MY_KV_STAMP: KVNamespace;
}

type EmojiType = {
	url: string;
	category: string;
	name: string;
	extension: 'png';
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const key = new URL(request.url).pathname.slice(1);

		switch (request.method) {
			case 'GET':
				const value = await env.MY_KV_STAMP.get(key);

				if (!value) {
					return new Response(JSON.stringify([]), {
						status: 200,
						headers: { 'content-type': 'application/json' },
					});
				}

				return new Response(value);
			case 'POST':
				const selectedEmoji: EmojiType = await request.json();
				if (!selectedEmoji) {
					return new Response('Bad Request', {
						status: 400,
					});
				}

				const currentEmojiListString = await env.MY_KV_STAMP.get(key);
				const currentEmojiList: EmojiType[] = currentEmojiListString ? JSON.parse(currentEmojiListString) : [];

				if (!currentEmojiList.some((emoji) => emoji.name === selectedEmoji.name)) {
					await env.MY_KV_STAMP.put(key, JSON.stringify([...currentEmojiList, selectedEmoji]));
				}

				const newEmojiList = await env.MY_KV_STAMP.get(key);
				return createResponse(newEmojiList, 200, { 'content-type': 'application/json' });
			default:
				return createResponse(`${request.method} is not allowed.`, 405);
		}
	},
};

function createResponse(body: string | null, status: number, headers?: Record<string, string>): Response {
	return new Response(body || '', {
		status,
		headers,
	});
}
