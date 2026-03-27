import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Category } from '../pages/category.page';

Then('I sort items by {string}', async (sort: string) => {
    await new Category(getPage()).sortBy(sort);
});

Then('items should be sorted by price {string}', async (order: string) => {
    await new Category(getPage()).validatePriceSort(order);
});