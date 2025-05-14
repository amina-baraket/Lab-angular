import { Component ,OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from 'src/Services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrl: './member-form.component.css'
})
export class MemberFormComponent implements OnInit {
  constructor(private MS: MemberService,
    private router: Router,
    private activatedRoute:ActivatedRoute
  ){}
  form!: FormGroup;
  // ngOnInit() {
  //   //1.recuperer la route active //2. chercher id
  //   const idcourant=this.activatedRoute.snapshot.params['id']
  //   console.log(idcourant)
  //   if(idcourant) {
  //     console.log('Je suis dans edit')
  //     this.MS.GetMemberById(idcourant).subscribe(
  //       (member) => {
  //         this.form.patchValue({
  //           cin: member.cin,
  //           name: member.name,
  //           type: member.type,
  //           createdDate: member.createdDate,
  //       });
  //   })
  // }else{
  //     this.form = new FormGroup({
  //       cin: new FormControl(null, [Validators.required]),
  //       name: new FormControl(null, [Validators.required]),
  //       type: new FormControl(null, [Validators.required]),
  //       createdDate: new FormControl(null, [Validators.required]),
  //     })
  //   }
  //   //3.si id existe et a une valeur 
  //   //=> je suis dans edit
  //   //si non je suis dans create
   
  // }
  ngOnInit() {
    //1.recupere la route active
    const idcourant = this.activatedRoute.snapshot.params['id']
    //2.chercher id
    //3.si id existe et a une valeur 
    //=> je suis dans edit
    if (idcourant) {
      console.log('je suis dans edit')
      this.MS.GetMemberById(idcourant).subscribe((data) => {
        this.form = new FormGroup({
          cin: new FormControl(data.cin, [Validators.required]),
          name: new FormControl(data.name, [Validators.required]),
          type: new FormControl(data.type),
          createdDate: new FormControl(data.createdDate),

        })
      })
    }
    // sinon je suit dans create 
    else {
      this.form = new FormGroup({
        cin: new FormControl(null, [Validators.required]),
        name: new FormControl(null, [Validators.required]),
        type: new FormControl(null, [Validators.required]),
        createdDate: new FormControl(null, [Validators.required]),
      })
    }

  }
  //méthode avant edit 
  Onsubb() {
    console.log(this.form.value)
    this.MS.addMember(this.form.value).subscribe(()=>{
      this.router.navigate([''])
    })  
  }
  Onsub() {
    const idcourant = this.activatedRoute.snapshot.params['id'];
    if (idcourant) {
      this.MS.update(idcourant, this.form.value).subscribe(() => {
        this.router.navigate(['']); 
      });
    } else {
      this.MS.addMember(this.form.value).subscribe(() => {
        this.router.navigate(['']); 
      });
    }
  }
}
