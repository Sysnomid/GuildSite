const sitemap = require('nextjs-sitemap-generator');

async function GenSitemap(){
    await sitemap({
    baseUrl: 'https://thedevsguild.com',
    pagesDirectory: __dirname + "/pages",
    targetDirectory : 'public/',
    sitemapFilename: 'sitemap.xml',
    nextConfigPath: __dirname + "/next.config.js",
    ignoredExtensions: [
            'png',
            'jpg'
    ]
    });
}

GenSitemap()

console.log("Sitemap being Generated")
