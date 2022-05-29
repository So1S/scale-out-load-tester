import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
    http.get('http://my-scale-out-test');
    sleep(1);
}