const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://himalayanthakali.com").replace(/\/+$/, "");
const API_BASE = process.env.NEXT_PUBLIC_API_BASE ||  "http://localhost/himalayanthakali_backend";

const STATIC_ROUTES = [
  { path: "", changeFrequency: "daily", priority: 1.0 },
  { path: "/aboutus", changeFrequency: "monthly", priority: 0.8 },
  { path: "/menu", changeFrequency: "weekly", priority: 0.9 },
  { path: "/gallery", changeFrequency: "weekly", priority: 0.8 },
  { path: "/blogs", changeFrequency: "daily", priority: 0.8 },
  { path: "/contact-us", changeFrequency: "monthly", priority: 0.7 },
];

async function getBlogEntries() {
  try {
    const response = await fetch(`${API_BASE}/blogs/get_blogs.php`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) return [];

    const payload = await response.json();
    const blogs = Array.isArray(payload?.data) ? payload.data : [];

    return blogs
      .filter((blog) => blog?.id)
      .map((blog) => ({
        url: `${SITE_URL}/blogs/blogdetails?id=${blog.id}`,
        lastModified:
          blog.updated_at || blog.created_at || new Date().toISOString(),
        changeFrequency: "weekly",
        priority: 0.7,
      }));
  } catch {
    return [];
  }
}

export default async function sitemap() {
  const now = new Date();

  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now.toISOString(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogEntries = await getBlogEntries();

  return [...staticEntries, ...blogEntries];
}
