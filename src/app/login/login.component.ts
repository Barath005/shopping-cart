import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }

  signIn(e: Event): void {
    e.preventDefault();

    const emailInput = document.getElementById('email') as HTMLInputElement;
    const pwdInput = document.getElementById('pwd') as HTMLInputElement;
    const email: string = emailInput.value;
    const pwd: string = pwdInput.value;

    let formData: Array<{ email: string, pwd: string, fname: string, lname: string, login?: string }> = JSON.parse(localStorage.getItem('formData') || '[]');

    const exist: boolean = formData.some(data => data.email.toLowerCase() === email.toLowerCase() && data.pwd.toLowerCase() === pwd.toLowerCase());
    const userIndex: number = formData.findIndex(data => data.email.toLowerCase() === email.toLowerCase() && data.pwd.toLowerCase() === pwd.toLowerCase());

    if (userIndex !== -1) {
      formData[userIndex].login = 'active';
      localStorage.setItem('formData', JSON.stringify(formData));

      sessionStorage.setItem('ID', userIndex.toString());
      sessionStorage.setItem('firstName', formData[userIndex].fname);
      sessionStorage.setItem('lastName', formData[userIndex].lname);
      sessionStorage.setItem('email', formData[userIndex].email);
      sessionStorage.setItem('login', formData[userIndex].login || '');
    }

    if (!exist) {
      alert('Incorrect login credentials');
    } else {
      this.router.navigate(['/']);
    }
  }
}