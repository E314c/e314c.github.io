const util = require('util');
let promiseChain = Promise.all([1]);
const timing = 2 * 1000;
[
    `1 == 1`,
    `1 === 1`,
    `'1' === 1`,
    `'1' == 1`,
    `0 == false`,
    `'foo' == true`,
    `'foo' == false`,

0, //String is king
    `1 + 1`,
    `1 + '1'`,
    `1 + 1 + '1'`,
    `'11' - 1`,
    `4 == [4]`,
    `4 == '4'`,
0,  //Positively numeric
    `+'10'`,
    `+'-10'`,
    `+[]`,
    `+'a'`,
    `+{}`,
    `1 + + '1'`,
0,  //Truthiness
    `!true`,
    `!0`,
    `!314`,
    `!!true`,
    `!!{}`,
    `!![]`,
    `![]`,
    `0 == ![]`,
    `0 == []`,
    `0 == !![]`,
    `[] == ![]`,
0,
    `1 + [] === 1 + ''`

].forEach((wat)=>{
    promiseChain = promiseChain.then(()=>{
        return new Promise((resolve, reject)=>{

            if(wat){
                console.info(`> ${wat}`)
                setTimeout(()=>{
                    if(wat){console.log(' '+util.inspect(Function(`return (${wat});`)(), {colors:true}));}

                    setTimeout(()=>{
                        resolve();
                    }, timing/4);
                }, timing);
            }else{
                console.log(' ');
                setTimeout(()=>{
                    resolve();
                }, timing/4);
            }
        });
    });
});
