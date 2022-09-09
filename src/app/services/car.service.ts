import { CarDto } from 'src/app/models/carDto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataResponseModel } from '../models/dataResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl: string = "https://localhost:44379/api/Cars/getCarsDetails"
  constructor(private httpClient: HttpClient) { }


  getCars(): Observable<DataResponseModel<CarDto>> {
    return this.httpClient.get<DataResponseModel<CarDto>>(this.apiUrl);
  }
}
