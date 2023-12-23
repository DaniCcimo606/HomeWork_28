const kitchenProducts = [
	{
		type: 'grater',
		price: 10
	},
	{
		type: 'pastry-bag',
		price: 25
	},
	{
		type: 'scale',
		price: 5
	},
	{
		type: 'whisk',
		price: 15
	}
];

const devicesProducts = [
	{
		type: 'desktop',
		price: [100,1000]
	},
	{
		type: 'laptop',
		price: [50,1500]
	},
	{
		type: 'smartphone',
		price: [80,2000]
	},
	{
		type: 'tablet',
		price: [20,1300]
	}
];

const cosmeticsProducts = [
	{
		type: 'blush',
		price: 100
	},
	{
		type: 'eyeshadow',
		price: 50
	},
	{
		type: 'lipstick',
		price: 80
	},
	{
		type: 'nail-polish',
		price: 200
	},
	{
		type: 'perfume',
		price: 300,
	}
];

class Category {
    constructor(category) {
        this.Category = category
    }
}

let Kitchen = new Category('kitchen');
let Devices = new Category('devices');
let Cosmetics = new Category('cosmetics');
Kitchen = Object.create(Kitchen);
Devices = Object.create(Devices);
Cosmetics = Object.create(Cosmetics);
const categoryItems = [kitchenProducts, devicesProducts, cosmeticsProducts];
const categoryList = ['kitchen', 'devices', 'cosmetics'];

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);

function categoryOutput() {
	for (let i = 0; i < categoryList.length; i++) {
		const categoryWrap = document.createElement('div');
		categoryWrap.setAttribute('class', 'category-wrap');
		categoryWrap.setAttribute('id', `${categoryList[i]}`);
		wrapper.appendChild(categoryWrap);
		const categoryTitle = document.createElement('h1');
		categoryTitle.setAttribute('class', 'category-title');
		categoryTitle.innerHTML = `Category: ${categoryList[i]}`;
		wrapper.insertBefore(categoryTitle, categoryWrap);

		for (let j = 0; j < categoryItems[i].length; j++) {
			const categoryBlock = document.createElement('div');
			categoryBlock.setAttribute('class', 'category-block');
			categoryWrap.appendChild(categoryBlock);
			categoryBlock.innerHTML += `<img src="img/${categoryList[i]}/${categoryItems[i][j].type}.svg" alt="${categoryItems[i][j].type}">`;
			categoryBlock.innerHTML += `<span class="category-block-feature" id="category-block-name">Name: <span>${categoryItems[i][j].type}</span></span>`;
			if (categoryItems[i] == devicesProducts) {
				categoryBlock.innerHTML += `<span class="category-block-feature" id="category-block-price">Price: <span>$${categoryItems[i][j].price.join('-')}</span></span>`;
			} else {
				categoryBlock.innerHTML += `<span class="category-block-feature" id="category-block-price">Price: <span>$${categoryItems[i][j].price}</span></span>`;
			}
		}
	}
}
categoryOutput();