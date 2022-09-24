import { Brand } from 'src/app/models/brand';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataResponseModel } from '../models/dataResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl:string ="https://localhost:44379/api/";
  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<DataResponseModel<Brand>>{
    let newPath = this.apiUrl + "Brands/getAll";
    return this.httpClient.get<DataResponseModel<Brand>>(newPath);
  }
}
