const util = require('util');
let promiseChain = Promise.all([1]);
const timing = 200;//2 * 1000;
[   //A few more that didn't have a place in my presentation
    `038 - 037`,    //curse you octals!
    `[5] + [12]`,
    `Number.parseInt('fuck')`,   //obviously not a number
    `Number.parseInt('fuck', 16)`,   //We can fix that though
].forEach((wat)=>{
    promiseChain = promiseChain.then(()=>{
        return new Promise((resolve, reject)=>{
            if(wat){
                console.info(`> ${wat}`)
            }else{
                console.log(' ');
            }
            setTimeout(()=>{
                if(wat){console.log(' '+util.inspect(Function(`return (${wat});`)(), {colors:true}));}
                resolve();
            }, timing);
        });
    });
});
