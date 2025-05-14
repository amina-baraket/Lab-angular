import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Pub } from 'src/Models/Pub';
import { PubService } from 'src/Services/pub.service';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-modal-pub',
  templateUrl: './modal-pub.component.html',
  styleUrl: './modal-pub.component.css'
})
export class ModalPubComponent {
  constructor(public dialogRef: MatDialogRef<ModalPubComponent>, @Inject(MAT_DIALOG_DATA) data: any,private PS: PubService
) {
    if (data) {
      this.PS.getPubById(data).subscribe((res)=>{
      console.log('data recu', data)
      this.form = new FormGroup({
        titre: new FormControl(res.titre),
        type: new FormControl(res.type),
        lien: new FormControl(res.lien),
        date: new FormControl(res.date),
        sourcepdf: new FormControl(res.sourcepdf),
      })
      })
    }
    else //je suis dans create
    {
      this.form = new FormGroup({
        titre: new FormControl(null),
        type: new FormControl(),
        lien: new FormControl(),
        date: new FormControl(),
        sourcepdf: new FormControl(),
      })
    }
  }
  
  form!: FormGroup;
  type!: string;

  foods: Food[] = [
    {value: 'conf-0', viewValue: 'Conf'},
    {value: 'journal-1', viewValue: 'Journal'},
    {value: 'workshop-2', viewValue: 'Workshop'},
  ];


save() {
  this.dialogRef.close(this.form.value);
}

close() {
  this.dialogRef.close();
}

}
