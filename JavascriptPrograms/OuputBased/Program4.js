for(var i=0;i<3;i++){
    setTimeout(function(i_local){return function(){console.log(i_local);}}(i),1000+i);
}