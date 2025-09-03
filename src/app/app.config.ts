// src/app/app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withDebugTracing } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withDebugTracing())]
};

// A configuração do roteador inclui o rastreamento de depuração para auxiliar no desenvolvimento e solução de problemas.