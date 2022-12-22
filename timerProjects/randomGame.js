function randomGame(){

    let number = 0;
    let counter = 0;
    
    
    function generate(){

        if (number < 0.75){

            number = Math.random();
            counter = counter + 1;
            //console.log("GENERATED: " + number);
            setTimeout(generate, 1000)
            
        } else {

            console.log("It took " + counter + " attempts to generate a number over 0.75");
            
        }
        
    }

    generate();
}