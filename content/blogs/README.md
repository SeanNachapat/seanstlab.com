# Blog Posts Guide

You can publish new blog posts directly by adding `.md` files to this folder on GitHub.

## 1. File Naming Convention

Name your markdown file starting with the date (`YYYY-MM-DD-slug.md`):

```text
content/blogs/2026-02-16-the-doll-shop.md
content/blogs/2026-03-15-building-interactive-ai-companion.md
```

## 2. Frontmatter (Optional)

At the top of your markdown file, you can optionally include YAML frontmatter:

```markdown
---
title: "The Doll Shop"
description: "Behind the scenes of our short mystery film production."
tags: ["Filmmaking", "Directing", "Video"]
---

# The Doll Shop

Your content here...
```

- If `title` is not provided in frontmatter, it is automatically extracted from the first `# Heading` in the markdown.
- If `date` is not provided, it is automatically parsed from the filename prefix (`YYYY-MM-DD`).
- Reading time is calculated automatically based on word count.

## 3. Adding Images and Media

Store media files for your post in `public/media/blogs/[post-filename-without-md]/`:

```text
public/media/blogs/2026-02-16-the-doll-shop/cover.png
public/media/blogs/2026-02-16-the-doll-shop/behind-the-scenes.jpg
```

In your markdown, reference images using relative or absolute paths:

```markdown
![Cover image](./cover.png)
<!-- or -->
![Cover image](/media/blogs/2026-02-16-the-doll-shop/cover.png)
```
Relative paths starting with `./` automatically resolve to `/media/blogs/[post-folder-name]/`.
