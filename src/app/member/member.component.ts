import { Component, OnInit } from '@angular/core';
import { Member } from 'src/Models/Member';
import { MemberService } from 'src/Services/member.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})

export class MemberComponent {
  member!: Member;
  constructor (private MS: MemberService, private dialog:MatDialog){}
  displayedColumns: string[] = ['id', 'cin', 'name', 'type', 'createdDate', 'button'];

  //saisir le taleau de members
  dataSource: Member[] = []

  ngOnInit():void{
this.MS.GetAllMembers().subscribe((a)=>{
  //action
  this.dataSource=a})
  }
  delete(id:string){
    //1 ouvrir la boite
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '300px',
      width: '300px',
    });
    //2 if click de user = confirm =>
    //subscribe
    dialogRef.afterClosed().subscribe(result => {
      if (result){
          //action
        this.MS.delete(id).subscribe(()=>{
          this.MS.GetAllMembers().subscribe((a)=>{
            //action
            this.dataSource=a})
        })
      }
    
    });
  //faire le lien avec le service
 
  }
  // update() {
  //     this.MS.update(this..id, this.member).subscribe(
  //       (response: Member) => {
 
  //       },
  //     );
  // }
}
