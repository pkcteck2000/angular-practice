import { Component, OnInit } from '@angular/core';
import { IuserInfo } from '../../../shared/MyInterface';
import { contactList } from '../../../shared/contactList';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  clickCount: number = 0;
  contactList: IuserInfo[] = contactList;
  
  userIfo: IuserInfo = {
    name : "",
    phoneNo : 0,
    adress: "",
    userImage: ""
  };

  constructor() { }
  
  placeCall = () => {
    //TODO: place a call when invoke this function
  }

  ngOnInit(): void {
  }

}
