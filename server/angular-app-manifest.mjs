
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
    'index.csr.html': {size: 876, hash: '0d6328be4651c7236d7875c5f40f3b88ad0e295500cc0f56931514fed1b43b23', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1094, hash: 'c201b08f4b232d58274015bfe0720e0546263ba07c03fe888d6418d8517c2d7e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 50364, hash: 'cf287e3f75acdcac7fe3a993e0d3a0260ff056e536683d9d34c3bd1427acfcc2', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 50364, hash: 'cf287e3f75acdcac7fe3a993e0d3a0260ff056e536683d9d34c3bd1427acfcc2', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-P6O3IGSC.css': {size: 652, hash: '2rdPBcB9of4', text: () => import('./assets-chunks/styles-P6O3IGSC_css.mjs').then(m => m.default)}
  },
};
