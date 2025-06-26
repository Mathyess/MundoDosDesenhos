# 🎬 Site de Desenhos Infantis

Um site moderno e responsivo para apresentar desenhos animados educativos recomendados para crianças de 1 a 8 anos, inspirado no design profissional do site do GTA VI.

## ✨ Características

### 🎨 Design Profissional
- **Layout Minimalista**: Design limpo e moderno com foco na usabilidade
- **Paleta Neutra**: Cores sóbrias e elegantes (branco, cinza, azul)
- **Tipografia Inter**: Fonte moderna e legível
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile

### 📱 Funcionalidades Principais

#### Página Principal (`index.html`)
- **Hero Section**: Apresentação impactante com gradiente e animações
- **Grid de Desenhos**: Cards interativos com informações detalhadas
- **Filtros por Idade**: Sistema de filtragem dinâmica (1-3, 2-4, 3-5, etc.)
- **Seção de Atividades**: Atividades educativas interativas
- **Seção de Jogos**: Jogos educativos para crianças
- **Newsletter**: Sistema de cadastro para novidades

#### Páginas Individuais dos Desenhos
- **Hero Section Personalizada**: Cada desenho tem sua própria identidade visual
- **Informações Detalhadas**: Estatísticas, tags e descrições
- **Seção de Plataformas**: Onde assistir cada desenho com links diretos
- **Episódios Populares**: Destaque para episódios mais conhecidos
- **Newsletter Específica**: Cadastro para novidades de cada desenho

### 🎯 Desenhos Incluídos

1. **Peppa Pig** (`peppa-pig.html`)
   - Idade: 1-3 anos
   - Plataformas: Netflix, YouTube, Disney+
   - Foco: Família, amizade, descobertas

2. **Bluey** (`bluey.html`)
   - Idade: 2-4 anos
   - Plataformas: Disney+, ABC Kids, YouTube
   - Foco: Criatividade, imaginação, família

3. **Paw Patrol** (`paw-patrol.html`)
   - Idade: 3-5 anos
   - Plataformas: Nickelodeon, Netflix, Paramount+
   - Foco: Aventura, amizade, trabalho em equipe

4. **Octonauts** (`octonauts.html`)
   - Idade: 4-6 anos
   - Plataformas: Netflix, BBC iPlayer, Disney+
   - Foco: Ciência, exploração marinha

5. **Curious George** (`curious-george.html`)
   - Idade: 5-7 anos
   - Plataformas: PBS Kids, Peacock, YouTube
   - Foco: Aprendizado, curiosidade, descobertas

6. **Wild Kratts** (`wild-kratts.html`)
   - Idade: 6-8 anos
   - Plataformas: PBS Kids, Amazon Prime, YouTube
   - Foco: Natureza, ciência, animais

7. **Cocomelon** (`cocomelon.html`)
   - Idade: 2-4 anos
   - Plataformas: Netflix, YouTube, Amazon Prime
   - Foco: Música, cores, números

8. **Blippi** (`blippi.html`)
   - Idade: 3-6 anos
   - Plataformas: Netflix, YouTube, Amazon Prime
   - Foco: Educação, exploração, aprendizado

### 🎮 Jogos Educativos

- **Jogo da Memória**: Encontre os pares de cartas com imagens dos desenhos. Capa: `images/Jogodamemoria.png`
- **Quebra-Cabeça**: Monte a imagem dos personagens. Capa: `images/Quebracabeca.webp`
- **Quiz dos Desenhos**: Teste seus conhecimentos sobre os desenhos. Capa: `images/quiz.jpg`

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilos modernos com Flexbox e Grid
- **JavaScript ES6+**: Interatividade e funcionalidades dinâmicas
- **Google Fonts**: Tipografia Inter
- **Unsplash**: Imagens de alta qualidade

## 🚀 Funcionalidades JavaScript

### Filtros Interativos
- Filtragem por faixa etária
- Animações suaves de transição
- Sistema de estados ativos

### Modais Interativos
- Modais para vídeos dos desenhos
- Modais para atividades educativas
- Modais para jogos

### Animações
- Scroll animations com Intersection Observer
- Contadores animados
- Efeitos hover elaborados

### Funcionalidades Extras
- **Sistema de Favoritos**: Botão de coração em cada card
- **Pesquisa**: Campo de pesquisa em tempo real
- **Modo Escuro**: Toggle para alternar tema
- **Compartilhamento**: Compartilhar via Web Share API
- **Newsletter**: Sistema de cadastro funcional

