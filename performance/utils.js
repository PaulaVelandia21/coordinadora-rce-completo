import http from 'k6/http';

export function obtenerToken() {
    const payload = {
        grant_type: 'client_credentials',
        client_id: 'test_client',
        client_secret: 'm0D2Mg6fkyPvbSgiVh0bGYQOzcJQpc8z',
        scope: 'openid'
    };
    const params = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }};
    return http.post('https://cmautenticacion-test.coordinadora.com/realms/test-auth/protocol/openid-connect/token', payload, params).json().access_token;
}
