function largestNumber() {

    // Take number01 from the input
    const num01 = Number(document.getElementById("number01").value);

    // Take number02 from the input
    const num02 = Number(document.getElementById("number02").value);

    // Take number03 from the input
    const num03 = Number(document.getElementById("number03").value);

    
    // Check the three input numbers which is the largest one.

    let result = "";

    // Check if num01 is largest
    if (num01 > num02 && num01 > num03) {

        result = `The largest number is : ${num01}`;
        console.log(result);
        document.querySelector('#h4').innerHTML = result;

    }
    // Check if num02 is largest
    else if (num02 > num01 && num02 > num03) {

        result = `The largest number is : ${num02}`;
        console.log(result);
        document.querySelector('#h4').innerHTML = result;

    }
    // Check if num03 is largest
    else if (num03 > num01 && num03 > num02) {

        result = `The largest number is : ${num03}`;
        console.log(result);
        document.querySelector('#h4').innerHTML = result;

    } else {

        result = `All numbers are equal.`;
        console.log(result);
        document.querySelector('#h4').innerHTML = result;

    }

}
