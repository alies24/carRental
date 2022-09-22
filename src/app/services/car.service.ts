import { CarDto } from 'src/app/models/carDto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataResponseModel } from '../models/dataResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl: string = "https://localhost:44379/api/"
  constructor(private httpClient: HttpClient) { }


  getCars(): Observable<DataResponseModel<CarDto>> {
    let newPath = this.apiUrl + "Cars/getCarsDetails"
    return this.httpClient.get<DataResponseModel<CarDto>>(newPath);
  }
  getCarsByBrand(brandId:number): Observable<DataResponseModel<CarDto>> {
    let newPath = this.apiUrl + "Cars/getByBrandId?brandId="+brandId
    return this.httpClient.get<DataResponseModel<CarDto>>(newPath);
  }

}
