import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'personal-budget';

  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private authservice: AuthService
  ) {}

  ngOnInit(): void {
    //this.getUsers();
  }

  // getUsers(): void {
  //   this.userservice.getUsers().subscribe((res) => {
  //     this.userList = res.map((user) => {
  //       return {
  //         id: user.payload.doc.id,
  //         ...(user.payload.doc.data() as User),
  //       } as User;
  //     });
  //   });
  // }

  // openModal(content: TemplateRef<any>, userId: string): void {
  //   this.userInfo = this.userList.find((user: User) => (user.userId = userId));

  //   this.formInit(this.userInfo);
  //   this.modalService.open(content, { backdrop: 'static', centered: true });
  // }

  // formInit(data: User): void {
  //   this.form = this.fb.group({
  //     userId: this.authservice.currentUserId,
  //     name: [data ? data.name : '', Validators.required],
  //     email: [
  //       data ? data.email : '',
  //       Validators.compose([
  //         Validators.required,
  //         Validators.pattern(
  //           /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,}$/
  //         ),
  //       ]),
  //     ],
  //   });
  // }

  // getAmount(): number {
  //   tempUser: User = this.userList.find(
  //     (user: User) => (user.userId = this.authservice.currentUserId)
  //   );
  //   const amount = this.userInfo.budget.title.amount;
  //   return amount;
  // }

  // addUser(user: User): void {
  //   this.userservice.addUser(user).then();
  // }

  // updateUser(user: User): void {
  //   this.userservice.updateUser(user, this.form.value).then();
  // }

  // deleteUser(user: User): void {
  //   this.userservice.deleteUser(user).then();
  // }
}
