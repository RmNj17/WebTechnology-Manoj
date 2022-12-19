setTimeout(() => {

    // console.log("Hello")

    document.title = "Hello title changing";
    
}, timeout,5000);



function handleButtonClick(greetText,rollno,isMale) {
    let time = new Date();
    let gender = isMale ? "Male": "Female";
    alert(`Hi , Your roll no is ${rollno}, Gender is ${gender}`);

}
