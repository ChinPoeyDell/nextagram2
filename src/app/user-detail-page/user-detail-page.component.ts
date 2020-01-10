import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail-page',
  templateUrl: './user-detail-page.component.html',
  styleUrls: ['./user-detail-page.component.css']
})
export class UserDetailPageComponent implements OnInit {
  images

  constructor(private userService: UserService, private route: ActivatedRoute ) { }

  ngOnInit() {
    let userId = this.route.snapshot.params.userId
    this.userService.getUserImages(userId).subscribe((images)=>{
      this.images = images
    })
  }

}
