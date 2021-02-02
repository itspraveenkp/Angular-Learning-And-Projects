import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'random-card';

  user: any;

  constructor(
    private userservice: UserService,
    private toaster: ToastrService,
    ){}

  ngOnInit(){
    this.userservice.getUser().subscribe(
      (user: any) => {
        console.log(user);
        this.user = user.results[0];
      },
      (err) => {
        this.toaster.error(err.status, "OOPS")
      },
    )
  }
}
