function getName(){
    return "Marivaldo Carmo";
}
function logFtn(fn) {
    console.log(fn());
}

const logFnResult = logFtn;

logFnResult(getName);
