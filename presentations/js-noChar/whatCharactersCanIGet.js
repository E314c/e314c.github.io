const util = require('util');

function stringCharSet(string){
    return string.split('').sort().filter((x,i,a)=>a.indexOf(x)===i);
}

function colouredValue(x){
    return util.inspect(x,{colors:true});
}

//sequences to test:
[
    `[]`,
    `22..constructor`,
    `true`,
    `![]+[]+!![]`,
    `![]+[]+!![]+{}`,
    `![]+[]+!![]+{}+[][1]`,
	`![]+[]+!![]+{}+{}._`,
    `(![]).constructor`
].forEach((seq)=>{
    //to string:
    if(typeof eval(seq) !== 'string'){
        seq =  `${seq}+''`;
    }
    //data processing
    const string = eval(seq);
    const charSet = stringCharSet(string);
    const canConstruct = 'constructor'.split('').reduce((acc, char)=>{
        return acc && charSet.includes(char);
    },true);

    //Print
    console.log(`${seq}\t=>\t${colouredValue(string)}`);
    console.log(`\t${seq.length} chars`);
    console.log(`\tgives:\t${charSet.length}`);
    console.log(`\tratio: ${charSet.length/seq.length}`)
    console.log(`\tcharacters:\t${charSet.join(' ')}`);
    console.log(`\tcan create 'constructor':\t${canConstruct}`);


});
