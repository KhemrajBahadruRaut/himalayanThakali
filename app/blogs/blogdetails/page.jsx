import Navbar from "../../../components/layout/navbar/Navbar";
import Footer from "../../../components/layout/footer/Footer";

export const dynamic = "force-dynamic";

const API_BASE = "http://localhost/himalayanthakali_backend";

async function getBlog(id) {
  if (!id) return null;

  const res = await fetch(
    `${API_BASE}/blogs/get_single_blog.php?id=${id}`,
    { cache: "no-store" }
  );

  const data = await res.json();
  return data.success ? data.data : null;
}

export default async function BlogDetails(props) {
  const searchParams = await props.searchParams;
  const id = searchParams?.id;

  const blog = await getBlog(id);

  if (!blog) {
    return <div className="p-20 text-center">Blog not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className="bg-[#1E1E1E] text-white px-4 pt-30">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-4xl font-serif mb-6">
            {blog.title}
          </h1>

          <img
            src={`${API_BASE}/${blog.image}`}
            alt={blog.title}
            className="w-full h-96 object-cover mb-10 rounded"
          />

          <p className="text-gray-400 mb-10">
            {new Date(blog.created_at).toDateString()}
          </p>

          <div
            className="blog-content text-gray-300 leading-8"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

        </div>

        <div className="pt-20">
          <Footer />
        </div>
      </div>
    </>
  );
}
