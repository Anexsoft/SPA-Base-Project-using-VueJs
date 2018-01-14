import Axios from 'axios'
import exampleService from '../services/ExampleService'

// Axios Configuration
Axios.defaults.headers.common.Accept = 'application/json'

export default {
    exampleService: new exampleService(Axios)
}