## 📁 Estrutura do Projeto

```
SiteInfantil/
├── index.html              # Página principal
├── peppa-pig.html          # Página individual Peppa Pig
├── bluey.html              # Página individual Bluey
├── paw-patrol.html         # Página individual Paw Patrol
├── octonauts.html          # Página individual Octonauts
├── curious-george.html     # Página individual Curious George
├── wild-kratts.html        # Página individual Wild Kratts
├── cocomelon.html          # Página individual Cocomelon
├── blippi.html             # Página individual Blippi
├── memory.html             # Jogo da Memória
├── puzzle.html             # Quebra-Cabeça
├── quiz.html               # Quiz dos Desenhos
├── styles.css              # Estilos principais
├── script.js               # JavaScript interativo
├── images/                 # Pasta de imagens
│   ├── Jogodamemoria.png
│   ├── Quebracabeca.webp
│   ├── quiz.jpg
│   ├── Blippi.jpg
│   ├── bluey.png
│   ├── Cocomelon.avif
│   ├── Curius Georgie.jpg
│   ├── octonauts.jpg
│   ├── Patrulha Canina.jpg
│   ├── PeppaPig.jpg
│   └── WildKratts.jpg
└── README.md               # Documentação
```

## 🎨 Paleta de Cores

### Cores Principais
- **Azul Primário**: `#007AFF` - Botões e links
- **Azul Escuro**: `#0056CC` - Hover states
- **Cinza Escuro**: `#1a1a1a` - Texto principal
- **Cinza Médio**: `#666` - Texto secundário
- **Cinza Claro**: `#f8fafc` - Fundos secundários
- **Branco**: `#ffffff` - Fundo principal

### Gradientes por Desenho
- **Peppa Pig**: Rosa para laranja (`#FF6B9D` → `#FF8E53`)
- **Bluey**: Azul para roxo (`#4A90E2` → `#7B68EE`)
- **Paw Patrol**: Laranja para amarelo (`#FF6B35` → `#F7931E`)
- **Octonauts**: Azul marinho (`#0066CC` → `#0099FF`)
- **Curious George**: Dourado para laranja (`#FFD700` → `#FFA500`)
- **Wild Kratts**: Verde (`#228B22` → `#32CD32`)
- **Cocomelon**: Rosa (`#FF69B4` → `#FF1493`)
- **Blippi**: Ciano (`#00CED1` → `#20B2AA`)

## 📱 Responsividade

O site é totalmente responsivo com breakpoints otimizados:

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

### Adaptações Mobile
- Menu de navegação colapsível
- Grid de cards em coluna única
- Botões e elementos redimensionados
- Tipografia ajustada para telas menores

## 🔧 Como Usar

1. **Clone ou baixe** o projeto
2. **Abra** o arquivo `index.html` em um navegador
3. **Navegue** pelas páginas usando os links "Ver Detalhes"
4. **Teste** as funcionalidades interativas

### Funcionalidades para Testar
- ✅ Filtros por idade
- ✅ Modais de vídeo/atividades/jogos
- ✅ Newsletter
- ✅ Pesquisa
- ✅ Modo escuro
- ✅ Favoritos
- ✅ Compartilhamento

## 🌟 Recursos Especiais

### Acessibilidade
- Navegação por teclado
- Contraste adequado
- Textos alternativos em imagens
- Estrutura semântica HTML

### Performance
- Imagens otimizadas
- CSS e JS minificados
- Carregamento lazy de elementos
- Animações otimizadas

### SEO
- Meta tags completas
- Estrutura de heading adequada
- URLs amigáveis
- Conteúdo estruturado

## 🎯 Objetivos Educacionais

O site foi desenvolvido com foco em:

- **Desenvolvimento Cognitivo**: Conteúdo apropriado para cada idade
- **Aprendizado Interativo**: Atividades e jogos educativos
- **Segurança**: Links para plataformas confiáveis
- **Engajamento**: Design atrativo e funcionalidades interativas

## 📞 Contato

- **Email**: contato@desenhosinfantis.com
- **Telefone**: (11) 99999-9999
- **Localização**: São Paulo, Brasil

## 📄 Licença

Este projeto é de uso educacional e demonstrativo. Todos os direitos dos desenhos animados pertencem aos seus respectivos criadores e distribuidores.

---

**Desenvolvido com ❤️ para o desenvolvimento educacional infantil** 