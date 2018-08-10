




var budget,
	name,
	price,
	time;

function start() {
	budget = (prompt('Ваш бюджет?'));
	while (isNaN(budget) || budget == '' || budget == null) {
		budget = (prompt('Ваш бюджет?'));
	}
	name = prompt('Введите имя вашего магазина').toUpperCase();
	time = 21;
}
start();
var mainList = {
	budget: budget,
	name: name,
	shopGoods: [],
	discount: true,
	employers: [],
	open: false,
	time: 21,
	dayBudget: function dayBudget() {
				alert('Ежедневный бюджет: ' + mainList.budget / 30);
	},
	employersHiring: function employersHiring() {
					for (let i = 0; i < 4; i++) {
					let a = prompt('Имя сотрудника');
					while ((typeof(a)) !== 'string' || (typeof(a)) == null || a == '') {
						alert('Введите имя сотрудника')
						a = prompt('Введите имя сотрудника');
						}
					mainList.employers[i] = a;
					}
				},
	workTime: function workTime(time) {
			if (time < 0 ) {
				console.log('Такого не может быть');
			} else if (time > 8 && time < 20) {
					console.log('Время работать')
					mainList.open = true;
				} else if (time < 24) {
					console.log('Слишком поздно')
					} else {
							console.log('В сутках не больше чем 24 часа')
						}
	},
	sale: function sale(){
		if (discount == true) {
			price *= 0.8;
		} else {
			alert('У вас скидки нет(')
		}
	},
	shopTovar: function shopTovar() {
			for (let i = 0; i < 3; i++) {
			let a = prompt('Какой тип товара будем продавать?');
		 	while (( typeof(a)) !== 'string' || ( typeof(a)) == null || a == '' || a.length > 50 ) {
				alert('Неправильнно введенный тип товаров!!!');
				a = prompt('Какой тип товара будем продавать?');
				}
			mainList.shopGoods[i] = a;
		}
	}	
};
mainList.shopTovar();
mainList.shopGoods.forEach(function(item, i, arr) {
	alert('У нас вы можете купить: ' + (i += 1) + ': ' + item);
});
/*mainList.employersHiring();
mainList.dayBudget(Math.round());*/
mainList.workTime();
console.log(mainList.shopGoods);
console.log(mainList);
