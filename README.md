# Pokédex - Aplicação Web

## Descrição do Projeto

Este é um projeto acadêmico desenvolvido como parte da avaliação AV1 para a disciplina de Desenvolvimento Web. A aplicação é uma Pokédex simples que consome dados da PokéAPI para exibir uma lista de pokémons e permitir visualizar detalhes de cada um.

A aplicação é dividida em duas páginas principais:
- **Página Inicial (index.html)**: Exibe uma lista de 20 pokémons em cards responsivos.
- **Página de Detalhes (detalhes.html)**: Mostra informações detalhadas de um pokémon específico, acessada via parâmetro de URL.

## Tecnologias Utilizadas

- **HTML5**: Estrutura das páginas.
- **CSS3**: Estilos personalizados para um visual moderno.
- **Bootstrap 5**: Framework para layout responsivo e componentes UI.
- **JavaScript Puro**: Lógica da aplicação, consumo de API com fetch e async/await.
- **PokéAPI**: API externa para obter dados dos pokémons (https://pokeapi.co/api/v2/pokemon).

## Funcionalidades

- **Listagem de Pokémons**: Exibe os primeiros 20 pokémons da API em cards com imagem e nome.
- **Detalhes do Pokémon**: Página dedicada com informações completas (altura, peso, tipos, habilidades, stats).
- **Navegação**: Botão "Ver Detalhes" leva à página de detalhes; botão "Voltar" retorna à lista.
- **Loading/Spinner**: Indicador visual durante o carregamento dos dados.
- **Tratamento de Erros**: Mensagens amigáveis em caso de falha na requisição.
- **Responsividade**: Layout adaptável a diferentes tamanhos de tela usando Bootstrap Grid.
- **Interatividade**: Hover effects nos cards para melhor UX.

## Como Executar

1. **Clone ou Baixe o Projeto**: Certifique-se de ter todos os arquivos na estrutura correta.
2. **Abra no Navegador**: Abra o arquivo `index.html` diretamente em um navegador web moderno (Chrome, Firefox, Edge, etc.).
3. **Navegação**: Clique em "Ver Detalhes" em qualquer card para acessar a página de detalhes.
4. **Requisitos**: Conexão com a internet para consumir a PokéAPI.

**Nota**: Como é uma aplicação frontend pura, não há necessidade de servidor local. Basta abrir os arquivos HTML no navegador.

## Estrutura de Pastas

```
av1-dwb-jesus2bti-2bimestre/
│
├── index.html              # Página inicial com listagem de pokémons
├── detalhes.html           # Página de detalhes do pokémon
│
├── css/
│   └── style.css           # Estilos personalizados (CSS3)
│
├── js/
│   ├── script.js           # JavaScript para index.html (fetch e display)
│   └── detalhes.js         # JavaScript para detalhes.html (fetch detalhes)
│
└── README.md               # Este arquivo
```

## Prints Ilustrativos

### Página Inicial
![Página Inicial](https://via.placeholder.com/800x400?text=Página+Inicial+-+Lista+de+Pokémons)

*Exemplo: Lista de pokémons em cards responsivos com loading inicial.*

### Página de Detalhes
![Página de Detalhes](https://via.placeholder.com/800x400?text=Página+de+Detalhes+-+Pokémon)

*Exemplo: Detalhes completos de um pokémon com imagem e stats.*

## Link da PokéAPI

- **Documentação**: https://pokeapi.co/docs/v2
- **Endpoint Principal**: https://pokeapi.co/api/v2/pokemon?limit=20
- **Endpoint de Detalhes**: https://pokeapi.co/api/v2/pokemon/{id}

## Considerações Técnicas

- **JavaScript Puro**: Sem uso de bibliotecas externas além do Bootstrap (via CDN).
- **Async/Await**: Utilizado para requisições assíncronas.
- **Manipulação DOM**: Injeção dinâmica de HTML baseada nos dados da API.
- **Tratamento de Erros**: Try/catch/finally para robustez.
- **Responsividade**: Bootstrap Grid para colunas adaptáveis (col-lg-3, col-md-4, etc.).
- **Acessibilidade**: Uso de classes Bootstrap como `visually-hidden` para leitores de tela.

## Autor

- **Nome**: Jesus2BTI
- **Projeto Acadêmico**: AV1 - Desenvolvimento Web - 2º Bimestre

---

*Este projeto foi desenvolvido exclusivamente com tecnologias web padrão, focando em boas práticas de desenvolvimento frontend.*
## Atualizado em 03/06/2026