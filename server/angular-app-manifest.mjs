
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://wesleyzilva.github.io/paginaAngular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/paginaAngular/about",
    "route": "/paginaAngular"
  },
  {
    "renderMode": 2,
    "route": "/paginaAngular/about"
  },
  {
    "renderMode": 2,
    "route": "/paginaAngular/projects"
  },
  {
    "renderMode": 2,
    "redirectTo": "/paginaAngular/about",
    "route": "/paginaAngular/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 876, hash: '8a1db65197f1ae3c2e95bae7403a22041edce040cb19b916b3870d8e4119d43a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1094, hash: 'a483efa7e2772f1cbe97e87ef2036b36a9630810d5099dbe2e134d8c3cbbc64e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 54026, hash: '402838a56b8a9c235676c4234558f8f7dc92f3ef7a97198b258e533ddc225c9f', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 86059, hash: '705e2e2515f6b504290a05c81c56eb73b4da9ae71d49d15220ea7fd33d1cc6d4', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-P6O3IGSC.css': {size: 652, hash: '2rdPBcB9of4', text: () => import('./assets-chunks/styles-P6O3IGSC_css.mjs').then(m => m.default)}
  },
};
