import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/api/v1";
const USER_LOGIN = "login";

class UserService {

    userLogin(credentials) {
        return axios.post(USER_API_BASE_URL + '/' + USER_LOGIN, credentials);
    }

}

export default new UserService()