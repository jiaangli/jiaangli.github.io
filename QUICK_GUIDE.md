# Quick Guide: Adding a New Paper

## Step 1: Prepare Your Image
Place your paper's preview image in the `images/` folder.
Recommended size: Square (e.g., 1280x1280)

## Step 2: Edit publications.json
Open `data/publications.json` and add your paper at the **TOP** of the array:

```json
{
  "id": "yourname2026paper",
  "title": "Your Amazing Paper Title",
  "authors": [
    { "name": "Your Name", "url": "", "highlight": true },
    { "name": "Coauthor", "url": "https://coauthor.com/" }
  ],
  "venue": "CONFERENCE 2026",
  "paper_url": "https://arxiv.org/abs/...",
  "image": "images/your_image.jpg",
  "links": [
    { "name": "code", "url": "https://github.com/..." },
    { "name": "project page", "url": "https://..." }
  ],
  "tldr": "One sentence describing your paper."
}
```

## Step 3: Save and Refresh
That's it! Save the file and refresh your website. Your paper will appear automatically.

## Common Fields Explained

| Field | Description | Required |
|-------|-------------|----------|
| `id` | Unique identifier (no spaces) | Yes |
| `title` | Paper title | Yes |
| `authors` | List of authors | Yes |
| `venue` | Where published (journal/conference) | Yes |
| `venue_note` | Additional info like "(oral)" | No |
| `paper_url` | Link to paper | Yes |
| `image` | Path to preview image | Yes |
| `links` | Code, data, project page links | No |
| `tldr` | Brief description | Yes |

## Author Fields

- `name`: Full name
- `url`: Website (use `""` if none)
- `highlight`: Set `true` for yourself (makes bold)
- `equal`: Set `true` for equal contribution (adds *)

## Example: Equal Contribution

```json
"authors": [
  { "name": "Author A", "url": "...", "equal": true, "highlight": true },
  { "name": "Author B", "url": "...", "equal": true }
]
```

This will render as: **Author A***, Author B*

## Tips

✅ Add newest papers at the top of the array
✅ Keep image files reasonably sized (< 500KB)
✅ Use empty string `""` for missing URLs, not `null`
✅ Validate your JSON at [jsonlint.com](https://jsonlint.com)
✅ Check browser console if something doesn't work
