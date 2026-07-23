import { Injectable, signal } from '@angular/core';

export type Lang = 'it' | 'en';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private static readonly STORAGE_KEY = 'achiavari-language';

  readonly lang = signal<Lang>(this.readInitialLang());

  setLang(nextLang: Lang): void {
    this.lang.set(nextLang);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(I18nService.STORAGE_KEY, nextLang);
    }
  }

  private readInitialLang(): Lang {
    if (typeof localStorage === 'undefined') {
      return 'it';
    }

    const stored = localStorage.getItem(I18nService.STORAGE_KEY);
    return stored === 'en' ? 'en' : 'it';
  }
}
