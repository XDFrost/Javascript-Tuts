// Function inside function




const app = () =>{

    const myfun = () =>{
        console.log("Hello from myfun");
    }

    const addTwo = (num1, num2) =>{
        return num1+num2;
    }

    const mul = (num1, num2) => num1*num2

    console.log("Inside app");
    myfun();
    console.log(addTwo(3,5));   
    console.log(mul(4,7))

}

app();
