import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {

  constructor(private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async valorAlerta() {
    const alert = await this.alertCtrl.create({
      header: 'Calcular viaje',
      subHeader: 'Valor del viaje es:',
      message: '$2.500',
      buttons: ['OK']
    });
    await alert.present();
  }
  
}
