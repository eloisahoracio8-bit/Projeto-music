import { Component } from '@angular/core';
import { DefaultLoginLayout } from "../../components/default-login-layout/default-login-layout";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DefaultLoginLayout],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {

}
