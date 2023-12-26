import { Component,Inject } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { ActivatedRoute } from '@angular/router';
import { DevicesService } from '../devices.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buses',
  standalone: true,
  imports: [GoogleMapsModule,CommonModule],
  providers:[DevicesService],
  templateUrl: './buses.component.html',
  styleUrl: './buses.component.css'
})
export class BusesComponent {
    mapOption:any;
   data = "";
   constructor(private devicesService:DevicesService){

   }

   route:ActivatedRoute = Inject(ActivatedRoute)
devices:any = []
  ngOnInit(): void {
    this.devicesService.getDevices().then((data)=>{
      this.devices = data
      this.mapOption = {center:{lat: this.devices[0].latest_status.properties.latitude, lng: this.devices[0].latest_status.properties.longitude },
       zoom : 16 }
    })

  }

}
