import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VimeoApiService {

  constructor(private http: HttpClient) { }

  getVimeo(query: string) {
    
    

    let apiUrl: string = `https://api.vimeo.com/videos?query=${query}`;
    console.log(apiUrl);
    return this.http.get(apiUrl);

  }
}
