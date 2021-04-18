import axios from 'axios';
import API from './api';


const LIST_CHARACTER  = 'AC_LIST_CHARACTER';
const LIST_EPISODE    = 'AC_LIST_EPISODE';
const CHARACTER_INFO  = 'AC_CHARACTER_INFO';
const EPISODE_INFO    = 'AC_EPISODE_INFO';


 export function AC_LIST_CHARACTER(cartData) {  
      return function(dispatch) {
       return axios.get(API.Characters)
               .then(({data}) => {
                dispatch({type :LIST_CHARACTER ,payload : data});
                });
        };
    }
 export function AC_LIST_EPISODE(userid) {
       return function(dispatch) {
        return axios.get(API.Episodes)
                .then(({data}) => {
                    dispatch({type :LIST_EPISODE,payload : data});
                 });
         };
  }
  export function AC_CHARACTER_INFO(id) {
        var char_info_api = API.Characters+id
        console.log(char_info_api);
       return function(dispatch) {
          return axios.get(char_info_api)
                    .then(({data}) => {
                            console.log(data);
                       dispatch({type : CHARACTER_INFO,payload : data});
                   });
           };
  }
  export function AC_EPISODE_INFO(id) {
        var ep_info_api = API.Episodes+id
   return function(dispatch) {
      return axios.get(ep_info_api)
                .then(({data}) => {
                   dispatch({type : EPISODE_INFO,payload : data});
               });
       };
  }
