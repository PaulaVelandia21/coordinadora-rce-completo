import axios from 'axios';

export async function obtenerToken() {
    const response = await axios.post(
        'https://cmautenticacion-test.coordinadora.com/realms/test-auth/protocol/openid-connect/token',
        new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: 'test_client',
            client_secret: 'm0D2Mg6fkyPvbSgiVh0bGYQOzcJQpc8z',
            scope: 'openid',
        }),
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );
    return response.data.access_token;
}
