import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-non-auth-layout',
  imports: [],
  templateUrl: './non-auth-layout.component.html',
  styleUrl: './non-auth-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NonAuthLayoutComponent {

}
