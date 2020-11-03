import { Component, OnInit } from '@angular/core';
import { IuserInfo } from './MyInterface';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  clickCount: number = 0;

  userIfo: IuserInfo = {
    name : "Premnath",
    phomeNo : 8970296514,
    adress: "Mangaluru",
    userImage: "https://static.thenounproject.com/png/17241-200.png"
  };

  constructor() { }

  //Incrimet counter
  counterTrack = () => {
    this.clickCount += 1;
  }

  ngOnInit(): void {
  }

}
