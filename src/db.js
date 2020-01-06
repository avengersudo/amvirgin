import { apiCustomer } from './credential.json';
import axios from 'axios';
export const GetData = (type) => {
    return new Promise(function(resolve, reject){
        axios.get(apiCustomer+'/'+type)
        .then(function(response){
            resolve(response);
            //console.log(response);
        })
        .catch(function(err){
            reject(err);
            //console.log(err);
        })
    })
}