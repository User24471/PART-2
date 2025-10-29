// enquiry.js
const form = document.getElementById('enqForm');
const type = document.getElementById('type');
const productLabel = document.getElementById('productLabel');

type.addEventListener('change', () => {
  productLabel.style.display = type.value === 'service' ? 'block' : 'none';
});

function priceFor(product) {
  return product === 'basic' ? 350 : product === 'pro' ? 700 : 1200;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const fullname = document.getElementById('fullname').value.trim();
  const email = document.getElementById('email').value.trim();
  if (fullname.length < 2) return alert('Please enter your name');
  if (!/^\S+@\S+\.\S+$/.test(email)) return alert('Please enter a valid email');

  const enqType = type.value;
  const qty = Number(document.getElementById('qty').value) || 1;

  if (enqType === 'service') {
    const product = document.getElementById('product').value;
    const unit = priceFor(product);
    const total = unit * qty;
    document.getElementById('result').innerHTML = `<h2>Quote</h2>
      <p>Package: ${product}</p><p>Quantity: ${qty}</p><p>Total: R${total.toFixed(2)}</p>`;
  } else if (enqType === 'volunteer') {
    document.getElementById('result').innerHTML = `<p>Thanks ${fullname}. We have volunteer slots available next month. We'll email ${email} with signup details.</p>`;
  } else if (enqType === 'sponsor') {
    document.getElementById('result').innerHTML = `<p>Thanks — a sponsorship pack has been emailed to ${email}.</p>`;
  } else {
    document.getElementById('result').innerHTML = `<p>Please select an enquiry type.</p>`;
  }
});

