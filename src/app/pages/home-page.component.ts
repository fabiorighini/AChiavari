import { Component, computed, inject } from '@angular/core';

import { I18nService } from '../i18n.service';
import { SITE_CONTENT } from '../site-content';

@Component({
  selector: 'app-home-page',
  standalone: true,
  template: `
    <section class="page-block intro">
      <h1>{{ content().home.introTitle }}</h1>
      <p>{{ content().home.introText }}</p>
    </section>

    <section class="page-block cards">
      @for (card of content().home.cards; track card) {
        <article class="info-card">{{ card }}</article>
      }
    </section>

    <section class="page-block highlights">
      <h2>{{ content().home.highlightsTitle }}</h2>
      <ul>
        @for (item of content().home.highlights; track item) {
          <li>{{ item }}</li>
        }
      </ul>
    </section>
  `
})
export class HomePageComponent {
  private readonly i18n = inject(I18nService);
  readonly content = computed(() => SITE_CONTENT[this.i18n.lang()]);
}
