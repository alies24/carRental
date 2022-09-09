import { Rental } from 'src/app/models/rental';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataResponseModel } from '../models/dataResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  private apiUrl: string = "https://localhost:44379/api/Rentals/getRentalDetails"

  constructor(private httpClient: HttpClient) { }

  getRentals(): Observable<DataResponseModel<Rental>> {
    return this.httpClient.get<DataResponseModel<Rental>>(this.apiUrl);

  }
}
