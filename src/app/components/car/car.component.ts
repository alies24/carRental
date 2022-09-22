import { CarService } from '../../services/car.service';
import { Component, OnInit } from '@angular/core';
import { CarDto } from 'src/app/models/carDto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carDto:CarDto[]=[]
  constructor(private carService:CarService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }
      else{
        this.getCars()
      }
    })


  }

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.carDto = response.data
    })
  }
  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.carDto = response.data;
    })
  }
}
