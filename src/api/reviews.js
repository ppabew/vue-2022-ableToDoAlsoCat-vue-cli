const database = [
	{
		id : 1,
		list: [
			{rid: 1, user: '홍길동', content: '멋있어요'},
			{rid: 2, user: '김나연', content: '별로예요'},
			{rid: 3, user: '박모모', content: '이뻐요'},
		]
	},
	{
		id : 2,
		list: [
			{rid: 1, user: '김서연', content: '멋있어요'},
			{rid: 2, user: '박동건', content: '별로예요'},
			{rid: 3, user: '구빈', content: '이뻐요'},
		]
	},
	{
		id : 3,
		list: [
			{rid: 1, user: '김철수', content: '멋있어요'},
			{rid: 2, user: '박석열', content: '별로예요'},
			{rid: 3, user: '최재명', content: '이뻐요'},
		]
	}

]

export default  {
	fetch(id) {return database.find(id)},
	find(id) {return database.find(el => el.id === id)},
	asyncFind(id, callback) {
		setTimeout(() => {
			callback(database.find(el => el.id === id))
		}, 1000)
	}
}