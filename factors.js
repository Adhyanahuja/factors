
function findthefactors(number) {
    var factors = [], i;
    for (i=1;i<=number;i++){
        if (number%i==0) {
            factors.push(i);
        }
    }
    return factors;
}
document.write("The factors of the given number are : "+findthefactors(24))
// You can enter any number for which you want to calculate the factors. By default i have taken the value 24.
