import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
    // Mova suas rotas para cá. Exemplo:
    { path: 'about', component: AboutComponent },
    { path: 'projects', component: ProjectsComponent },
    // Adicione uma rota padrão se necessário:
    // { path: '', redirectTo: '/about', pathMatch: 'full' },
];