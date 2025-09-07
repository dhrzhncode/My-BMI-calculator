document.getElementById("calbtn").addEventListener("click", function(){
    let weight = document.getElementById("weight");
    let height = document.getElementById("height");
    let age = document.getElementById("age");
    let genderMale = document.getElementById("male");
    let genderFemale = document.getElementById("female");
    let result = document.getElementById("result");

    let input = [weight,height,age]
    let valid = true;

    input.forEach(inp => {
        inp.style.border = "2px solid green";
        inp.style.backgroundColor = "rgba(64, 63, 117, 1)";;
    });

    input.forEach(inp => {
        if (inp.value.trim() === ""){
            inp.style.border = "1.5px solid red";
            inp.style.backgroundColor = "rgba(95, 34, 47, 1)";
            valid = false;
        }
    });

    if (!genderMale.checked && !genderFemale.checked){
        alert("please select gender")
        valid = false;
    }

    if (!valid) return;

    let hi = parseFloat(height.value)/100;
    let w = parseFloat(weight.value);
    
    let bmi = w/(hi*hi);
    let ogl = "";
    if(bmi<18.5){
        ogl = "Under Weight"
    }
    else if(bmi<24.9 && bmi>18.5){
        ogl = "Healthy"
    }
    else{
        ogl = "Over Weight"
    }
    result.textContent = `Your BMI is ${bmi.toFixed(2)}. Your are ${ogl}`;

    input.forEach(inp =>{
        inp.addEventListener("input",()=>{
            if (inp.value.trim() !== ""){
                inp.style.border = "";
                inp.style.backgroundColor = "rgb(64, 63, 117,1)";
            }
        });
    });
});
