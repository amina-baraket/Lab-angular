import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Evt } from 'src/Models/Evt';
import { EventService } from 'src/Services/event.service';

@Component({
  selector: 'app-visibility-evt-comp',
  templateUrl: './visibility-evt-comp.component.html',
  styleUrl: './visibility-evt-comp.component.css'
})
export class VisibilityEvtCompComponent {
//forcage de type=> Modal
EventAffiche!:Evt
constructor (public dialogRef:MatDialogRef<VisibilityEvtCompComponent>, @Inject (MAT_DIALOG_DATA) data:any,
 private ES:EventService){
    console.log('idddd',data)
    this.ES.getEvtById(data).subscribe((EvtRecup)=>{
      this.EventAffiche=EvtRecup
    })
  }
}
