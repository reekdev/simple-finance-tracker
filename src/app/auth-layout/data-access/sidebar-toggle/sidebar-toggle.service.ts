import { inject, Injectable, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { SidebarState } from './sidebar-state';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SidebarToggleService {
  #sidebarState = signal<SidebarState | undefined>(SidebarState.OPEN);
  sidebarState = this.#sidebarState.asReadonly();
  sidebarState$ = toObservable(this.#sidebarState);

  readonly #document = inject(DOCUMENT);

  toggleSidebar() {
    const v = this.#sidebarState();
    switch (v) {
      case SidebarState.OPEN: {
        this.#sidebarState.set(SidebarState.CLOSE);
        this.#document.body.setAttribute('data-sidebar-state', 'closed');
        break;
      }
      case SidebarState.CLOSE: {
        this.#sidebarState.set(SidebarState.OPEN);
        this.#document.body.setAttribute('data-sidebar-state', 'opened');
        break;
      }
    }
  }
}
