class ExampleService {
    axios
    baseUrl

    constructor(axios) {
        this.axios = axios
        this.baseUrl = 'https://jsonplaceholder.typicode.com/'
    }

    getAll(params) {
        let self = this;
        return self.axios.get(`${self.baseUrl}posts`);
    }

    get(id) {
        let self = this;
        return self.axios.get(`${self.baseUrl}posts/${id}`);
    }
}

export default ExampleService