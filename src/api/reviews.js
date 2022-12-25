const database = [
  {
    mid: 1,
    list: [
      { rid: 1, user: "홍길동", content: "멋있어요" },
      { rid: 2, user: "김나연", content: "별로예요" },
      { rid: 3, user: "박모모", content: "이뻐요" }
    ]
  },
  {
    mid: 2,
    list: [
      { rid: 1, user: "김서연", content: "멋있어요" },
      { rid: 2, user: "박동건", content: "별로예요" },
      { rid: 3, user: "구빈", content: "이뻐요" }
    ]
  },
  {
    mid: 3,
    list: [
      { rid: 1, user: "김철수", content: "멋있어요" },
      { rid: 2, user: "박석열", content: "별로예요" },
      { rid: 3, user: "최재명", content: "이뻐요" }
    ]
  }
];

export default {
  fetch(id) {
    console.log(`id : ${id}`);
    console.log(database.find(el => el.mid === id).list);
    return database.find(el => el.mid === id).list;
  },
  find(id) {
    return database.find(el => el.list.rid === id);
  },
  asyncFind(mid, rid, callback) {
    setTimeout(() => {
      console.log("라라라");
      console.log(mid);
      console.log(rid);
      let list = [];
      list = database.find(el => el.mid === mid);
      console.log(JSON.stringify(list));
      callback(list.list.find(el => el.rid === rid));
    }, 1000);
  }
};
