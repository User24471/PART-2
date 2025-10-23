// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');

  // Toggle icon
  const icon = darkModeToggle.querySelector('i');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
});
// Order
const productSelect = document.getElementById('product');
const quantityInput = document.getElementById('quantity');
const pricePerItemDisplay = document.getElementById('pricePerItem');
const itemTotalDisplay = document.getElementById('itemTotal');
const addToCartBtn = document.getElementById('addToCartBtn');
const cartItems = document.getElementById('cartItems');
const cartTotalDisplay = document.getElementById('cartTotal');
const orderForm = document.getElementById('orderForm');

let cart = [];
let cartTotal = 0;

// Update price dynamically
function updatePrice() {
  const selectedOption = productSelect.options[productSelect.selectedIndex];
  const price = parseFloat(selectedOption.getAttribute('data-price')) || 0;
  const quantity = parseInt(quantityInput.value) || 0;
  const itemTotal = price * quantity;

  pricePerItemDisplay.textContent = `R${price.toFixed(2)}`;
  itemTotalDisplay.textContent = `R${itemTotal.toFixed(2)}`;
}

productSelect.addEventListener('change', updatePrice);
quantityInput.addEventListener('input', updatePrice);

// Add item to cart
addToCartBtn.addEventListener('click', () => {
  const product = productSelect.value;
  const selectedOption = productSelect.options[productSelect.selectedIndex];
  const price = parseFloat(selectedOption.getAttribute('data-price')) || 0;
  const quantity = parseInt(quantityInput.value);

  if (!product || !quantity || quantity <= 0) {
    alert('Please select a product and enter a valid quantity.');
    return;
  }

  const total = price * quantity;

  cart.push({ product, quantity, price, total });
  renderCart();

  productSelect.value = '';
  quantityInput.value = '';
  pricePerItemDisplay.textContent = 'R0';
  itemTotalDisplay.textContent = 'R0';
});

// Render cart items
function renderCart() {
  cartItems.innerHTML = '';
  cartTotal = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.product} x ${item.quantity} - R${item.total.toFixed(2)}`;
    cartItems.appendChild(li);
    cartTotal += item.total;
  });

  cartTotalDisplay.textContent = `R${cartTotal.toFixed(2)}`;
}

// Submit order
orderForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }

  alert(`✅ Order placed successfully! Total Amount: R${cartTotal.toFixed(2)}`);

  cart = [];
  cartItems.innerHTML = '';
  cartTotal = 0;
  cartTotalDisplay.textContent = 'R0';
  orderForm.reset();
  pricePerItemDisplay.textContent = 'R0';
  itemTotalDisplay.textContent = 'R0';
});
