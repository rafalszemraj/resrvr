import fetch from 'isomorphic-fetch';
import R from 'ramda';

const parseJSON = (httpResponse) => httpResponse.json();
const throwError = function(error) { throw error };

const postJSON = R.curry((url, body) => () => fetch(url, {
  method:'POST',
  headers: {
    'Accept':'application/json',
    'Content-Type':'application/json'
  },
  body: JSON.stringify(body)
}).then( parseJSON ).catch( throwError ));


const API_URL = R.concat('http://localhost:3000');

export default{

  login: (login, password) => postJSON(API_URL('/login'), {login,password})

}
