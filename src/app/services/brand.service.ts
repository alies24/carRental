import { Brand } from 'src/app/models/brand';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataResponseModel } from '../models/dataResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl:string ="https://localhost:44379/api/Brands/getAllBrands";
  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<DataResponseModel<Brand>>{
    return this.httpClient.get<DataResponseModel<Brand>>(this.apiUrl);
  }
}
