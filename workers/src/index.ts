export interface Env {
	MY_KV: KVNamespace;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const { pathname } = new URL(request.url);

		switch (request.method) {
			case 'GET':
				const key = pathname.slice(1);
				const value = await env.MY_KV.get(key);
				if (value === null) {
					return new Response('Value not found', { status: 404 });
				}
				return new Response(value);
			case 'PUT':
				const newValue = await request.text();
				await env.MY_KV.put(pathname.slice(1), newValue);
				return new Response('Success', { status: 200 });
			default:
				return new Response(`${request.method} is not allowed.`, {
					status: 405,
				});
		}
	},
};
