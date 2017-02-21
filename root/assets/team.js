$('#hideteamDiv-x1').show();
$('.teamDivs').click(function() {
    var id = this.id;
    $('.hide').hide();
    $('.teamDivs').removeClass('active-teamSections');
    $('#hide' + id).show();
    $(this).addClass('active-teamSections');
});