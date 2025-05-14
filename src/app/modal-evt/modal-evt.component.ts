import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {  MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-evt',
  templateUrl: './modal-evt.component.html',
  styleUrl: './modal-evt.component.css'
})
export class ModalEVTComponent  {

  //forcage de type=> boite de dialogue
constructor(public dialogRef: MatDialogRef<ModalEVTComponent>,@Inject(MAT_DIALOG_DATA) data:any){
  if(data){
    console.log("data recu",data)
    this.form=new FormGroup({
      titre: new FormControl(data.titre),
      dateDebut: new FormControl(data.dateDebut),
      dateFin: new FormControl(data.dateFin),
      lieu: new FormControl(data.lieu),
    })
  }else{//je suis dzns create 
    this.form=new FormGroup({
      titre: new FormControl(null),
      dateDebut: new FormControl(),
      dateFin: new FormControl(),
      lieu: new FormControl(),
    })
    }
  
}
  //declaration de form de mod
  form!:FormGroup;
  // ngOnInit() {
  //   this.form=new FormGroup({
  //     titre: new FormControl(null),
  //     dateDebut: new FormControl(),
  //     dateFin: new FormControl(),
  //     lieu: new FormControl(),
  //   })
  // }
  //save et close
  save() {
    this.dialogRef.close(this.form.value);
}

close() {
    this.dialogRef.close();
}

}


