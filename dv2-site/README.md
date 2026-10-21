# Drawers of a Continent — Australia's Museum Collections

FIT3179 Data Visualisation 2 (Semester 2, 2026) · Domain: **Australian Museum Collections**
Author: [Your name] · Draft: 21 October 2026

A single scrolling web page with 13 Vega-Lite / Vega charts (11 advanced idioms, including 4 maps) about what Australia's eight state and territory museums hold, where and when their specimens were collected, and how much of it is online.

## Folder structure

```
index.html            the page
css/style.css         layout and typography
js/main.js            embeds every chart with vega-embed
js/*.vl.json          Vega-Lite specifications (one per chart, human-readable)
js/03_treemap_am.vg.json   Vega specification (treemap — not possible in Vega-Lite)
data/                 all data used (≈ 300 KB in total)
```

| # | File | Idiom | Section |
|---|------|-------|---------|
| 1 | 01_map_museums | Proportional symbol map | The vaults |
| 2 | 02_lollipop_size | Lollipop chart | The vaults |
| 3 | 03_treemap_am | Treemap (Vega) | Inside a vault |
| 4 | 04_heatmap_groups | Heatmap | Specialties |
| 5 | 05_bar_types | Stacked bar (basic) | Specialties |
| 6 | 06_choropleth_states | Choropleth map + dropdown | Field trips |
| 7 | 07_butterfly_home | Butterfly chart | Field trips |
| 8 | 08_grid_density | Gridded density map | Every square a place |
| 9 | 09_grid_leader | Categorical grid map | Every square a place |
| 10 | 10_stream_decades | Streamgraph | Collecting boom |
| 11 | 11_bump_rank | Bump chart | Collecting boom |
| 12 | 12_waffle_digitised | Waffle small multiples | Drawer to database |
| 13 | 13_dot_images | Dot plot (basic) | Drawer to database |

## Publish on GitHub Pages

1. Create a public repository (e.g. `fit3179-dv2`) and upload the contents of this folder (keep the folder structure).
2. Settings → Pages → Source: *Deploy from a branch* → `main` / root → Save.
3. After a minute the page is live at `https://<username>.github.io/fit3179-dv2/`. Test it in an incognito window.
4. Add a scan of your hand-drawn sketch as `sketch.pdf` in the repository root.

To preview locally, run a small web server (charts load JSON with `fetch`, which does not work from `file://`):
`python3 -m http.server` in this folder, then open http://localhost:8000.

## Data sources

1. **Atlas of Living Australia** occurrence search API, https://api.ala.org.au/occurrences/occurrences/search — facet counts filtered by `institution_name` for each museum (groups by class/phylum, state, decade, type status, multimedia, `point-1` 1° grid). Accessed 21 Oct 2026. Total: 6,104,932 records.
2. **Collection totals** (each museum's own publications):
   - Australian Museum — https://australian.museum/learn/collections (22+ million; department figures)
   - Museums Victoria Annual Report 2023–24 — https://museumsvictoria.com.au/media/mcufee5c/147_mv244206_annualreport_2024_digital_fa_edit_oct31.pdf (≈15 million)
   - Queensland Museum Annual Report 2023–24 — https://www.parliament.qld.gov.au/Work-of-the-Assembly/Tabled-Papers/docs/5724t1863/5724t1863-49ae.pdf (15.2+ million)
   - WA Museum — https://museum.wa.gov.au/collections (4.4+ million)
   - South Australian Museum — https://samuseum.sa.gov.au/collections (5+ million)
   - TMAG — https://camd.org.au/camd-museum-member/tasmanian-museum-and-art-gallery/ (≈800,000)
   - QVMAG — https://examiner.com.au/story/8518521/qvmag-launches-3d-online-database-showcasing-its-vast-collection (1.5+ million)
   - MAGNT Annual Report 2021–22 — https://www.magnt.net.au/_files/ugd/c2bb08_dae58852eb2746918ca1b41e014420d8.pdf (no single total; 281,367 natural-science lots)
3. **State boundaries** — https://github.com/rowanhogan/australian-states (ABS-derived), simplified with mapshaper to TopoJSON.

## Sketch guide (draw this by hand on A4 — digital sketches score 0)

Draw the page top to bottom, one band per section, with a heading, a few text lines and a small drawing of each chart:

1. **Header**: title "Drawers of a Continent", intro paragraph, row of four number tiles, byline.
2. **01 The vaults**: text (left) + Australia map with sized circles (right); full-width lollipop chart below.
3. **02 Inside a vault**: text; full-width treemap with a narrow list on the right for cultural collections.
4. **03 Specialties**: full-width heatmap (8 museums × 11 groups); below, four callout notes (left) + stacked type-specimen bars (right).
5. **04 Field trips**: text (left) + choropleth map with a dropdown (right); butterfly chart below.
6. **05 Every square a place**: two grid maps side by side (density | leading museum).
7. **06 Collecting boom**: full-width streamgraph with annotations; bump chart below.
8. **07 Drawer to database**: seven waffle squares in a row; text (left) + dot plot (right).
9. **Footer**: sources, notes, credits.

## Before submitting — to do

- [ ] Replace `[Your name]` in `index.html` (byline, footer, meta author) and in this README.
- [ ] Write your AI-use acknowledgement in the footer credits.
- [ ] Upload `sketch.pdf`; make sure the page matches your sketch (adjust either if your tutor suggested changes).
- [ ] Paste the URLs and a full-page screenshot into the submission template.
