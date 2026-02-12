# Personal Academic Website

A modern, maintainable personal academic website with clean separation between data and presentation.

## 🚀 Quick Start

1. **View the website**: Open `index.html` in a browser via a web server
2. **Add a new paper**: Edit `data/publications.json` and add your entry
3. **Add news**: Edit `data/news.json`
4. **Update profile**: Edit `data/profile.json`

That's it! No HTML editing needed. Just edit JSON files and refresh.

## 📂 Project Structure

```
├── index.html              # Main template (don't edit for content)
├── css/                   # Stylesheets
├── js/                    # JavaScript modules
├── data/                  # 🎯 EDIT THESE for content updates
│   ├── profile.json       # Your bio and links
│   ├── news.json          # News items
│   ├── publications.json  # Your papers
│   └── TEMPLATE_paper.json # Template for new papers
└── images/                # Images and media
```

## ✨ Adding a New Paper (30 seconds!)

1. Open `data/publications.json`
2. Copy the template from `data/TEMPLATE_paper.json`
3. Paste at the TOP of the publications array
4. Fill in your paper details
5. Save and refresh your website
6. Done! ✨

**Example:**
```json
{
  "id": "smith2026awesome",
  "title": "My Awesome Paper",
  "authors": [
    { "name": "Your Name", "url": "", "highlight": true }
  ],
  "venue": "NeurIPS 2026",
  "paper_url": "https://arxiv.org/abs/...",
  "image": "images/paper2026.jpg",
  "links": [
    { "name": "code", "url": "https://github.com/..." }
  ],
  "tldr": "Brief description of your paper."
}
```

## 📖 Documentation

- **[QUICK_GUIDE.md](QUICK_GUIDE.md)** - Quick reference for adding papers
- **[PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)** - Complete technical documentation
- **[MIGRATION_SUMMARY.md](MIGRATION_SUMMARY.md)** - Details about the modernization

## 🎯 Key Features

- ✅ **Data-driven**: Content in JSON files, not HTML
- ✅ **Easy updates**: Add papers in seconds
- ✅ **Modular code**: Clean JavaScript modules
- ✅ **No frameworks**: Fast, lightweight vanilla JS
- ✅ **Maintainable**: Clear separation of concerns

## 🛠️ Local Development

Run a local web server (required for JSON loading):

```bash
# Python
python3 -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 📋 What Was Changed?

This website has been modernized from a monolithic HTML structure:

**Before**: 539 lines of HTML with hardcoded content
**After**: Clean template + JSON data files

### Benefits:
- ⚡ **10x faster** to add new papers
- 🎯 **No HTML knowledge** required
- 🐛 **Fewer errors** with structured data
- 📦 **Better organized** codebase
- 🔄 **Easy to maintain** and scale

## 🎓 Attribution

This repository is based on Jon Barron's public academic website: https://jonbarron.info/. You are welcome to clone this code for your own personal use, just please attribute the source to the original website or to this repo. If you do clone this website, feel free to add an attribution link to your own downstream website in index.html if you want.

## 📄 License

Feel free to use this code for your personal academic website. Please maintain attribution to the original template by Jon Barron.

---

**Pro tip**: Bookmark `data/TEMPLATE_paper.json` - it has a ready-to-use template for adding new papers!