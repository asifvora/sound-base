import { request } from './HttpRequests';

const API = {
    getSongs: (URL) => request.get(URL),
}

export { API };
