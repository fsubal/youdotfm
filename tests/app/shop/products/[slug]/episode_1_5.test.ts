import { test, expect } from "@playwright/test";

test("<title>が話数になっている", async ({ page }) => {
  await page.goto("/shop/products/episode_1_5");

  await expect(page).toHaveTitle(
    "ユードットエフエム 1.5話『見る前に飛べ！』 - ポッドキャスト百合『ユードットエフエム』公式サイト",
  );
});

test("OGPのタイトルが話数になっている", async ({ page }) => {
  await page.goto("/shop/products/episode_1_5");

  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
    "content",
    "ユードットエフエム 1.5話『見る前に飛べ！』 - ポッドキャスト百合『ユードットエフエム』公式サイト",
  );
});

test("メロンブックスに飛べる", async ({ page, context }) => {
  await page.goto("/shop/products/episode_1_5");

  const pageLoadEvent = context.waitForEvent("page");
  await page.getByRole("link", { name: /メロンブックスで購入/ }).click();
  const newTab = await pageLoadEvent;

  await expect(newTab).toHaveURL(/www\.melonbooks\.co\.jp/);
});

test("BOOTHに飛べる", async ({ page, context }) => {
  await page.goto("/shop/products/episode_1_5");

  const pageLoadEvent = context.waitForEvent("page");
  await page.getByRole("link", { name: /BOOTHで購入/ }).click();
  const newTab = await pageLoadEvent;

  await expect(newTab).toHaveURL(/booth\.pm/);
});
