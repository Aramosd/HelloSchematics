import { camelize, classify, dasherize } from '@angular-devkit/core/src/utils/strings';

export function dataService(name: string) {
    return `
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = '/api/${dasherize(name)}';

@Injectable({
    providedIn: 'root'
})

export class ${classify(name)}RESTService {

    constructor(private httpClient$: HttpClient) {}

    findAll(): Observable<${classify(name)}[]> {
        return this.httpClient$.get<${classify(name)}[]>(API_URL);
    }

    create(${camelize(name)}: ${classify(name)}): Observable<number> {
        return this.httpClient$.post<number>(API_URL, ${camelize(name)});
    }
}

export interface ${classify(name)} {
    // Adjust based on endpoint payload
    productId: string;
    productQuantity: number;
}
    `;
}