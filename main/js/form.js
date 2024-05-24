const lightSwitch = document.querySelector('.dark-light');
const container = document.querySelector('.light')

let mode = 'light';

lightSwitch.addEventListener('click', function() {
    if (mode==='light'){
        mode = 'dark';
        container.setAttribute('class', 'dark')
    } else {
        mode = 'light';
        container.setAttribute('class','light')
    }
    console.log(container);
});