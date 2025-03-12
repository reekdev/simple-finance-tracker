import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SidebarToggleService } from '../../data-access/sidebar-toggle/sidebar-toggle.service';
@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.hidden]': `sidebarState() === 'close'`,
    '[class.shown]': `sidebarState() === 'open'`,
    '[attr.sidebar-state]': `sidebarState()`
  }
})
export class SidebarComponent {
  val = false;

  readonly #sidebarToggleService = inject(SidebarToggleService);
  sidebarState = this.#sidebarToggleService.sidebarState;

  closeSidebar() {
    this.#sidebarToggleService.toggleSidebar();
  }

  toggleSidebar(event: MouseEvent) {
    event.preventDefault();
    this.#sidebarToggleService.toggleSidebar();
  }
}
