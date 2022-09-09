import { CarService } from '../../services/car.service';
import { Component, OnInit } from '@angular/core';
import { CarDto } from 'src/app/models/carDto';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carDto:CarDto[]=[]
  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.carDto = response.data
    })
  }
}
