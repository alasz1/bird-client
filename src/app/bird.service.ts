import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sighting } from './bird';

@Injectable({
  providedIn: 'root'
})
export class BirdService {

  getSightings(): Observable<Sighting[]> {
    return this.http.get<Sighting[]>(apiUrl);
  }

  addSighting(bird: Sighting): Observable<Sighting> {
    return this.http.post<Sighting>(apiUrl, bird, httpOptions);
  }

  getSighting(id): Observable<Sighting> {
    return this.http.get<Sighting>(`${apiUrl}/${id}`);
  }

  updateSighting(bird: Sighting): Observable<Sighting> {
    return this.http.put<Sighting>(`${apiUrl}/${bird.id}`, bird, httpOptions);
  }

  deleteSighting(id:number):Observable<{}>{
    return this.http.delete(`${apiUrl}/${id}`);
  }

  constructor(private http: HttpClient) { }


}


// const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})};

const apiUrl = "http://localhost:3000/api/people";

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };