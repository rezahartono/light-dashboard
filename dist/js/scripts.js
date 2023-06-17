$('a[role="button"]').click(function (e) {
    e.preventDefault()
})

$('[data-toggler="sidebar"]').click(function () {
    $('.wrapper').toggleClass('sidebar-collapsed')
    $('.sidebar').toggleClass('show')
    $('.content-wrapper').toggleClass('collapsed')
})

$('.nav-link[role="button"]').click(function () {
    console.log($(this).parent());
    $(this).parent().toggleClass('collapsed')
})