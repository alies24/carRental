import { Color } from './../models/color';
import { DataResponseModel } from './../models/dataResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  private apiUrl: string = "https://localhost:44379/api/";
  constructor(private httpClient:HttpClient) { }

  getColors():Observable<DataResponseModel<Color>>{
    let newPath = this.apiUrl+"Colors/getAll";
    return this.httpClient.get<DataResponseModel<Color>>(newPath);

  }
}
