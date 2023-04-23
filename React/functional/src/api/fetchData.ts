import axios, { AxiosResponse } from 'axios';
import { Collection } from "../types";

// Note: to focus on the demo topic, we are not doing error handling and assume all the fetches are successful.  
export const fetchData = () : Promise<AxiosResponse<Collection>> => {
    return axios("http://localhost:8080/data");
}

export const fetchSampleAdress = () : Promise<AxiosResponse<string>> => {
    return axios("http://localhost:8080/sample-address");
}