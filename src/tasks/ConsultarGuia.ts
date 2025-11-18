import { Task } from '@serenity-js/core';
import { LlamarApi } from '../interactions/LlamarApi';

export class ConsultarGuia {
    static conNumero(numero, token) {
        return Task.where(`#actor consulta guía`,
            LlamarApi.get(`/guias/${numero}`, token)
        );
    }
}
