import Link from 'next/link';

async function getPosts() {
  // Using JSONPlaceholder as requested
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=9');
  return res.json();
}

export default async function BlogListing() {
  const posts = await getPosts();

  return (
    <div className="py-16 max-w-7xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-12 text-blue-900">Industry Insights & Blogs</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post: any) => (
          <div key={post.id} className="border rounded-xl overflow-hidden hover:shadow-xl transition flex flex-col">
            <div className="h-48 bg-slate-200"></div> {/* Placeholder for Image */}
            <div className="p-6 flex-grow">
              <h3 className="font-bold text-lg mb-3 capitalize">{post.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-3 mb-4">{post.body}</p>
              <Link href={`/blog/${post.id}`} className="text-orange-600 font-bold text-sm">READ MORE →</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}