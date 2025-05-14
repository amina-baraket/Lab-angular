import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private afAuth: AngularFireAuth, private router:Router) {
  }
  email:string=''
  password:string=''
  Sub(){
    console.log(this.email,this.password)
    this.afAuth.signInWithEmailAndPassword
    (this.email,this.password).then(()=>{
      this.router.navigate(['/dashboard'])
    })
    
  }

signInWithEmailAndPassword(email: string, password: string) {
return this.afAuth.signInWithEmailAndPassword(email, password);
}

signOut() {
return this.afAuth.signOut();
}
}
