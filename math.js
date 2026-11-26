// const add = (a,b)=>{
//     return a + b;   
// }

// const multiply = (a,b)=>{
//     return a * b;   
// }

// module.exports = add;
// module.exports = multiply;
//export nhi exports

//module.exports is used to export a single function, object, or primitive value from a module.
//  In this case, we are exporting the add function so that it can be imported and
//  used in other files using require().
//When you reassign module.exports, it completely replaces the entire export with a new value.
//If you reassign it again (module.exports = multiply), it will replace the previous 
//export (add function) and only the multiply function will be exported.
//Sab se bottom wala hi export hoga, pehle wale ko overwrite kr dega.

    

// const add = (a,b)=>{
//     return a + b;   
// }

// const multiply = (a,b)=>{
//     return a * b;   
// }

// module.exports.add = add;
// module.exports.multiply = multiply;

//This is the first method of exporting multiple functions from a module. 
// We are using module.exports.functionName to export an object that contains both the 
// add and multiply functions.

const add = (a,b)=>{
    return a + b;   
}

const multiply = (a,b)=>{
    return a * b;   
}
const sub = (a,b)=>{
    return a - b;   
}

const div = (a,b)=>{
    return a / b;   
}

module.exports = {
    add,
    multiply,
    sub,
    div
}
//The word or function name which we are exporting will be the same name which we 
// will use to import it in other files while destructuring.
//This is the second method of exporting multiple functions from a module.

