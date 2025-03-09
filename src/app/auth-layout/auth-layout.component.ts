import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SidebarComponent } from "./ui/sidebar/sidebar.component";
import { HeaderComponent } from './ui/header/header.component';
import { MainComponent } from "./ui/main/main.component";
import { FooterComponent } from "./ui/footer/footer.component";

@Component({
  selector: 'app-auth-layout',
  imports: [HeaderComponent, SidebarComponent, MainComponent, FooterComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthLayoutComponent {

}
