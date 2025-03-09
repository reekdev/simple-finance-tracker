import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { NonAuthLayoutComponent } from './non-auth-layout/non-auth-layout.component';

@Component({
  imports: [RouterModule, AuthLayoutComponent, NonAuthLayoutComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
