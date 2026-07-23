import { Component, computed, inject } from '@angular/core';

import { I18nService } from '../i18n.service';
import { SITE_CONTENT } from '../site-content';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  template: `
    <section class="page-block">
      <h1>{{ content().contact.title }}</h1>
      <p>{{ content().contact.intro }}</p>
    </section>

    <section class="page-block links">
      <a href="http://www.achiavari.it/" target="_blank" rel="noreferrer">{{ content().contact.websiteLabel }}</a>
      <a href="https://www.booking.com/hotel/it/appartamento-a-chiavari.it.html" target="_blank" rel="noreferrer">{{ content().contact.bookingLabel }}</a>
    </section>

    <section class="page-block split">
      <article>
        <h2>{{ content().contact.locationLabel }}</h2>
        <p>{{ content().contact.locationText }}</p>
      </article>
      <article>
        <h2>{{ content().contact.transportTitle }}</h2>
        <ul>
          @for (trip of content().contact.transport; track trip) {
            <li>{{ trip }}</li>
          }
        </ul>
      </article>
    </section>
  `
})
export class ContactPageComponent {
  private readonly i18n = inject(I18nService);
  readonly content = computed(() => SITE_CONTENT[this.i18n.lang()]);
}
