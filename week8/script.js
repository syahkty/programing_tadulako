const motor = {
    gas(param) {
        if(param > 100){
            console.log(`motor melaju dengan kecepatan ${param} Km/jam`)
        }
        else {
            console.log("terlalu lambat")
        }
    }
}

motor.gas(90)