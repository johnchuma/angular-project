import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  constructor() { }
   getDevices (){
     return axios.get("http://197.250.15.25:7443/api/v1/device/devices/")
     .then(response => response.data)
     .catch(error => {
       console.error('Error fetching devices:', error);
       throw error;
     });
   }
   getDestinations (){
    return axios.get("http://197.250.15.25:7443/api/v1/tracking/destination/2/")
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching devices:', error);
      throw error;
    });
  }

   getDeviceTraceHistory (id:any,startingDate:any,endingDate:any){

    return axios.get(`http://197.250.15.25:7443/api/v1/tracking/logistic-locations/?device=${id}&start_date=${startingDate}&end_date=${endingDate}&first=10`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching devices:', error);
      throw error;
    });
  }
}
