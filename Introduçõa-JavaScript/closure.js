function init(){
    const exemplo = "Essa variaveis";
return function(){
    console.log(`1 - 0 valor da variavel exemplo é: ${exemplo}.`);

    return function(){
        console.log(`2 - 0 O valor da variaveis é: ${exemplo}.`);

        return function(){
            console.log(`3 - 0 valor da variaveis é: ${exemplo}.`);
        }
      }
   }
}

const initFn1 = init();
const initFn2 = initFn1();
const initFn3 = initFn2();

initFn3();