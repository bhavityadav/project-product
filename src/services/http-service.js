import axios from 'axios';

class HttpService{

    getProducts=()=>{

        axios.get('http://localhost:3004/product')
        .then(res =>{
            console.log(res.json());
        });

    }
}