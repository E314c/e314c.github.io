const util = require('util');
const types = [
    1,
    true,
    '',
    [],
    {},
    function(x){return x;}
];

function colouredValue(x){
    return util.inspect(x,{colors:true});
}
function stage(y){
    console.log(`\n---- Stage ${y} ----`);
}

stage('Intro');
//Show values
console.log(JSON.stringify(types, null, '  '));

stage('Typeof');
//Show their types:
types.forEach((x)=>{
    console.log(`${colouredValue(x)}\tis\t${typeof x}`);
})

stage('Constructor')
//do they have constructors?
types.forEach((x)=>{
    if(x.constructor){
        console.log(`${colouredValue(x)} has a constructor!\t ${x.constructor}`);

    } else {
        console.log(`${colouredValue(x)} doesn't have a constructor!`);
    }
});
