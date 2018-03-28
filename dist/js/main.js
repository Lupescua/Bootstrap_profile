$('.progress').appear();
$('.progress').on('appear', function () {
    console.log('Hy');
    progress('#HTML', '40%');
    progress('#CSS', '35%');
    progress('#JavaScript', '25%');
    progress('#jQuery ', '30%');
    progress('#Python ', '15%');
    progress('#VBA', '30%');
});

function progress(barID, value) {
    // $(barID).delay(500).animate({
        $(barID).animate({
        'width': value
    }, 2000);
};