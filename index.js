var rect = require('./rec.js');

function seq (x,y){
    rect(x,y,(error,rectang)=>{
        if(error){
            console.log("error is: "+error.massage)
        }else{
            console.log("area is:"+rectang.area)
            console.log("params is: "+rectang.parameter)
        }
        console.log("call finish")
    })
}

seq(5,4)
seq(7,0)
seq(3,2)


