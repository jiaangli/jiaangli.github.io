# Personal Website - Modern Architecture

This is a modernized personal academic website with a clean separation between data and presentation. The architecture makes it easy to maintain and update content, especially when adding new publications.

## 🏗️ Project Structure

```
jiaangli.github.io/
├── index.html              # Main HTML template
├── README.md              # This file
├── css/                   # Stylesheets
│   ├── stylesheet.css     # Font definitions and base styles
│   └── style.css          # Custom component styles
├── js/                    # JavaScript modules
│   ├── data-loader.js     # Handles loading JSON data
│   └── renderer.js        # Renders data to the DOM
├── data/                  # JSON data files (isolated from presentation)
│   ├── profile.json       # Personal info, bio, and links
│   ├── news.json          # News items
│   ├── authors.json       # Author registry (URLs & highlight flags)
│   └── publications.json  # Publications and papers
└── images/                # Images and media files
    ├── profile.jpg
    └── [paper images]
```

## ✨ Key Features

- **Data Isolation**: All content is stored in JSON files, separated from HTML
- **Modular Architecture**: JavaScript modules handle data loading and rendering
- **Easy Maintenance**: Add new papers by simply editing JSON files
- **Dynamic Loading**: Content is loaded and rendered at runtime
- **Clean Codebase**: HTML serves as a template, not a data store

## 📝 How to Add a New Paper

To add a new publication, simply edit the `data/publications.json` file and add a new entry:

```json
{
  "id": "unique_paper_id",
  "title": "Your Paper Title",
  "authors": ["Author Name*", "Second Author", "Third Author"],
  "venue": "Conference/Journal Name",
  "venue_note": "(Optional note, e.g., oral presentation)",
  "paper_url": "https://arxiv.org/abs/...",
  "image": "images/your_paper_image.jpg",
  "links": [
    { "name": "code", "url": "https://github.com/..." },
    { "name": "data", "url": "https://..." }
  ],
  "tldr": "Brief description of your paper"
}
```

### Authors Format:
- Authors are simple **strings** (just names)
- Append `*` to mark equal contribution (e.g., `"Author Name*"`)
- Author URLs and highlight flags are resolved automatically from `data/authors.json`

### Adding a New Author:
If a co-author isn't already in the registry, add them to `data/authors.json`:
```json
"New Author Name": { "url": "https://their-website.com/" }
```
- Set `"highlight": true` for your own name (renders bold)
- Set `"url": ""` if the author has no website

### Steps:
1. Add your paper image to the `images/` folder
2. Open `data/publications.json`
3. Add your paper entry at the top of the array (newest first)
4. Save the file
5. Refresh your website - the new paper will appear automatically!

## 🗞️ How to Add News

Edit `data/news.json` and add a new entry at the top:

```json
{
  "date": "2026-MM",
  "content": "Your news content with <a href='...'>links</a> if needed"
}
```

## 👤 How to Update Profile Information

Edit `data/profile.json` to update your:
- Name
- Bio paragraphs
- Contact links
- Profile image

## 🎨 Customizing Styles

- Edit `css/style.css` for custom styles
- Edit `css/stylesheet.css` for font definitions
- Styles are organized by component for easy maintenance

## 🚀 Development

This is a static website that can be served with any web server or hosted on GitHub Pages.

### Local Development

You can use any local server. For example:

```bash
# Python 3
python -m http.server 8000

# Node.js (with npx)
npx serve .

# PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 📦 Technologies Used

- **Vanilla JavaScript**: No frameworks, lightweight and fast
- **JSON**: Data storage and management
- **ES6 Modules**: Clean, modular code organization
- **CSS3**: Modern styling

## 🔧 Maintenance Tips

1. **Adding Papers**: Just edit `data/publications.json`
2. **Updating News**: Just edit `data/news.json`
3. **Changing Bio**: Just edit `data/profile.json`
4. **Updating Author URLs**: Just edit `data/authors.json`
5. **No HTML editing needed**: Unless changing the layout/structure

## 📋 Migration Notes

This website has been refactored from a monolithic HTML structure to a modern, modular architecture:

- **Before**: All content hardcoded in HTML
- **After**: Content in JSON files, dynamically loaded

Benefits:
- ✅ Easier to maintain
- ✅ Better organization
- ✅ Faster updates
- ✅ Cleaner codebase
- ✅ Reusable components

## 🐛 Troubleshooting

**Content not loading?**
- Check browser console for errors
- Ensure JSON files are valid (use a JSON validator)
- Make sure you're serving via a web server (not opening HTML directly)

**Styles not applying?**
- Clear browser cache
- Check that CSS file paths are correct
- Verify CSS syntax

## 📄 License

This website design is based on a template from [Jon Barron](https://jonbarron.info/).

---

© Jiaang Li 2026
