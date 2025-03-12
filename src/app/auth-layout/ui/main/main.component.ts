import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SidebarToggleService } from '../../data-access/sidebar-toggle/sidebar-toggle.service';
@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[attr.sidebar-state]': `sidebarState()`
  }
})
export class MainComponent {
  readonly #sidebarToggleService = inject(SidebarToggleService);
  sidebarState = this.#sidebarToggleService.sidebarState;
}
