class ProductPage {
    constructor() {
        this.productCard = (productName) => `div.product-item-info:has(a.product-item-link[href*="${productName}"])`;
        this.selectProductSize = (size) => `.swatch-option[option-label="${size}"]`
        this.selectProductColor = (color) => `.swatch-option[option-label="${color}"]`
        this.buttonAddToCart = `button.action.tocart`
        
        Object.freeze(this);
    }

    openProductPage(productName) {
        cy.get(this.productCard(productName)).click();
    }

    selectProductSizeAndColor(size, color) {
        cy.get(this.selectProductColor(color)).click();
        cy.get(this.selectProductSize(size)).click();
    }

    clickAddToCartButton() {
        cy.get(this.buttonAddToCart).click();
    }

    addProductToCart(productName, size, color) {
        this.openProductPage(productName);
        this.selectProductSizeAndColor(size, color);
        this.clickAddToCartButton();
    }
}

export default ProductPage;
