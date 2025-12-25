import BlogDetailPage from "@/components/blog/blogDetailPage";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return (
    <div>
      <BlogDetailPage id={id} />
    </div>
  );
}
