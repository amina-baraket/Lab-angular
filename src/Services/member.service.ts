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
    GetMemberById(id :string):Observable<Member>{
      return this.http.get<Member>(`http://localhost:3000/members/${id}`)
    }
    addMember(member:Member):Observable<void>{
      return this.http.post<void>('http://localhost:3000/members',member)
    }
    delete(id: string): Observable<void> {
      return this.http.delete<void>(`http://localhost:3000/members/${id}`)
    }
    update(id: string, member: Member): Observable<void> {
      return this.http.put<void>(`http://localhost:3000/members/${id}`, member);
    }
}
