import Image from "next/image";
import Navbar from "../../../components/layout/navbar/Navbar";
import Footer from "../../../components/layout/footer/Footer";

export const dynamic = "force-dynamic";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost/himalayanthakali_backend";

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
        <article className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-serif mb-6">{blog.title}</h1>

          <div className="relative mb-10 h-96 w-full">
            <Image
              src={`${API_BASE}/${blog.image}`}
              alt={blog.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="rounded object-cover"
            />
          </div>

          <time dateTime={blog.created_at} className="text-gray-400 mb-10 block">
            {new Date(blog.created_at).toDateString()}
          </time>

          <div
            className="blog-content text-gray-300 leading-8"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </article>

        <div className="pt-20">
          <Footer />
        </div>
      </div>
    </>
  );
}
