import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/Models/Member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient){}
  //function qui envoie en mode GET
    GetAllMembers():Observable<Member[]>
    {
      //envoie une requette en mode GET
     return this.http.get<Member[]>('http://localhost:3000/members')
    }
}
