const order1 = document.querySelector('[data-key="order1"]');
const order2 = document.querySelector('[data-key="order2"]');
const order3 = document.querySelector('[data-key="order3"]');

const orders = [order1, order2, order3];

orders.forEach((dl) => {
    const biscuits = dl.querySelector('[data-biscuits]').getAttribute('data-biscuits="10"');
    const donuts = dl.querySelector('[data-donuts]').getAttribute('data-donuts');
    const pancakes = dl.querySelector('[data-pancakes]').getAttribute('data-pancakes');
    const delivered = dl.querySelector('[data-delivered]').getAttribute('data-delivered');

    biscuits = order.querySelector('.biscuits .count').textContent;
    donuts = order.querySelector('.donuts .count').textContent;
    pancakes = order.querySelector('.pancakes .count').textContent;
    delivered = order.querySelector('.status dd').textContent;
});