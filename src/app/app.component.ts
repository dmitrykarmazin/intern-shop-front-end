import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from './auth/store/reducers/auth.reducers';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string = 'app';
  token: string;
  constructor (private store: Store<AuthState>, private authService: AuthService) { }

  ngOnInit(): void {
    this.token = this.authService.getToken();
    console.log(this.token);
    if (this.token) {

    }
  }
}
