import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withRouterConfig } from '@angular/router';
import { routes } from './app/app.routes';
import { App } from './app/app';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(App, {
  providers: [
    provideAnimations(),
    provideRouter(
      routes,
      withRouterConfig({ onSameUrlNavigation: 'reload' }) // 👈 Important!
    )
  ],
}).catch(err => console.error(err));
