import BlogDetailPage from "@/components/blog/blogDetailPage";
import PageTitle from "@/components/global/pageTitle";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return (
    <div>
      <BlogDetailPage id={Number(id)} />
    </div>
  );
}
