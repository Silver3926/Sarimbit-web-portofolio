# SARIMBIT Catering & Bakery

Website portofolio single-page berbasis Astro dan Tailwind CSS.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Hasil build berada di folder `dist/`.

## Mengganti placeholder

- Foto: ganti `public/placeholders/food-placeholder.svg` dengan foto final atau tambahkan file gambar di folder tersebut.
- Logo: tambahkan logo final ke `public/placeholders/` dan perbarui referensinya di `src/pages/index.astro`.
- Konten layanan dan informasi bisnis: edit `src/pages/index.astro`.

## Deployment

Workflow GitHub Actions berada di `.github/workflows/deploy.yml` dan akan melakukan deploy otomatis ke GitHub Pages setiap push ke branch `main`.
