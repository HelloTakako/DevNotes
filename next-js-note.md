- Don't add className to <Link> tag, add it to <a> tag.
- Static assets(e.g. jpeg images) should be in 'public' folder.
  robots.txt will be in 'public' folder too.
- Meta tags(e.g. <title>) for pages will be in <Head> tag.
  Contents inside <Head> will be in <head>.
  [doc for <Head> component](https://nextjs.org/docs/api-reference/next/head)
  If you want to customize the <html>, for example to add the lang attribute, you can do so by creating a custom Document component. Learn more in the [custom document documentation](https://nextjs.org/docs/advanced-features/custom-document).
- Next.js has built-in support for [styled-jsx](https://github.com/vercel/styled-jsx) 
  Next.js has built-in support for CSS and Sass which allows you to import .css and .scss files. 
-You should ask yourself: "Can I pre-render this page ahead of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is not a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use Server-Side Rendering. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.