import { Page } from "@playwright/test"

export class Category {
    private readonly page: Page
    private readonly sortDropdown: string = '[data-test="product-sort-container"]'
    private readonly itemPrices: string = '[data-test="inventory-item-price"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async sortBy(option: string) {
        await this.page.locator(this.sortDropdown).selectOption({ label: option });
    }

    public async validatePriceSort(order: string) {
        const priceTexts = await this.page.locator(this.itemPrices).allTextContents();
        const prices = priceTexts.map(p => parseFloat(p.replace('$', '')));

        const sorted = order === 'asc'
            ? [...prices].sort((a, b) => a - b)
            : [...prices].sort((a, b) => b - a);

        if (JSON.stringify(prices) !== JSON.stringify(sorted)) {
            throw new Error(`Expected prices [${sorted}] but found [${prices}]`);
        }
    }
}