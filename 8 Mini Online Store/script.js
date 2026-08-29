/*
    ALGORITHM: Mini Online Store (MVC Architecture & Jasmine Testing)

    1. DATA MODEL (`cart.js` & `products.js`):
       - Define class `Product` with properties: `id`, `image`, `name`, `rating`, `priceCents`.
       - Add methods to `Product`: `getStarsUrl()` and `getPrice()`.
       - Define class `Cart` with `#localStorageKey` private property and methods:
           - `loadFromStorage()`: Load cart array or initialize with defaults.
           - `saveToStorage()`: Save cart array to LocalStorage.
           - `addToCart(productId)`: Find item or push new item with quantity 1.
           - `removeFromCart(productId)`: Filter out target product and save.
           - `updateDeliveryOption(productId, deliveryOptionId)`: Update option and save.

    2. VIEW & CONTROLLER (`amazon.js` / `checkout.js`):
       - `renderProductsGrid()`:
           - Loop through products array and generate HTML cards.
           - Attach event listeners to all "Add to Cart" buttons using `dataset.productId`.
           - Update cart quantity bubble in navbar.
       - `renderOrderSummary()`:
           - Loop through cart items and calculate delivery dates via `Day.js`.
           - Generate HTML for each item, including quantity controls and radio delivery options.
           - Attach click handlers for delete links and delivery option changes.
           - Call `renderPaymentSummary()` to synchronize totals.
       - `renderPaymentSummary()`:
           - Calculate items total, shipping fees, tax (10%), and final order cost.
           - Render financial breakdown to DOM.

    3. AUTOMATED TESTING (`orderSummaryTest.js` using Jasmine):
       - In `beforeEach()`:
           - Mock `localStorage.setItem` and `localStorage.getItem` with `spyOn()`.
           - Provide test container div in DOM.
           - Render order summary.
       - In `it('displays the cart')`:
           - Assert cart item containers count equals 2 via `expect().toBe(2)`.
       - In `it('removes a product')`:
           - Trigger `.click()` on product 1 delete link.
           - Assert product 1 container is null and remaining cart length is 1.
       - In `afterEach()`:
           - Clean up test DOM container.
*/

// WRITE YOUR CODE BELOW:
