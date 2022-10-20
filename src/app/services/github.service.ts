import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getURL(url: string):Observable<any> {
    return this.http.get<any>(url)
  }

  getRepos():Observable<any> {
    
    const url = "https://api.github.com/users/matt-rog/repos"
    return this.http.get<any>(url)
  }

  getMe():Observable<any> {
    
    const url = "https://api.github.com/users/matt-rog"
    return this.http.get<any>(url)
  }

  getEvents():Observable<any> {
    
    const url = "https://api.github.com/users/matt-rog/events"
    return this.http.get<any>(url)
  }
  
}
