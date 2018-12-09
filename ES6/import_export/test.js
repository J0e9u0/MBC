var log = () => {
    console.log('no param')
};
log();

var single = a => a;
single('hello, world');

var add = (a, b) => a + b
add(3, 8); // 11

var log = function (){
    console.log('hello')
};

log();