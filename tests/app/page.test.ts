import { test, expect } from "@playwright/test";

const path = "/";

test("<title> がある", async ({ page }) => {
  await page.goto(path);

  await expect(page).toHaveTitle(
    "ポッドキャスト百合漫画『ユードットエフエム』公式サイト",
  );
});

test("OGPとTwitterカードが出そう", async ({ page }) => {
  await page.goto(path);

  await expect(page.locator('meta[property="og:type"]')).toHaveAttribute(
    "content",
    "website",
  );

  await expect(page.locator('meta[property="og:description"]')).toHaveAttribute(
    "content",
    "「語って、話して、好きになる。」ポッドキャスト百合漫画『ユードットエフエム』の公式サイト。作品情報や登場人物、最新ニュースを掲載。",
  );

  await expect(page.locator('meta[property="og:site_name"]')).toHaveAttribute(
    "content",
    "ポッドキャスト百合漫画『ユードットエフエム』公式サイト",
  );

  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    "content",
    "https://youdot.fm/og_image.png",
  );

  await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
    "content",
    "summary_large_image",
  );
});
