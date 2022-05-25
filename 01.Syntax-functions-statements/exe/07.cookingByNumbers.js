// Write a program that receives 6 parameters which are a number and a list of five operations. 
// Perform the operations sequentially by starting with the input number and using the result of every operation as a starting point for the next one.
// Print the result of every operation in order. The operations can be one of the following:
// •	chop - divide the number by two
// •	dice - square root of a number
// •	spice - add 1 to the number
// •	bake - multiply number by 3
// •	fillet - subtract 20% from the number
// The input comes as 6 string elements. The first element is the starting point and must be parsed to a number. The remaining 5 elements are the names of the operations to be performed.
// The output should be printed on the console.

function cookingByNumbers(number, command1, command2, command3, command4, command5) {
    let num = Number(number);
    let commands = [command1, command2, command3, command4, command5]

    let chop = x => x / 2;
    let dice = x => Math.sqrt(x);
    let spice = x => ++x;
    let bake = x => x * 3;
    let fillet = x => x - 0.2 * x;

    for (let i = 0; i < commands.length; i++) {
        switch (commands[i]) {
            case 'chop':
                num = chop(num);
                break;
            case 'dice':
                num = dice(num);
                break;
            case 'spice':
                num = spice(num);
                break;
            case 'bake':
                num = bake(num);
                break;
            case 'fillet':
                num = fillet(num);
                break;
            default:
                break;
        }
        console.log(num)
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')