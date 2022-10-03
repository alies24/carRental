import { DataResponseModel } from './../models/dataResponseModel';
import { CarDto } from 'src/app/models/carDto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl: string = "https://localhost:44379/api/"
  constructor(private httpClient: HttpClient) { }


  getCars(): Observable<DataResponseModel<CarDto>> {
    let newPath = this.apiUrl + "Cars/getCarDetails"
    return this.httpClient.get<DataResponseModel<CarDto>>(newPath);
  }
  getCarsByBrand(brandId:number): Observable<DataResponseModel<CarDto>> {
    let newPath = this.apiUrl + "Cars/getByBrand?brandId="+brandId
    return this.httpClient.get<DataResponseModel<CarDto>>(newPath);
  }
  getCarsByColor(colorId:number):Observable<DataResponseModel<CarDto>>{
    let newPath = this.apiUrl + "Cars/getByColor?colorId="+colorId;
    return this.httpClient.get<DataResponseModel<CarDto>>(newPath);
  }

}
