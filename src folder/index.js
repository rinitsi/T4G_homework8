function checkGender(){
    let gender = prompt("What is your gender ");
    if (gender == "female"){
        alert(`You are a girl`);
    }else if(gender == "male"){
        alert(`You are a boy`);
    }else {
        alert(`Enter your gender`);
    }
}
checkGender();