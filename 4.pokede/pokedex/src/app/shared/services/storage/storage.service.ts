import { Injectable, Inject,PLATFORM_ID  } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class StorageService {

  constructor(@Inject(PLATFORM_ID) private platformId: any ) { }

  set(key: string, value: any) {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.setItem(key, JSON.stringify(value));
    }
  }

  get(key: string) {
    if (isPlatformBrowser(this.platformId)) {
      return JSON.parse(localStorage.getItem(key));
      }
  }

  destroy(key: string) {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.removeItem(key);
   }
  }

  getCache(key) {
    const data = this.get(key);

    if (data) {
      const now = new Date().getTime();
      const time = this.get('date-' + key);
      const expire = this.get('expire-' + key);
      if ((now - time) < expire) {
        return data;
      }
    }
    return false;
  }

  setCache(key: string, value: any, expire: number = 14400000) { // 4h
    this.set('expire-' + key, expire);
    this.set('date-' + key, new Date().getTime());
    this.set(key, value);
  }
}
