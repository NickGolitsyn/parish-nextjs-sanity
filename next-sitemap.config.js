/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.SITE_URL || "https://parish-nextjs-sanity.vercel.app/",
  generateRobotsTxt: true // (optional)
  // ...other options
};
