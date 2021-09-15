import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 
  formularioIngreso: FormGroup;
  
  constructor(private router: Router, public fb: FormBuilder, public alertController: AlertController) {
    this.formularioIngreso = this.fb.group({
      'usuario': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)

    });
   } 

  ngOnInit() {}
  
  
  async ingresar(){
    var f= this.formularioIngreso.value;
    if(this.formularioIngreso.invalid){
      const alert = await this.alertController.create({
        message:'Debe ingresar todos los datos',
        buttons: ['OK']
      });

      await alert.present();
      return; 
    }
     
    this.router.navigate(['/home']); 
  }

  recuperar(){
    this.router.navigate(['/restore']);
  }
}
