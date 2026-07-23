import { Component, computed, inject } from '@angular/core';

import { I18nService } from '../i18n.service';
import { SITE_CONTENT } from '../site-content';

@Component({
  selector: 'app-apartment-page',
  standalone: true,
  template: `
    <section class="page-block">
      <h1>{{ content().apartment.title }}</h1>
      <p>{{ content().apartment.summary }}</p>
    </section>

    <section class="page-block split">
      <article>
        <h2>{{ content().apartment.detailsTitle }}</h2>
        <ul>
          @for (detail of content().apartment.details; track detail) {
            <li>{{ detail }}</li>
          }
        </ul>
      </article>
      <article>
        <h2>{{ content().apartment.amenitiesTitle }}</h2>
        <ul>
          @for (amenity of content().apartment.amenities; track amenity) {
            <li>{{ amenity }}</li>
          }
        </ul>
      </article>
    </section>
  `
})
export class ApartmentPageComponent {
  private readonly i18n = inject(I18nService);
  readonly content = computed(() => SITE_CONTENT[this.i18n.lang()]);
}
