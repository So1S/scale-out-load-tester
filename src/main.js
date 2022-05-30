import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
    const obj = { message: 'hello, world!' };
    const body = JSON.stringify(obj);

    http.post('http://my-scale-out-test:8080/messages', body);
    sleep(1);
}