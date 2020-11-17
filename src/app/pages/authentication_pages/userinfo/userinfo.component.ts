import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss'],
})
export class UserinfoComponent implements OnInit {
  constructor(
    private firestore: AngularFirestore,
    private route: ActivatedRoute,
    public authService: AuthService
  ) {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
    });
  }

  ngOnInit(): void {}
}
