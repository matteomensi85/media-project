import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class UnsplashApiService {

  private apiKey: string = "hdls7xtRsTSKGWXE6SpupQYBF9X8EJmfhxxAeEeg2AQ";
  constructor(private http: HttpClient) { }


  getUnsplash(query: string) {
    
    let apiUrl: string = `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${this.apiKey}`;
    console.log(apiUrl);
    return this.http.get(apiUrl);

  }
}
