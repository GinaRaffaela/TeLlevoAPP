import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'], 
})
export class HomePage {
  data: any; 
  constructor(private activeroute: ActivatedRoute, private router: Router, private menuCtrl: MenuController) {
    
 
    this.activeroute.queryParams.subscribe(params => { 
      if (this.router.getCurrentNavigation().extras.state) { 
        this.data = this.router.getCurrentNavigation().extras.state.user; 
        console.log(this.data) 
      }else{this.router.navigate(["/login"])} 
    });
    
    
  }
  conductor(){
    this.router.navigate(['/conductor']);
  }

  pasajero(){
    this.router.navigate(['/pasajero']);
  }

  menu(){
    this.menuCtrl.toggle();
  }
}