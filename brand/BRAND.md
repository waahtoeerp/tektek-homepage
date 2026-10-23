# Tek Tek Oy — brand

Written for: the founders and anyone making materials for the company.

## Name

**Tek Tek Oy** (written "Tek Tek", not "Tec Tec"). Use "Tek Tek Oy" for legal and formal text, "Tek Tek" in running copy.

## Idea

Two overlapping squares, one ink and one teal. They stand for two steps that repeat: *tek, tek*. The mark says that work happens in steps, one after another, and that each step is finished properly.

The brand voice is plain, direct and calm. Short sentences. No jargon for its own sake.

## Logo

- `public/brand/logo-mark.svg` — the square mark, used for favicon and small spaces.
- `public/brand/logo.svg` — mark plus wordmark. The wordmark is live text in Space Grotesk. Before printing or sending to a supplier, convert the text to outlines in Illustrator or Figma.

Clear space: keep at least one mark-width free on all sides.
Minimum size: mark 24 px, full logo 120 px wide.

Do not stretch, rotate, recolor the two squares, or add effects.

## Colors

| Token        | Hex       | Use                                         |
|--------------|-----------|---------------------------------------------|
| primary      | `#14213D` | Ink. Headings, mark, buttons                |
| accent       | `#0B7A86` | Teal. Links, highlights, second square      |
| signal       | `#FF6B4A` | Coral. Focus rings and rare highlights only |
| background   | `#F7F5F0` | Warm paper page background                  |
| surface      | `#FFFFFF` | Cards                                       |
| text         | `#1B2432` | Body text                                   |
| muted        | `#5B6573` | Secondary text                              |
| border       | `#DCE1E7` | Lines and card edges                        |

Contrast: body text and muted text pass WCAG AA on the background. The coral is never used as text on light backgrounds, because it fails contrast. Teal is used for text only at normal sizes on paper, where it passes AA.

## Typography

- Headings: **Space Grotesk** (500, 700)
- Body: **Inter** (400, 500, 600)
- Both are free on Google Fonts.

Sizes are set in `config/theme.json`. Body text is 17 px. Line height is 1.6.

## Where the values live

All brand values are in `config/theme.json` and reach the page as CSS variables. Change a color there, not in the CSS. The logo SVGs use the same hex values, so if you change the palette, update the two SVG files too.
