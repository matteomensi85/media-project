import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiAccess } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VimeoApiService {
  private token: string = apiAccess.vimeoAccessKey;
  private headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
  constructor(private http: HttpClient) { }

  getVimeo(query: string) {
    
    
    let apiUrl: string = `https://api.vimeo.com/videos?query=${query}`;
    console.log(apiUrl);
    return this.http.get(apiUrl, {'headers': this.headers});

  }
}
