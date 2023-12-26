import { Component, OnInit } from '@angular/core';
import { DevicesService } from '../devices.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet,RouterModule } from '@angular/router';
@Component({
  selector: 'app-parcel',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule],
  templateUrl: './parcel.component.html',
  providers:[DevicesService],
  styleUrl: './parcel.component.css'
})
export class ParcelComponent implements OnInit{

  constructor(private devicesService:DevicesService){}
  devices:any = []
  ngOnInit(): void {
    this.devicesService.getDevices().then((data)=>{
      this.devices = data
      console.log(data)
    })

  }

}
