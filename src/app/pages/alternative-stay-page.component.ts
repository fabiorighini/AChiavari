import { Component, computed, inject } from '@angular/core';

import { I18nService } from '../i18n.service';
import { SITE_CONTENT } from '../site-content';

@Component({
  selector: 'app-alternative-stay-page',
  standalone: true,
  template: `
    <section class="page-block">
      <h1>{{ content().alternative.title }}</h1>
      <p>{{ content().alternative.subtitle }}</p>
    </section>

    <section class="page-block split">
      <article>
        <h2>{{ content().alternative.hostTitle }}</h2>
        <p>{{ content().alternative.hostText }}</p>
      </article>
      <article>
        <h2>{{ content().alternative.servicesTitle }}</h2>
        <ul>
          @for (service of content().alternative.services; track service) {
            <li>{{ service }}</li>
          }
        </ul>
      </article>
    </section>

    <section class="page-block cta-row">
      <a class="button" href="https://www.borgolungo.it/it" target="_blank" rel="noreferrer">
        {{ content().alternative.ctaWebsite }}
      </a>
      <a class="button button-secondary" href="https://www.borgolungo.it/it/contatti" target="_blank" rel="noreferrer">
        {{ content().alternative.ctaContact }}
      </a>
    </section>
  `
})
export class AlternativeStayPageComponent {
  private readonly i18n = inject(I18nService);
  readonly content = computed(() => SITE_CONTENT[this.i18n.lang()]);
}
