export default function sitemap() {
  return [
    {
      url: "http://localhost:3000",
      lastModified: new Date(),
    },
    {
      url: "http://localhost:3000/menu",
      lastModified: new Date(),
    },
    {
      url: "http://localhost:3000/gallery",
      lastModified: new Date(),
    },
  ];
}
