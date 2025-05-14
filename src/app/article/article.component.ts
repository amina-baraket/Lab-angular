import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Pub } from 'src/Models/Pub';
import { PubService } from 'src/Services/pub.service';
import { ModalPubComponent } from '../modal-pub/modal-pub.component';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent  implements OnInit{
constructor (private PS: PubService,private dialog:MatDialog){}

displayedColumns: string[] = ['id','type', 'titre','lien', 'date', 'sourcepdf','7'];
    //saisir le taleau de members
    data: Pub[] = []
    dataSource = new MatTableDataSource();
    ngOnInit(){this.fetchData()}
    fetchData():void{
      this.PS.GetAllPubs().subscribe((a)=>{
        //action
        this.dataSource.data=a})
        }
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    open():void
    {
    //ouvrir la boite (ModalEVTComponent)
     let dialogRef=this.dialog.open(ModalPubComponent);
     dialogRef.afterClosed().subscribe((data) => {
      console.log(data);
      if(data){
        this.PS.add(data).subscribe(()=>{
          this.fetchData()})
      }
     })
     }
     onEdit(id:string){
      //la boite ma tajem tekhou ken des donnees de type dialog config
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data=id
      let dialogRef=this.dialog.open(ModalPubComponent,dialogConfig);
      dialogRef.afterClosed().subscribe((data)=>{
        if(data){
          this.PS.updatepub(id,data).subscribe(()=>{
            this.fetchData()
          })
        }
      })
     }
}
