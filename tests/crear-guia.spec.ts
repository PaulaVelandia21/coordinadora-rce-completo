import { test } from '@playwright/test';
import { Usuario } from '../src/actors/Usuario';
import { CrearGuia } from '../src/tasks/CrearGuia';
import { ValidarError } from '../src/tasks/ValidarError';
import body from '../src/models/GuiaRequest.json';
import { obtenerToken } from '../src/utils/token';

test('Crear guía válida', async () => {
    const token = await obtenerToken();
    await Usuario.attemptsTo(
        CrearGuia.conDatos(body, token),
        ValidarError.codigoEsperado(200)
    );
});
