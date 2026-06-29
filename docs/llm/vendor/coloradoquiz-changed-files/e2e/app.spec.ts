import { expect, test } from '@playwright/test';

test('home page shows the quiz and news links', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Quizzes' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'US History' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Top Stories' })).toBeVisible();
});

test('a quiz loads and answering a question shows feedback', async ({ page }) => {
  await page.goto('/quiz/us-civics');

  const heading = page.locator('mat-card h1');
  await expect(heading).toBeVisible();
  await expect(heading).not.toHaveText('LOADING...');

  await page.locator('.button-container button').first().click();

  // The snackbar feedback always contains the word "correct"
  // ("Your answer is correct!" or "...is not correct.").
  await expect(page.getByText(/correct/i)).toBeVisible();
});

test('the news page renders a headline', async ({ page }) => {
  await page.goto('/news/top-stories');
  await expect(page.locator('article h1')).toBeVisible();
});
