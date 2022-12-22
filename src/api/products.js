const database = [
	{id: 1, name: '상품A', price: 100, content: '상품A 상세'},
	{id: 2, name: '상품B', price: 200, content: '상품B 상세'},
	{id: 3, name: '상품C', price: 300, content: '상품C 상세'},
]

export default  {
	fetch(id) {return database},
	find(id) {return database.find(el => el.id === id)},
	asyncFind(id, callback) {
		setTimeout(() => {
			callback(database.find(el => el.id === id))
		}, 1000)
	}
}