import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwrightlab.github.io/');
  await page.getByTestId('input-fullname').click();
  await page.getByTestId('input-fullname').fill('John doe');
  await page.getByTestId('input-email').click();
  await page.getByTestId('input-email').fill('john@example.com');
  await page.getByTestId('input-password').click();
  await page.getByTestId('input-password').fill('Johndoe@123');
  await page.getByTestId('input-phone').click();
  await page.getByTestId('input-phone').fill('3456787654');
  await page.getByTestId('input-dob').fill('2009-06-17');
  await page.getByTestId('select-country').selectOption('au');
  await page.getByTestId('radio-male').check();
  await page.getByTestId('check-js').check();
  await page.getByTestId('check-python').check();
  await page.getByTestId('textarea-bio').click();
  await page.getByTestId('textarea-bio').fill('This is all I need to tell myself');
});