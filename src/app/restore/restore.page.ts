import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restore',
  templateUrl: './restore.page.html',
  styleUrls: ['./restore.page.scss'],
})
export class RestorePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  recuperar(){
    this.router.navigate(['/login']);
  }
}
