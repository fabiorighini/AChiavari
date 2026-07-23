import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { I18nService, Lang } from './i18n.service';
import { SITE_CONTENT } from './site-content';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private readonly i18n = inject(I18nService);

  readonly lang = this.i18n.lang;
  readonly content = computed(() => SITE_CONTENT[this.i18n.lang()]);
  readonly isMenuOpen = signal(false);

  setLanguage(nextLang: Lang): void {
    this.i18n.setLang(nextLang);
  }

  toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
