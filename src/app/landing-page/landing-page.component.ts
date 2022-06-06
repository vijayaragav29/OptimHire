import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  userList:any = [];
  constructor(private service: LoginServiceService) { }

  ngOnInit(): void {
    this.userList = this.service.getUserList();

  }

}
