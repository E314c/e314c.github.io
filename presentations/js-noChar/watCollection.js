const WATS = [
    {
        wtf: '1==1',
        category: 'sane'
    },
    {
        wtf: '[] == ![]',
        explanation: '![] evaluates to `false`, [] is evaluated to "". "" is falsy',
        category: 'strange_equality',
    },
    {
        wtf: `1 == 1`,
        category: 'sane'
    },
    {
        wtf: `1 === 1`,
        category: 'sane',
    },
    {
        wtf: `'1' === 1`,
        explanation: '=== requires values be of the same type aswell',
        category: 'sane'
    },
    {
        wtf: `'1' == 1`,
        category: 'sane',
        explanation: 'the number one can be coerced into a string that matches \'1\''

    },
    {
        wtf: `0 == false`,
        category: 'sane',
        explanation: 'True and False is analogous to on/off states, which are represented in binary as 0:off, 1:on.\nThus false is usually represented as 0 and true is any non-zero'
    },
    {
        wtf:`'foo' == true`,
        // TODO: category
        explanation: 'A non-empty string is truthy. (just as a non-zero number is)'
    }, 
    {
        wtf: `'foo' == false`,
        explanation: 'A non-empty string is truthy. (just as a non-zero number is)'
    },
    {
        wtf: `1 + 1`,
        category: 'sane'
    },
    {
        wtf: `1 + '1'`,
        explanation: 'In addition, strings on either side cause string concatenation'
    },
    {
        wtf: `1 + 1 + '1'`,
        explanation: '(1 + 1) + \'1\' creates 2, then concatenates it into a string'
    },
    {
        wtf: `'11' - 1`,
        explanation: 'Because negation of a string doesn\'t make sense, Javascript happily parses the string to a number',
    },
    {
        wtf: `4 == [4]`,
        explanation: '[4] becomes "4" and 4 can also be stringified to the same value'
    },
    {
        wtf: `+'10'`,
        explanation: 'as a full statement, appending + to a value attempts to convert it to a number'
    },
    {
        wtf: `+'-10'`,
        explanation: 'as a full statement, appending + to a value attempts to convert it to a number'
    },
    {
        wtf:`+[]`,
        explanation: 'The numeric value of an empty array is 0',
        category: 'standard_coercion'
    },
    {
        wtf: `+'a'`,
        explanation: '"a" can\'t be converted to a base 10 number',
        category: 'standard_coercion'
    }, 
    {
        wtf:`+{}`,
        explanation: 'While +[] works, +{} is not a number',
        category: 'standard_coercion'
    },
    {
        wtf: `typeof NaN`,
        category: 'crazy_types'
    }
    /*/
    `1 + + '1'`,
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
    `1 + [] === 1 + ''`
    `038 - 037`,
    `[5] + [12]`,
    `Number.parseInt('fuck')`,
    `Number.parseInt('fuck', 16)`,
    //*/

];

try{
    module.exports = WATS;
}catch(e) {}