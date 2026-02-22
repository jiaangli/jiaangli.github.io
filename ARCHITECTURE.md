# Architecture Visualization

## System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                      Browser                            │
│  ┌───────────────────────────────────────────────────┐  │
│  │             index.html (Template)                 │  │
│  │  - Structure & Layout                             │  │
│  │  - No hardcoded content                           │  │
│  └───────────────────────────────────────────────────┘  │
│                          │                              │
│                          ▼                              │
│  ┌───────────────────────────────────────────────────┐  │
│  │         JavaScript Modules                        │  │
│  │  ┌─────────────────┐  ┌─────────────────────┐    │  │
│  │  │  data-loader.js │  │    renderer.js      │    │  │
│  │  │  - Fetch JSON   │→ │  - Render content   │    │  │
│  │  │  - Cache data   │  │  - Update DOM       │    │  │
│  │  └─────────────────┘  └─────────────────────┘    │  │
│  └───────────────────────────────────────────────────┘  │
│                          │                              │
│                          ▼                              │
│  ┌───────────────────────────────────────────────────┐  │
│  │              JSON Data Files                      │  │
│  │  ┌──────────────┐ ┌──────────────┐ ┌──────────┐  │  │
│  │  │profile.json  │ │  news.json   │ │publications│  │  │
│  │  │- Name, bio   │ │- News items  │ │   .json    │  │  │
│  │  │- Links       │ │- Dates       │ │- Papers    │  │  │
│  │  └──────────────┘ └──────────────┘ └──────────┘  │  │
│  │                                    ┌──────────┐  │  │
│  │                                    │authors   │  │  │
│  │                                    │  .json   │  │  │
│  │                                    │- URLs    │  │  │
│  │                                    │- Flags   │  │  │
│  │                                    └──────────┘  │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

## Data Flow

```
User Opens Website
        │
        ▼
index.html loads
        │
        ▼
Scripts load (data-loader.js, renderer.js)
        │
        ▼
DOMContentLoaded event fires
        │
        ▼
ContentRenderer.renderAll() called
        │
        ├─────────────────┬─────────────────┐
        ▼                 ▼                 ▼
  Load profile      Load news      Load publications
        │                 │           + Load authors
        │                 │                 │
        ▼                 ▼                 ▼
   Render bio      Render news      Resolve authors
        │                 │          & Render papers
        │                 │                 │
        └─────────────────┴─────────────────┘
                          │
                          ▼
              User sees complete website!
```

## Component Interaction

```
┌─────────────────────────────────────────────────────┐
│  ContentRenderer                                    │
│  ┌────────────────────────────────────────────┐    │
│  │  renderProfile()                           │    │
│  │  - Fetches profile.json                    │    │
│  │  - Updates name, bio, links, image         │    │
│  └────────────────────────────────────────────┘    │
│  ┌────────────────────────────────────────────┐    │
│  │  renderNews()                              │    │
│  │  - Fetches news.json                       │    │
│  │  - Creates list items with date + content  │    │
│  └────────────────────────────────────────────┘    │
│  ┌────────────────────────────────────────────┐    │
│  │  renderPublications()                      │    │
│  │  - Fetches publications.json               │    │
│  │  - Fetches authors.json (registry)         │    │
│  │  - Resolves author names → URLs/highlight  │    │
│  │  - Renders each paper with:                │    │
│  │    • Title, authors, venue                 │    │
│  │    • Image, links, TL;DR                   │    │
│  └────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────┘
```

## Update Workflow

### Old Way (Monolithic)
```
Want to add paper
    │
    ▼
Open 539-line index.html
    │
    ▼
Find right section
    │
    ▼
Copy-paste 20+ lines of HTML
    │
    ▼
Manually edit all fields
    │
    ▼
Hope you didn't break anything
    │
    ▼
Test in browser
    │
    ▼
Fix formatting errors
    │
    ▼
Done! (5-10 minutes)
```

### New Way (Modular)
```
Want to add paper
    │
    ▼
Open data/publications.json
    │
    ▼
Add author names (strings)
URLs resolved from authors.json
    │
    ▼
Fill in fields (structured)
    │
    ▼
Save and refresh
    │
    ▼
Done! (1-2 minutes) ✨
```

## File Organization

```
jiaangli.github.io/
│
├── 📄 Documentation Files
│   ├── README.md               (Main readme, quick start)
│   ├── QUICK_GUIDE.md          (Quick reference for papers)
│   ├── PROJECT_STRUCTURE.md    (Complete documentation)
│   ├── MIGRATION_SUMMARY.md    (Before/after comparison)
│   └── ARCHITECTURE.md         (This file)
│
├── 🎨 Presentation Layer
│   ├── index.html              (Template structure)
│   └── css/
│       ├── stylesheet.css      (Fonts & base styles)
│       └── style.css           (Custom component styles)
│
├── 🧠 Logic Layer
│   └── js/
│       ├── data-loader.js      (Data fetching)
│       └── renderer.js         (DOM rendering)
│
├── 📊 Data Layer
│   └── data/
│       ├── profile.json        (Personal info)
│       ├── news.json           (News updates)
│       ├── authors.json        (Author registry: URLs & flags)
│       ├── publications.json   (Research papers)
│       └── TEMPLATE_paper.json (Template for new papers)
│
└── 🖼️ Assets
    └── images/                 (All images)
```

## Design Patterns Used

### 1. Separation of Concerns
- **Data** (JSON) separate from **Presentation** (HTML) separate from **Logic** (JS)

### 2. Module Pattern
- Each JS file exports specific functionality
- Clean, reusable code

### 3. Single Responsibility
- `DataLoader`: Only handles data fetching
- `ContentRenderer`: Only handles rendering
- JSON files: Only store data

### 4. Template Method
- HTML provides the template
- JavaScript fills in the data
- Clear separation of structure and content

## Benefits of This Architecture

✅ **Maintainability**: Easy to understand and modify
✅ **Scalability**: Easy to add new features
✅ **Testability**: Components can be tested independently
✅ **Reusability**: Modules can be reused
✅ **Flexibility**: Easy to change data or presentation
✅ **Error Prevention**: Structured data reduces errors
✅ **Developer Experience**: Pleasant to work with
✅ **Performance**: Lightweight, fast loading

## Technology Choices

| Technology | Why? |
|------------|------|
| Vanilla JavaScript | No dependencies, fast, simple |
| JSON | Standard, easy to edit, validated |
| ES6 Classes | Clean, organized code |
| Async/Await | Modern, readable async code |
| CSS3 | Modern styling capabilities |
| Static Files | Fast, secure, easy to host |

## Future Extensibility

Easy to add:
- 🔍 Search functionality
- 🏷️ Paper filtering by year/venue
- 📱 Mobile-specific optimizations
- 🌙 Dark mode toggle
- 📊 Citation metrics
- 🔗 More data sources

The modular architecture makes extensions straightforward!
