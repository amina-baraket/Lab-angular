
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Evt } from 'src/Models/Evt';
import { EventService } from 'src/Services/event.service';
import { ModalEVTComponent } from '../modal-evt/modal-evt.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { DialogRef } from '@angular/cdk/dialog';
import { VisibilityEvtCompComponent } from '../visibility-evt-comp/visibility-evt-comp.component';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})

export class EventsComponent implements OnInit,AfterViewInit {

@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;

constructor (private ES:EventService ,private dialog:MatDialog
){
  this.dataSource=new MatTableDataSource()
}


//dataSource: Evt[] = []
displayedColumns: string[] = ['id', 'titre', 'dateDebut', 'dateFin','lieu','action'];
dataSource!: MatTableDataSource<Evt>;

ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

ngOnInit() {
  this.fetchData();
}

fetchData():void {
  this.ES.GetAllEvents().subscribe((a)=>{
    //error najemch nsob ldata de type matDataSource ken k nesna3 instance
    this.dataSource.data=a})
}
open():void
{
//ouvrir la boite (ModalEVTComponent)
 let dialogRef = this.dialog.open(ModalEVTComponent)
 //recuperer les donnees de la boite (ModalEVTComponent)
 dialogRef.afterClosed().subscribe((data) => {
  console.log(data);
  if(data){
    this.ES.add(data).subscribe(()=>{
      this.fetchData()})
  }
 })
}
open1(id:string){
  const dialogConfig = new MatDialogConfig();
  //recuperer evt by id 
  this.ES.getEvtById(id).subscribe((Evtrecupere)=>{
    dialogConfig.data=Evtrecupere
    let dialogRef = this.dialog.open(ModalEVTComponent,dialogConfig)
    dialogRef.afterClosed().subscribe((data)=>{
      if(data){
        this.ES.updateEvt(id,data).subscribe(()=>{
          this.fetchData()
        })
      }
    })
  })

  //envoyer evt vers la boite
  //ouvrir la boite 

}
openVisibility(id:string):void
{
  const dialogConfig= new MatDialogConfig()
  dialogConfig.data.id
  let dialogRef= this.dialog.open(VisibilityEvtCompComponent,dialogConfig)
  
}
deleteEvent(event: Evt): void {
  //1 ouvrir la boite
      let dialogRef = this.dialog.open(ConfirmDialogComponent, {
        height: '300px',
        width: '300px',
      });
      //2 if click de user = confirm =>
      //subscribe
      dialogRef.afterClosed().subscribe(result => {
        if (result){
  this.ES.delete(event.id).subscribe(() => {
    this.fetchData();
  });
}
    
});
//faire le lien avec le service

}
}
