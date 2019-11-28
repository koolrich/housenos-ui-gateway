import axios from 'axios';

export default class UserRepository {

    constructor(){
        this.registerUser = this.registerUser.bind(this);
    }

    registerUser(user){
        console.log(user);
        return axios.post(`http://localhost:9090/housenos-api/register`, user)        
    }
}