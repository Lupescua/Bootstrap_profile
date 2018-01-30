
$('.progress').appear();
$('.progress').on('appear', function () {
    alert('Hy');
    progress('#HTML', '40%');
    progress('#CSS/SCSS/SASS', '35%');
    progress('#JavaScript', '25%');
    progress('#jQuery ', '30%');
    progress('#Python ', '15%');
    progress('#VBA', '30%');
});

function progress(barID, value) {
    $(barID).animate({
        'width': value
    }, 2000);
};