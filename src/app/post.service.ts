import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Data } from './data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  
 
  goodsUrl = 'http://localhost:8080/good/'

  constructor(private http: HttpClient) { }

get(): Observable<Data>{

  return this.http.get<Data>(this.goodsUrl);
  

}

post(data:any): Observable<Data>{

 return this.http.post<Data>(this.goodsUrl, data);

}


}
