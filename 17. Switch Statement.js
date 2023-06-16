// Switch statement 




// - Used to select one condition from many set of conditions
// - contains a variable that acts as condition selector


// Syntax:  
        /**
            switch(variable) {

                case value:
                    Code to execute
                    break;

                case value:
                    Code to execute
                    break;

                case value:
                    Code to execute
                    break;

                case value:
                    Code to execute
                    break;

                .........

                case value:
                    Code to execute
                    break;

                case value:
                    Code to execute
                    break;

                case value:
                    Code to execute
                    break;
                
                default:
                    Code to excecute
                    break;
            }
        **/




// Ex:

label:
let day = prompt("Enter day: ");

switch(day) {

    case 0:
        document.write("The day is Monday");
        break;

    case 1:
        document.write("The day is Tuesday");
        break;

    case 2:
        document.write("The day is Wendnesday");
        break;

    case 3:
        document.write("The day is Thursday");
        break;

    case 4:
        document.write("The day is Friday");
        break;

    case 5:
        document.write("The day is Saturday");
        break;

    case 6:
        document.write("The day is Sunday");
        break;
    
    default:
        document.write("Enter days from 0 to 6");
        break;

}
