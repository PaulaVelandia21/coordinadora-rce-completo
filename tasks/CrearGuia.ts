import { Task } from '@serenity-js/core';
import { LlamarApi } from '../interactions/LlamarApi';

export class CrearGuia {
    static conDatos(data, token) {
        return Task.where(`#actor crea guía`,
            LlamarApi.post('/guias', data, token)
        );
    }
}
