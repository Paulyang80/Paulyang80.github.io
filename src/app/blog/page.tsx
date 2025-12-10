import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen pt-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-gradient">Blog</h1>
      
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors">
            <Link href={`/blog/${post.slug}`} className="block">
              <h2 className="text-2xl font-bold mb-2 hover:text-primary transition-colors">
                {post.title}
              </h2>
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <time>{post.date}</time>
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="bg-white/10 px-2 py-0.5 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-300">
                {post.description}
              </p>
            </Link>
          </article>
        ))}

        {posts.length === 0 && (
          <p className="text-gray-400">No posts found.</p>
        )}
      </div>
    </div>
  );
}
