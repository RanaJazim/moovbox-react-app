import http from 'axios';

function register(user) {
    return http.post('/auth/register', {
        name: user.name,
        email: user.email,
        password: user.password,
    });

    // return http.post('/auth/register', {});
}

export default {
    register,
}