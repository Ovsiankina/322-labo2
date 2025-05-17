/**
 * Application configuration file.
 * Defines the global providers and configuration for the Angular application.
 */
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

/**
 * Application configuration object
 * @type {ApplicationConfig}
 * @property {Array} providers - Array of application-wide providers
 *   - provideRouter: Enables routing functionality
 *   - provideHttpClient: Enables HTTP client functionality for API calls
 */
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()],
};
