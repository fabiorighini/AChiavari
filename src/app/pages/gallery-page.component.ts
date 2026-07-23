import { Component, HostListener, computed, inject, signal } from '@angular/core';

import { I18nService } from '../i18n.service';
import { GALLERY_IMAGES, SITE_CONTENT } from '../site-content';

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  template: `
    <section class="page-block">
      <h1>{{ content().gallery.title }}</h1>
      <p>{{ content().gallery.subtitle }}</p>
    </section>

    <section class="gallery-grid">
      @for (image of images; track image.src; let idx = $index) {
        <figure
          class="gallery-item"
          role="button"
          tabindex="0"
          (click)="openLightbox(idx)"
          (keydown.enter)="openLightbox(idx)"
          (keydown.space)="openLightbox(idx); $event.preventDefault()"
        >
          <img [src]="image.src" [alt]="language() === 'it' ? image.altIt : image.altEn" loading="lazy" />
        </figure>
      }
    </section>

    @if (selectedImage()) {
      <div class="lightbox-backdrop" role="dialog" aria-modal="true" (click)="closeLightbox()">
        <div class="lightbox-panel" (click)="$event.stopPropagation()">
          <button
            class="lightbox-btn lightbox-close"
            type="button"
            (click)="closeLightbox()"
            [attr.aria-label]="labels().close"
          >
            ×
          </button>

          <button
            class="lightbox-btn lightbox-prev"
            type="button"
            (click)="prevImage($event)"
            [attr.aria-label]="labels().prev"
          >
            ‹
          </button>

          <img
            class="lightbox-image"
            [src]="selectedImage()!.src"
            [alt]="language() === 'it' ? selectedImage()!.altIt : selectedImage()!.altEn"
          />

          <button
            class="lightbox-btn lightbox-next"
            type="button"
            (click)="nextImage($event)"
            [attr.aria-label]="labels().next"
          >
            ›
          </button>
        </div>
      </div>
    }
  `
})
export class GalleryPageComponent {
  private readonly i18n = inject(I18nService);

  readonly content = computed(() => SITE_CONTENT[this.i18n.lang()]);
  readonly language = this.i18n.lang;
  readonly images = GALLERY_IMAGES;
  readonly selectedIndex = signal<number | null>(null);
  readonly selectedImage = computed(() => {
    const idx = this.selectedIndex();
    return idx === null ? null : this.images[idx] ?? null;
  });
  readonly labels = computed(() =>
    this.language() === 'it'
      ? { close: 'Chiudi', prev: 'Foto precedente', next: 'Foto successiva' }
      : { close: 'Close', prev: 'Previous photo', next: 'Next photo' }
  );

  openLightbox(idx: number): void {
    this.selectedIndex.set(idx);
    this.lockBodyScroll(true);
  }

  closeLightbox(): void {
    this.selectedIndex.set(null);
    this.lockBodyScroll(false);
  }

  prevImage(event?: Event): void {
    event?.stopPropagation();
    const idx = this.selectedIndex();
    if (idx === null) {
      return;
    }

    const prev = (idx - 1 + this.images.length) % this.images.length;
    this.selectedIndex.set(prev);
  }

  nextImage(event?: Event): void {
    event?.stopPropagation();
    const idx = this.selectedIndex();
    if (idx === null) {
      return;
    }

    const next = (idx + 1) % this.images.length;
    this.selectedIndex.set(next);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.selectedIndex() !== null) {
      this.closeLightbox();
    }
  }

  @HostListener('document:keydown.arrowleft')
  onArrowLeft(): void {
    if (this.selectedIndex() !== null) {
      this.prevImage();
    }
  }

  @HostListener('document:keydown.arrowright')
  onArrowRight(): void {
    if (this.selectedIndex() !== null) {
      this.nextImage();
    }
  }

  private lockBodyScroll(lock: boolean): void {
    if (typeof document === 'undefined') {
      return;
    }

    document.body.style.overflow = lock ? 'hidden' : '';
  }
}
