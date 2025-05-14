import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pub } from 'src/Models/Pub';

@Injectable({
  providedIn: 'root'
})
export class PubService {

  constructor(private http: HttpClient) { }

  GetAllPubs():Observable<Pub[]>
        {
          //envoie une requette en mode GET
         return this.http.get<Pub[]>('http://localhost:3000/Pub')
        }
    add(e:Pub):Observable<void>{
              return this.http.post<void>('http://localhost:3000/Pub',e)
        }
    getPubById(id :string):Observable<Pub>{
                return this.http.get<Pub>(`http://localhost:3000/Pub/${id}`)
          }
          updatepub(id: string, pub: Pub): Observable<void> {
                return this.http.put<void>(`http://localhost:3000/Pub/${id}`, pub);
           }
}
