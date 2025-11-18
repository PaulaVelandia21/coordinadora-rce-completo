import { Task } from '@serenity-js/core';
import { Send, PostRequest, GetRequest } from '@serenity-js/rest';

export class LlamarApi {
    static post(endpoint, body, token) {
        return Task.where(`#actor envía POST`,
            Send.a(PostRequest.to(endpoint).using({
                headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
                data: body
            }))
        );
    }

    static get(endpoint, token) {
        return Task.where(`#actor envía GET`,
            Send.a(GetRequest.to(endpoint).using({
                headers: { 'Authorization': `Bearer ${token}` }
            }))
        );
    }
}
