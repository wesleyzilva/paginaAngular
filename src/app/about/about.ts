import { Component, OnInit, SecurityContext } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { marked } from 'marked';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readmeContent: SafeHtml = '';

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    const githubReadmeUrl = 'https://raw.githubusercontent.com/wesleyzilva/pagina/main/README.md';
    this.http.get(githubReadmeUrl, { responseType: 'text' }).subscribe({
      next: markdownText => {
        const htmlContent = marked.parse(markdownText);
        this.readmeContent = this.sanitizer.sanitize(SecurityContext.HTML, htmlContent) || '';
      },
      error: () => {
        this.readmeContent = this.sanitizer.bypassSecurityTrustHtml(`<p style="color: red;">Erro ao carregar o plano de evolução. Por favor, tente novamente mais tarde.</p>`);
      },
    });
  }
}
