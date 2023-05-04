const root1 = document.querySelector('[data-key="order1"]');
const biscuits1 = parseInt(root1.dataset.biscuits);
const donuts1 = parseInt(root1.dataset.donuts);
const pancakes1 = parseInt(root1.dataset.pancakes);
const status1 = root1.querySelector('[data-delivered="false"]');

const root2 = document.querySelector('[data-key="order2"]');
const biscuits2 = parseInt(root2.dataset.biscuits);
const donuts2 = parseInt(root2.dataset.donuts);
const pancakes2 = parseInt(root2.dataset.pancakes);
const status2 = root2.querySelector('[data-delivered="false"]');

const root3 = document.querySelector('[data-key="order3"]');
const biscuits3 = parseInt(root3.dataset.biscuits);
const donuts3 = parseInt(root3.dataset.donuts);
const pancakes3 = parseInt(root3.dataset.pancakes);
const status3 = root3.querySelector('[data-delivered="true"]');

biscuits1 = root1.biscuits,
donuts1 = root1.donuts,
pancakes1 = root1.pancakes,
status1 = root1.status ? Delivered : Pending

biscuits2 = root2.biscuits,
donuts2 = root2.donuts,
pancakes2 = root2.pancakes,
status2 = root2.status ? Delivered : Pending

biscuits3 = root3.biscuits,
donuts3 = root3.donuts,
pancakes3 = root3.pancakes,
status3 = root3.status ? Delivered : Pending