function getSelectedCheckboxValues(name) {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    return values;
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', (event) => {
    alert(getSelectedCheckboxValues('color'));
    console.log(document.getElementById("ch1").checked);
    if (document.getElementById("ch1").checked){
        
    }
});

alert(document.getElementById("ch1").checked)