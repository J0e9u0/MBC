obj = {
    data: ['John Backus', 'John Hopcroft'],
    init: function() {
        document.onclick = ev => {
            alert(this.data) // ['John Backus', 'John Hopcroft']
        }
        // 非箭头函数
        // document.onclick = function(ev) {
        //     alert(this.data) // undefined
        // }
    }
};
obj.init();

