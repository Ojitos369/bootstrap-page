$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$('body').scrollspy({ target: '#header' })

function show_data_alert(){
    // id: data-alert
    let data_alert = document.getElementById('data-alert')
    let data_email = document.getElementById('data-email')
    // remove d-none class during 3 seconds
    data_alert.classList.remove('d-none')
    data_alert.style.display = 'block'
    setTimeout(function(){
        data_alert.classList.add('d-none')
        data_alert.style.display = 'none'
    }, 3000)
    // clear input data-email
    setTimeout(function(){
        data_email.value = ''
    }, 1000)
}