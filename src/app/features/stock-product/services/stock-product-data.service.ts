
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = '/api/stock-product';

@Injectable({
    providedIn: 'root'
})

export class StockProductRESTService {

    constructor(private httpClient$: HttpClient) {}

    findAll(): Observable<StockProduct[]> {
        return this.httpClient$.get<StockProduct[]>(API_URL);
    }

    create(stockProduct: StockProduct): Observable<number> {
        return this.httpClient$.post<number>(API_URL, stockProduct);
    }
}

export interface StockProduct {
    // Adjust based on endpoint payload
    productId: string;
    productQuantity: number;
}
    