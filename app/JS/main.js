
const body = $('body');
const calcTheme = $('span');
const toggle = $('label');
const swtch = $('#switch');
const display = $('.display__val');
const keysContainer = $('.calc__keys-container');
const resetBtn = $('input[value=reset]');

// Remove Display Default Valeu
display.on('keydown', function(event) {
    event.preventDefault();
})

display.on('mousedown', function() {
    return false;
})
// End

// Set Key Operations
function insrt(num) {
    display.val(display.val() + num);
}

function eql() {
    display.val(eval(display.val()))
}

function res() {
    display.val('')
}

function del() {
    value = display.val();
    display.val(value.substring(0, value.length - 1));
}
// End

// Change Theme
swtch.on('change', function () {
    // Body
    if (body.hasClass('body_light')) {
       body.removeClass();
    } else {
       body.addClass('body_light');
    }
    // Calc And Theme
    if (calcTheme.hasClass('theme-light')) {
        calcTheme.removeClass('theme-light');
    } else {
        calcTheme.addClass('theme-light');
    }
    // Display
    if (display.hasClass('display__val-light')) {
        display.removeClass('display__val-light');
    } else {
        display.addClass('display__val-light');
    }
    // Keys Background
    if (keysContainer.hasClass('keys-container-light')) {
        keysContainer.removeClass('keys-container-light');
    } else {
        keysContainer.addClass('keys-container-light');
    }
    // Toggle Switch
    if (toggle.hasClass('toggle-light')) { 
        toggle.removeClass('toggle-light');
    } else {
        toggle.addClass('toggle-light');
    }
})

