
# ProSign – SEO/AI Ready Next.js Site

## Run locally
```bash
npm install
npm run dev
# http://localhost:3000
```

## Configure SEO
- Set your canonical domain in `app/layout.js` (metadataBase), `app/sitemap.js`, and `app/robots.js`.

## Quote form (optional email)
- The form posts to `/api/quote`. It logs data on the server.
- To email submissions, add SMTP creds in `.env` and implement nodemailer in `app/api/quote/route.js`.

## Deploy (Vercel)
- Push to GitHub, import in Vercel, set `NEXT_PUBLIC_` envs if needed.
- After deploy: submit domain to Google Search Console + Bing Webmaster Tools.

## Git – create a clean-start branch and push
```bash
git checkout -b clean-start
git add -A
git commit -m "feat: SEO/AI-ready Next.js app (App Router)"
git push -u origin clean-start
```
Open a PR and set Vercel to deploy the branch for review.
