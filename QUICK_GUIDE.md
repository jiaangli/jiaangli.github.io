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
  "authors": ["Your Name", "Coauthor One", "Coauthor Two"],
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

## Step 2b: Add New Co-Authors (if any)
If a co-author is not already in `data/authors.json`, add them:
```json
"New Author Name": { "url": "https://their-website.com/" }
```

## Step 3: Save and Refresh
That's it! Save the file and refresh your website. Your paper will appear automatically.

## Common Fields Explained

| Field | Description | Required |
|-------|-------------|----------|
| `id` | Unique identifier (no spaces) | Yes |
| `title` | Paper title | Yes |
| `authors` | List of author name strings | Yes |
| `venue` | Where published (journal/conference) | Yes |
| `venue_note` | Additional info like "(oral)" | No |
| `paper_url` | Link to paper | Yes |
| `image` | Path to preview image | Yes |
| `links` | Code, data, project page links | No |
| `tldr` | Brief description | Yes |

## Author Format

- Authors are **strings** (just names)
- Append `*` for equal contribution: `"Author Name*"`
- Author URLs and highlight flags auto-resolve from `data/authors.json`

## Example: Equal Contribution

```json
"authors": ["Author A*", "Author B*", "Author C"]
```

This will render as: **Author A***, Author B*, Author C

(Author A is bold because `"highlight": true` is set in authors.json)

## Tips

✅ Add newest papers at the top of the array
✅ Keep image files reasonably sized (< 500KB)
✅ Use `*` suffix on author names for equal contribution
✅ Add new co-authors to `data/authors.json`
✅ Validate your JSON at [jsonlint.com](https://jsonlint.com)
✅ Check browser console if something doesn't work
