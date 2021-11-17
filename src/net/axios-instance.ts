import { notification } from "antd";
import axios from "axios";
import { Apiurl } from "utils/constants";


export const AxionsInstance = axios.create({
    baseURL:Apiurl,
    headers: {
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'Expires': '0',
    },
});

/* AxionsInstance.interceptors.request.use(function (config:any) {
    // Do something before request is sent
   
    config.headers.Authorization = `Bearer ${localStorage.getItem(appTokenSesion)}`;
    config.headers.common['Authorization'] =`Bearer ${localStorage.getItem(appTokenSesion)}`;
  
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  }); */

  AxionsInstance.interceptors.response.use(function (response) {
   
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    console.log({error:error});
      if ( error.response){
       
        notification.error({
          message:"Error",
          description:error.response.data.msg
        });
       

      }else{
        notification.error({
          message:"Error interno",
          description:"Ha ocurrido un error interno en nuestra app"
        });
      }

    return Promise.reject(error);
  });
