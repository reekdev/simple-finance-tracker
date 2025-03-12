import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SidebarToggleService } from '../../data-access/sidebar-toggle/sidebar-toggle.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[attr.sidebar-state]': `sidebarState()`
  }
})
export class HeaderComponent {
  readonly #sidebarToggleService = inject(SidebarToggleService);
  sidebarState = this.#sidebarToggleService.sidebarState;

  toggleSidebar(event: MouseEvent) {
    event.preventDefault();
    this.#sidebarToggleService.toggleSidebar();
  }
}
