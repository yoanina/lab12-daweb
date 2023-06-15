import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userId: number | null = null;
  userName: string | null = null;
  userNationality: string | null = null;
  userAdress: string | null = null;
  userAge: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = +params['id'];
      this.userName = params['name'];
      this.userNationality = params['nationality'];
      this.userAdress = params['adress'];
      this.userAge = +params['age'];
      // this.userAge = +params['age'];
    });
  }
}


