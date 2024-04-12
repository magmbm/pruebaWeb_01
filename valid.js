function submit1(){
    let text= 'Mensaje enviado con exito, le contactaremos pronto';
    let text2= 'Error, la contraseña o correo no es valido';
    if(document.getElementById("exampleInputEmail1").ariaValueMax.includes('@') &&
        document.getElementById("exampleInputPassword1").ariaValueMax.length>0
        && document.getElementById("exampleMotiv").ariaValueMax.length>0){
        alert(text);
    }else{
        alert(text2);
    }

};