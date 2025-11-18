import { Actor } from '@serenity-js/core';
import { CallAnApi } from '@serenity-js/rest';

export const Usuario = Actor.named('Usuario')
    .whoCan(CallAnApi.at('https://guias-service-test.coordinadora.com'));
