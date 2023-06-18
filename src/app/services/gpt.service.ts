import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GptService {

  constructor(private httpClient : HttpClient ) { }

  askGPT(InputMessages : any[]) : Observable<any>{
    const url = "https://api.openai.com/v1/chat/completions";
    const payload = {
      model: "gpt-3.5-turbo",
      messages: InputMessages
    };
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": "Bearer YOUR_API_KEY" // put your api key 
      })
    };
  
    return this.httpClient.post(url, payload, httpOptions);  
  }
}
