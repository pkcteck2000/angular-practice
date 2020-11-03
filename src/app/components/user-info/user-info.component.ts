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
  
  userInfo: IuserInfo = {
    name : "",
    phoneNo : 0,
    adress: "",
    userImage: "https://static.thenounproject.com/png/17241-200.png"
  };

  constructor() { }
  
  placeCall = () => {
    //TODO: place a call when invoke this function
  }

  addToList = () => {
    const tempData: IuserInfo = { ...this.userInfo }
    contactList.unshift(tempData);
  }

  removeContact = (person) => {
    this.contactList.forEach((item, index) => {
      if (item === person) {
        this.contactList.splice(index, 1)
      }
    })
  }

  ngOnInit(): void {
  }

}
