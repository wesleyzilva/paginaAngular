import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projetos = [
    {
      titulo: 'Projeto 1: Vulnerabilidades em parque de 110 aplicações Angular e Java',
      escopo: 'Redução de vulnerabilidades em aplicação em tempo record com squad de terceiros sem conhecimento no negócio e prazo e budget estipulado para terminar.',
      duracao: '9 meses',
      equipe: '1 squad contendo 1 SRE, 3 desenvolvedores, 1 QA, 1 Arquiteto',
      conquistas: 'Redução de 1200 para 300 vulnerabilidades, zerando as críticas e altas, implantação do DevSecOps com a utilização do Veracode, Rapid 7, Automação de testes e criação e ajuste em esteira CI/CD.',
      destaques: 'Coordenação direta no modelo ágil sem scrum master com reports executivos.',
      links: [{ url: 'https://flexpag.com/', texto: 'Flexpag M&A Serasa Experian' }, { url: 'https://www.linkedin.com/in/matheus-benicio-b55a4a8/', texto: 'Referência: Matheus Benicio' }],
      skills: ['Java', 'Angular', 'Veracode', 'Rapid 7', 'CI/CD', 'Processos Ágeis', 'Liderança', 'Resolução de Problemas']
    },
    {
      titulo: 'Projeto 2: Implementação de Gestão de dados em M&A',
      escopo: 'Implantação de equipes de Analytics, Engenharia de dados & Processamento de dados separando os papeis e responsabilidades e focando em monitoramento via DataDog com comunicação via Power Automate em Low Code para acompanhamento real time via Teams e baseada na arquitetura de referência.',
      duracao: '9 meses',
      equipe: '1 squad contendo 1 Product Owner, 1 DBRE, 2 analistas de dados (Analytics), 2 engenheiros de dados, 2 analistas de dados (ETL)',
      conquistas: 'Separação de papéis e responsabilidades, elevação da maturidade da equipe e ecossistema mais sustentável.',
      destaques: 'Coordenação direta no modelo ágil sem scrum master com reports executivos.',
      links: [{ url: 'https://flexpag.com/', texto: 'Flexpag M&A Serasa Experian' }, { url: 'https://www.linkedin.com/in/viniciuskr', texto: 'Referência: Vini K' }],
      skills: ['DataDog', 'Power Automate', 'Analytics', 'Engenharia de Dados', 'ETL', 'Liderança', 'Gerenciamento de Pessoas', 'Processos Ágeis']
    },
    {
      titulo: 'Projeto 3: Migração de Pentaho para Databricks e migração de Tableau para PowerBI',
      escopo: 'Criar uma esteira de trabalho para migração de tecnologia de processamento de dados com o objetivo de facilitar a transferência de conhecimento e reposição de equipe devido à alta rotatividade.',
      duracao: '9 meses',
      equipe: '1 squad contendo 1 Product Owner, 1 analista de dados (Analytics), 1 engenheiro de dados, 1 analista de dados (ETL) - todos nível Pleno',
      conquistas: 'Processo monitorado via Datadog com acionamento via Central de monitoração e comunicação via Teams automatizada com Power Automate.',
      destaques: 'Coordenação direta no modelo ágil sem scrum master com reports executivos. B2C Flexpag M&A Serasa Experian',
      links: [{ url: 'https://flexpag.com/', texto: 'Flexpag M&A Serasa Experian' }, { url: 'https://www.linkedin.com/in/viniciuskr', texto: 'Referência: Vini K' }],
      skills: ['Databricks', 'PowerBI', 'Pentaho', 'Tableau', 'Datadog', 'Liderança', 'Processos Ágeis', 'Pensamento Analítico']
    },
    {
      titulo: 'Projeto 4: Transformação Digital',
      escopo: 'Criar uma transformação digital para equipes scrum do B2B baseado em pilares gamificados com foco em métricas para evolução da agilidade.',
      duracao: '3 anos',
      equipe: '5 Scrum Masters (nível senior), cada um com 3 a 5 squads',
      conquistas: 'Construção de dashboards no Tableau com indicadores para entender a evolução da maturidade ágil conectados com o JIRA e Service Now.',
      destaques: 'Atuando como Scrum Master adequando métodos ágeis para ITIL utilizando SLA para priorização via Kanban e fazendo um coach para implantação de processos ágeis para governança na área de segurança da aplicação. Gerando uma experiência SAFE/Scrum of Scrums. B2B Serasa Experian - Governança - Compliance',
      links: [{ url: 'https://serasa.com/', texto: 'B2B Serasa Experian' }, { url: 'https://www.linkedin.com/in/samantha-miziara', texto: 'Referência: Samantha Miziara' }],
      skills: ['Yellow Belt Certification', 'Scrum & Kanban', 'JIRA', 'Miro, Figma', 'Service Now', 'Tableau', 'SAFE', 'ITIL Agile', 'Liderança', 'Gerenciamento de Pessoas', 'Gestão de Times Remotos']
    },
    {
      titulo: 'Projeto 5: IA para LegalTech.',
      escopo: 'Facilitar a compilação de informações para análises da área jurídica da Serasa com tecnologia Low Code.',
      duracao: '1 ano',
      equipe: '1 squad contendo 1 PO, 1 Dev senior (tech lead), 1 Dev pleno, 2 QA',
      conquistas: 'Criado um sistema com Elastic Search e IA para otimizar análises jurídicas.',
      destaques: 'Redução no SLA de atendimento da equipe jurídica para análises no nível 1 e 2 em cerca de 12%. B2B Serasa Experian',
      links: [{ url: 'https://serasa.com/', texto: 'B2B Serasa Experian | LegalTech' }, { url: 'https://www.linkedin.com/in/simone-conejo-garcia-morello-0a0984137/', texto: 'Referência: Simone Garcia' }],
      skills: ['Inteligência Artificial', 'Elasticsearch', 'Low Code (OutSystems)', 'LegalTech', 'Resolução de Problemas', 'Pensamento Analítico']
    },
    {
      titulo: 'Projeto 6: Customer Care',
      escopo: 'Focando em melhoria contínua dos processos de suporte e satisfação do usuário para área de Atendimento em Call Center e área de vendas externas e suporte á vendas.',
      duracao: '2 anos',
      equipe: '2 squads sincronizadas com 1 PO, sendo Squad Vendas com 3 Devs, 2 QAs e outra Squad Atendimento com 2 Devs, 1 QA',
      conquistas: 'Criação de senso de ownership com as squads utilizando Service Now, JIRA e outras ferramentas que possibilitaram ter uma mescla entre desenvolvimento de novas features, suporte a aplicação sustentável e backlog sincronizado.',
      destaques: 'Organização de processo com stakeholders para entrada de demandas para o Product Owner',
      links: [{ url: 'https://serasa.com/', texto: 'B2B Serasa Experian' }, { url: 'https://www.linkedin.com/in/JeanTakushi', texto: 'Referência: Jean Takushi' }],
      skills: ['Java', 'Apigee', 'Salesforce', '.NET', 'Batch', 'Control-M', 'Dynatrace', 'BitBucket', 'ITIL', 'Comunicação Clara', 'Resolução de Problemas']
    },
    {
      titulo: 'Projeto 7: Journey',
      escopo: 'Melhorar a jornada do usuário nas plataformas de autoatendimento baseado nas informações do Adobe Analitycs.',
      duracao: '2 anos',
      equipe: '1 squad contendo, 1 PO, 1 Espec, 2 Dev, 2 QA',
      conquistas: 'Evolução da aplicação para ter uma taxa de disponibilidade de 99%',
      destaques: 'Coordenação indireta de equipe de terceiros e Scrum Master',
      links: [{ url: 'https://serasa.com/', texto: 'B2B Serasa Experian' }, { url: 'https://www.linkedin.com/in/jean-takushi-9371781/', texto: 'Referência: Jean Takushi' }],
      skills: ['Java', 'Apigee', 'Salesforce', '.NET', 'Airflow', 'Control-M', 'Adobe Analytics', 'UI/UX Design', 'Pensamento Analítico']
    },
    {
      titulo: 'Projeto 8: Migração de aplicações legadas .net para arquitetura de referência angular/java',
      escopo: 'Temos um parque de aplicações com cerca de 50 aplicações .net desde o 1.1 até o 2.5 e é necessário evoluir para um frame mais atualizado e/ou migração para angular/java',
      duracao: '3 anos',
      equipe: '1 Squad contendo 5 devs, 4 QA',
      conquistas: 'Migração e decomissionamento de cerca de 20 aplicações criticas no ambiente de vendas e atendimento que são o core do business para BU´s como PME e Large.',
      destaques: 'Coordenação tecnica direta e priorização de backlog sem PO',
      links: [{ url: 'https://serasa.com/', texto: 'B2B Serasa Experian' }, { url: 'https://www.linkedin.com/in/jean-takushi-9371781/', texto: 'Referência: Jean Takushi' }],
      skills: ['Java', 'Apigee', 'Salesforce', '.NET', 'Batch', 'Control-M', 'Dynatrace', 'BitBucket', 'Liderança', 'Resolução de Problemas', 'Git & GitHub']
    },
    {
      titulo: 'Projeto 9: Programa Empower - Six Sigma Yellow Belt IT',
      escopo: 'O projeto Empower nasceu como uma iniciativa de inclusão social e diversidade da Serasa Experian, focada em estruturar e liderar tecnicamente um programa de desenvolvimento. A partir dele, apliquei a metodologia Lean Six Sigma para otimizar processos de desenvolvimento e sustentação de TI no contexto do programa social. O objetivo era criar uma esteira de trabalho eficiente e fluidificar os processos das squads.',
      duracao: '1 ano',
      equipe: '1 coach black belt',
      conquistas: 'Análise e otimização de processos de incidentes, changes e problems na ferramenta Service Now, resultando em uma redução de incidentes diários vindos de N1.',
      destaques: 'Uso de métricas e análise de dados para tomada de decisões estratégicas. Criação de um documento de problemas conhecidos para a equipe de N1, garantindo um fluxo mais fluido de resolução.',
      links: [{ url: 'https://www.serasaexperian.com.br/', texto: 'Serasa Experian' }, { url: 'https://www.linkedin.com/in/thiago-adescenco/', texto: 'Referência: Thiago Ferreira' }],
      skills: ['Lean Six Sigma', 'Análise de Dados', 'DMAIC', 'Melhoria Contínua', 'Mentoria', 'Liderança Técnica', 'Planejamento Estratégico', 'Comunicação Empática']
    },
    {
      titulo: 'Projeto 10: Mentoria internacional Serasa Experian para o mundo Agile',
      escopo: 'Treinamento e aplicação de técnicas de coaching para desenvolver o potencial da equipe, com ênfase em liderança e autonomia. Fui mentorado por um coach internacional para entender os processos ágeis que a Experian estava desenvolvendo na Europa, e depois atuei como mentor de outros profissionais.',
      duracao: '1 ano',
      equipe: '1 coach internacional (como mentor)',
      conquistas: 'Fui mentoriado para entender os processos ágeis na Europa e, posteriormente, usei esse conhecimento para atuar como mentor de outros.',
      destaques: 'Após ser mentorado, passei a ser mentor e tive a oportunidade de mentorar 3 pessoas: uma na Índia, uma no Brasil e outra na África do Sul.',
      links: [{ url: 'https://www.serasaexperian.com.br/carreiras/blog-carreiras/tipos-de-lideranca/', texto: 'Artigo Serasa Experian - Tipos de Liderança' }],
      skills: ['Mentoria internacional Serasa Experian', 'Liderança', 'Desenvolvimento Humano', 'Inteligência Emocional', 'Comunicação Efetiva']
    },
    {
      titulo: 'Projeto 11: Firefighters - Sustentação a aplicações legadas CRM e Billing',
      escopo: 'Sustentação de aplicações legadas de CRM e Billing para uma grande empresa de telecomunicação, em parceria com a Amdocs do Brasil. O foco principal era garantir a estabilidade, corrigir bugs e aprimorar a performance dos sistemas on premise Windows, e em Linux com shell scripts.',
      duracao: '3 anos',
      equipe: 'Squad de sustentação com 5 Desenvolvedores com suporte 24x7.',
      conquistas: 'Redução do número de incidentes e automatização da correção cadastral de clientes, gerando uma redução no número de incidentes diários de 300 para 100.',
      destaques: 'Liderança em uma squad internacional com suporte 24x7, com transferência de conhecimento e operação em turno com a Índia.',
      links: [{ url: 'https://www.serasa.com/', texto: 'Site da Serasa' }],
      skills: ['CRM', 'Billing', 'Java', 'C++', 'ITIL', 'Resolução de Problemas', 'Comunicação Efetiva', 'Gestão de Stakeholders']
    },
    {
      titulo: 'Projeto 12: Serasa Experian São Carlos',
      escopo: 'Trazer o conhecimento técnico que estavam nas consultorias de tecnologia para operação dentro da Serasa, aproximando analistas de negócios de desenvolvimento e disseminando o conhecimento de tecnologia dentro da Serasa Experian.',
      duracao: '2 anos',
      equipe: 'Desenvolvedores terceiros e Analistas de negócio.',
      conquistas: 'Conhecimento técnico das aplicações que estavam com terceiros internalizado na Serasa Experian quando a operação de São Carlos foi montada.',
      destaques: 'Documentação extensiva das aplicações relacionando o técnico e preparando para o mundo da agilidade.',
      links: [{ url: 'https://www.serasa.com/', texto: 'Site da Serasa' }],
      skills: ['CRM', 'Billing', 'Java', 'C++', 'ITIL', 'Resolução de Problemas', 'Comunicação Efetiva', 'Gestão de Stakeholders']
    }
  ];
}