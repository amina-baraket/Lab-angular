import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evt } from 'src/Models/Evt';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }
  GetAllEvents():Observable<Evt[]>
      {
        //envoie une requette en mode GET
       return this.http.get<Evt[]>('http://localhost:3000/Evt')
      }
      add(e:Evt):Observable<void>{
            return this.http.post<void>('http://localhost:3000/Evt',e)
      }

      delete(id: string): Observable<void> {
            return this.http.delete<void>(`http://localhost:3000/Evt/${id}`)
      }
      getEvtById(id :string):Observable<Evt>{
            return this.http.get<Evt>(`http://localhost:3000/Evt/${id}`)
      }
      updateEvt(id: string, evt: Evt): Observable<void> {
            return this.http.put<void>(`http://localhost:3000/Evt/${id}`, evt);
       }

  
}
