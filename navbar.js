$('#about').on('show.bs.modal', function (e) {
    // do something...
    $('#industry').modal('hide')
    $('#services').modal('hide')
  })

  $('#industry').on('show.bs.modal', function (e) {
    // do something...
    $('#about').modal('hide')
    $('#services').modal('hide')
  })

  $('#services').on('show.bs.modal', function (e) {
    // do something...
    $('#about').modal('hide')
    $('#industry').modal('hide')
  })