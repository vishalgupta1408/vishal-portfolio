import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { PortfolioConfig } from '../models/portfolio-config.model';

declare global {
  interface Window {
    __env?: { CONFIG_ROOT_URL?: string };
  }
}

@Injectable({ providedIn: 'root' })
export class PortfolioConfigService {
  private readonly _config = signal<PortfolioConfig | null>(null);
  readonly config = this._config.asReadonly();

  constructor(private http: HttpClient) {}

  async loadConfig(): Promise<void> {
    const rootUrl = (window.__env?.CONFIG_ROOT_URL ?? '').replace(/\/$/, '');
    const localUrl = '/portfolio/config.json';

    if (rootUrl) {
      try {
        const data = await firstValueFrom(
          this.http.get<PortfolioConfig>(`${rootUrl}/portfolio/config.json`)
        );
        this._config.set(data);
        console.log('[Portfolio] Config loaded from remote:', rootUrl);
        return;
      } catch {
        console.warn('[Portfolio] Remote config unavailable, falling back to local assets.');
      }
    }

    const data = await firstValueFrom(this.http.get<PortfolioConfig>(localUrl));
    this._config.set(data);
    console.log('[Portfolio] Config loaded from local assets.');
  }
}
