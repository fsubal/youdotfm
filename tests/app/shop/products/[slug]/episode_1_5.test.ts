import { test, expect } from "@playwright/test";

const path = "/shop/products/episode_1_5";

test("<title>が話数になっている", async ({ page }) => {
  await page.goto(path);

  await expect(page).toHaveTitle(
    "ユードットエフエム 1.5話『見る前に飛べ！』 - ポッドキャスト百合漫画『ユードットエフエム』公式サイト",
  );
});

test("OGPのタイトルが話数になっている", async ({ page }) => {
  await page.goto(path);

  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
    "content",
    "ユードットエフエム 1.5話『見る前に飛べ！』 - ポッドキャスト百合漫画『ユードットエフエム』公式サイト",
  );
});

for (const { name, href } of [
  {
    name: /メロンブックスで購入/,
    href: "https://www.melonbooks.co.jp/detail/detail.php?product_id=2837741",
  },
  {
    name: /BOOTHで購入/,
    href: "https://umbrellahead.booth.pm/items/5995426",
  },
]) {
  test(`${name.source}のリンクが正しい商品を指している`, async ({ page }) => {
    await page.goto(path);
    await page.getByRole("tab", { name: /同人誌/ }).click();
    const link = page.getByRole("tabpanel").getByRole("link", { name });
    await expect(link).toHaveAttribute("href", href);
    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAttribute("rel", /noopener/);
  });
}

const shareUrl = "https://youdot.fm/shop/products/episode_1_5#main";
const shareText =
  "ユードットエフエム 1.5話『見る前に飛べ！』 - #ユードットエフエム";

test("Xのシェアリンクに商品のURLとタイトルが含まれる", async ({ page }) => {
  await page.goto(path);
  const link = page.getByRole("link", { name: /Twitter.*でシェア/ });
  await expect(link).toHaveAttribute("target", "_blank");
  const url = new URL((await link.getAttribute("href"))!);
  expect(url.origin + url.pathname).toBe("https://x.com/intent/post");
  expect(url.searchParams.get("url")).toBe(shareUrl);
  expect(url.searchParams.get("text")).toBe(shareText);
});

test("Blueskyのシェアリンクに商品のURLとタイトルが含まれる", async ({
  page,
}) => {
  await page.goto(path);
  const link = page.getByRole("link", { name: "Blueskyでシェア" });
  await expect(link).toHaveAttribute("target", "_blank");
  const url = new URL((await link.getAttribute("href"))!);
  expect(url.origin + url.pathname).toBe("https://bsky.app/intent/compose");
  expect(url.searchParams.get("text")).toBe(`${shareText} ${shareUrl}`);
});
