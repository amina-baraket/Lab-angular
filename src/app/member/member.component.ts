import { Component, OnInit } from '@angular/core';
import { Member } from 'src/Models/Member';
import { MemberService } from 'src/Services/member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})

export class MemberComponent {
  constructor (private MS: MemberService){}
  displayedColumns: string[] = ['id', 'cin', 'name', 'type', 'createdDate', 'button'];

  //saisir le taleau de members
  dataSource: Member[] = []

  ngOnInit():void{
this.MS.GetAllMembers().subscribe((a)=>{
  this.dataSource=a
})
  }
  
}
