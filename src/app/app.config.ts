import { ApplicationConfig, APP_INITIALIZER, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { PortfolioConfigService } from './services/portfolio-config.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: (svc: PortfolioConfigService) => () => svc.loadConfig(),
      deps: [PortfolioConfigService],
      multi: true,
    },
  ]
};
