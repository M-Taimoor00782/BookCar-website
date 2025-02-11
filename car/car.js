document.addEventListener('DOMContentLoaded', function () {
    const pickDate = document.querySelector('.pick-date');
    const realDate = document.querySelector('.pick-real-date');
    const pickTime = document.querySelector('.pick-time');
    const realTime = document.querySelector('.pick-real-time');

    pickDate.addEventListener('click', () => {
        realDate.showPicker();
    });

    realDate.addEventListener('change', () => {
        pickDate.value = realDate.value;
    });

    pickTime.addEventListener('click', () => {
        realTime.showPicker();
    });

    realTime.addEventListener('change', () => {
        pickTime.value = realTime.value;
    });

    const formButton = document.querySelector('.form_btn');
    const carForm = document.querySelector('.carfrom');

    formButton.addEventListener('click', () => {
        carForm.submit();
    });
});