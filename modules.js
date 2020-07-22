function add(num1, num2){
    return (parseInt(num1) + parseInt(num2));
}

function mult(num1, num2){
    return (num1 * num2)
}

module.exports = {
    'add':add,
    'mult':mult
}