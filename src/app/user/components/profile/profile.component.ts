import { Component, OnInit } from '@angular/core';
import { Profile } from '../../Models/profile';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService:UserService) { }
  profile?:Profile
  ngOnInit(): void {
  //  this.profile=this.userService.userDetails;
  this.userService.getUserProfile().subscribe(res=>{
  this.userService.userDetails=res;
  this.profile=res;
  console.log(res)
  })
}
}
