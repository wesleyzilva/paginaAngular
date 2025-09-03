// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
    // Rota padrão, redireciona a página inicial para o componente 'about'
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'projects', component: ProjectsComponent },
    // A rota curinga para lidar com URLs não encontradas
    { path: '**', redirectTo: '/about' }
];