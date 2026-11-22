# Felipe Schreiber Fernandes — personal site

A bilingual, static site for GitHub Pages. The English homepage is `index.html`; the Portuguese version is `pt/index.html`. Edit each page to update the corresponding language, and edit `style.css` for the shared design.

## Preview

From this directory, run `python3 -m http.server 8000` and visit `http://localhost:8000/`. No build step is required.

## Publish

The intended repository is `FelipeSchreiber/FelipeSchreiber.github.io`. In an authenticated terminal, run:

```sh
gh repo create FelipeSchreiber/FelipeSchreiber.github.io --public --source=. --remote=origin --push
gh api --method POST repos/FelipeSchreiber/FelipeSchreiber.github.io/pages -f 'source[branch]=main' -f 'source[path]=/'
```

If GitHub Pages is already enabled, the second command may report that the site exists. Check Settings → Pages and ensure its source is the `main` branch and `/ (root)`. Once the deployment completes, the site should be available at `https://felipeschreiber.github.io/`.
