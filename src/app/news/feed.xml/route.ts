export const dynamic = "force-static";

export async function GET() {
  return new Response("<xml>WIP</xml>", {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": `s-maxage=1000, stale-while-revalidate`,
    },
  });
}
