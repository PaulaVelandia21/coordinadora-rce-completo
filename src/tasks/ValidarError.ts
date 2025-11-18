import { Task } from '@serenity-js/core';
import { LastResponse } from '@serenity-js/rest';
import { expect } from '@playwright/test';

export class ValidarError {
    static codigoEsperado(codigo) {
        return Task.where(`#actor valida código`,
            LastResponse.received().then(response => {
                expect(response.status()).toBe(codigo);
            })
        );
    }
}
