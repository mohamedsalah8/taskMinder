import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiFunctionServiceService } from 'src/app/services/api-function-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isLogged!: any;
  userId!: any;
  userImg!: string;
  signOut() {
    localStorage.removeItem('isLogged');
    this.router.navigateByUrl('/login').then(() => {
      window.location.reload();
    });
  }
  constructor(private router: Router, private api: ApiFunctionServiceService) {
    
    this.isLogged = localStorage.getItem('isLogged');
    if (this.isLogged) {
      this.userId = localStorage.getItem('user_id');
      this.api
        .getById('http://localhost:3000/users', this.userId)
        .subscribe((data: any) => {
          this.userImg = data.img;
        });
        
    }
    
  }
}
