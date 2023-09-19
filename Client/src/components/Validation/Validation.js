const validation = (userData) => {
   const errors = {};    

    if(!/\S+@\S+\.\S+/.test(userData.email)) {
        errors.email = 'Por favor, ingrese un email valido';
    }
    if (!userData.email){
        errors.email = 'Debe ingresar un email valido'
    }
    
    if (userData.email.length > 35){
        errors.email = 'Maximo de 35 caracteres'
    }
    
    if (!/^[A-Za-z]\w{7,14}$/.test(userData.password)){
        errors.password = 'La contraseña debe contener al menos un número'
    }

    if (userData.password.length < 6 || userData.password.length > 10 ){
        errors.password = 'La contraseña debe tener un tamaño entre 6 y 10 caracteres'
    }
    return errors;

}

  


export default validation;
