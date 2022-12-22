
function countDown(s) {


    for(let i = 0; i < s; i++) {

        
        setTimeout(function(){console.log(s - i);}, (i + 1) * 1000)
        

    }

    setTimeout(function (){console.log("DONE!")}, s * 1000)

}

