import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { SidebarToggleService } from '../../data-access/sidebar-toggle/sidebar-toggle.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[attr.sidebar-state]': `sidebarState()`
  }
})
export class FooterComponent {
  readonly #sidebarToggleService = inject(SidebarToggleService);
  sidebarState = this.#sidebarToggleService.sidebarState;

  e = effect(() => {
    console.log('FooterComponent: effect');
    console.log(this.sidebarState());
  });
}
