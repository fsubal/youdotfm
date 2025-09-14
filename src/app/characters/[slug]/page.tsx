import { notFound } from "next/navigation";
import { Layout } from "../../../components/Layout";
import { characters } from "../../../domains/Character/seeds";

export function generateStaticParams() {
  return characters.map(({ slug }) => ({ slug }));
}

export default async function CharacterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const normalizedSlug = decodeURIComponent(slug);

  const character = characters.find(({ slug }) => slug === normalizedSlug);
  if (!character) {
    return notFound();
  }

  return (
    <Layout>
      <pre>{JSON.stringify(character)}</pre>
    </Layout>
  );
}
