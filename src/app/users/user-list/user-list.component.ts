import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users = [
    { id: 1, name: 'Yoaninna Mamani Paredes' , nationality:'Peruana', adress:'Yura A23-Arequipa', age: 20 },
    { id: 2, name: 'Julio Cesar Sandoval Llica' , nationality:'Chileno', adress:'Las Condes 421 - Santiago', age:20},
    { id: 3, name: 'Maria Paredes de Mamani', nationality:'Peruana', adress:'Cerro Colorado B423 - Arequipa', age:25 },
  ];

  constructor(private router: Router) {}

  showUserDetails(userId: number, name: string, nationality: string, adress: string, age:number) {
    this.router.navigate(['/users/user-details', userId, name, nationality, adress, age]);
    
  }
}

