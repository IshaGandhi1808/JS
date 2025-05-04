const form = document.querySelector("form");
// console.log(form);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const height = document.querySelector("#height").value;
    const weight =document.querySelector("#weight").value;
    console.log(height);
    console.log(weight);
    console.log("Form submitted");
    const result = document.querySelector("#rst1");

    if (height === "" || height < 0 || isNaN(height)) {
        result.innerText = `Please enter a valid height "${height}"`;
    } else if  (weight === "" || weight < 0 || isNaN(weight)) {
        result.innerText = `Please enter a valid weight "${weight}"`;
    } else {
        const bmi = (weight / ((height * height)/10000)).toFixed(2);
        if (bmi < 18.6) {
            result.innerText = `Your BMI is ${bmi}. You are underweight.`;
        } else if ( bmi >= 18.6 && bmi <= 24.9) {
            result.innerText = `Your BMI is ${bmi}. You are normal weight.`;
        } else if (bmi > 24.9) {
            result.innerText = `Your BMI is ${bmi}. You are overweight.`;
        }   
    }
    result.style.display = "block";
});