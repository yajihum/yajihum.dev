export interface Env {
	MY_KV_STAMP: KVNamespace;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const { pathname } = new URL(request.url);

		switch (request.method) {
			case 'GET':
				const key = pathname.slice(1);
				const value = await env.MY_KV_STAMP.get(key);
				if (value === null) {
					return new Response('Value not found', { status: 404 });
				}
				return new Response(value);
			case 'PUT':
				const emojiUrl = await request.text();
				const emojiList = await env.MY_KV_STAMP.get(pathname.slice(1));
				if (emojiList === null) {
					await env.MY_KV_STAMP.put(pathname.slice(1), JSON.stringify([emojiUrl]));
				} else {
					await env.MY_KV_STAMP.put(pathname.slice(1), JSON.stringify([...JSON.parse(emojiList), emojiUrl]));
				}
				const newEmojiList = await env.MY_KV_STAMP.get(pathname.slice(1));
				return new Response(newEmojiList);
			default:
				return new Response(`${request.method} is not allowed.`, {
					status: 405,
				});
		}
	},
};
