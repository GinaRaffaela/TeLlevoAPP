import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

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
    else{
      let navigationExtras: NavigationExtras = {
        state: {
          user: this.formularioIngreso.value 
        }
      };
      this.router.navigate(['/home'],navigationExtras);}
     
  }

  recuperar(){
    this.router.navigate(['/restore']);
  }
}
