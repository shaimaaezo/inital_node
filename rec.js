module.exports=(x,y,callback)=>{
    if (x<=0 || x<=0){
        setTimeout(()=>{
            callback(new Error("there are error"),null)
        },2000)
    }else{
        setTimeout(()=>{
            callback(null,
                {
                    area:()=>x*y,
                    parameter:()=>x+y
                }
                )
        },2000)
    }
}

