// build contact form
let form = $('<form/>', {
  action: ' ',
  id: 'contact-us',
  class: 'form-horizontal contact-form'
});
let formGroup = $('<div/>', {
  class: 'form-group'
});
let controlLabel = `col-sm-2 control-label`;
let colDiv = $('<div/>', {
  class: 'col-sm-10'
});
//let formControl = `class="form-control"`;
let name = $(formGroup).append(
  $('<label/>', {
    for: 'name',
    class: controlLabel
  }).append('Name:'),
  $(colDiv).append(
    $('<input>', {
      type: 'text',
      class: 'form-control',
      id: 'name',
      name: 'user_name',
      placeholder: 'Your Name'
    })
  )
);
let contactForm = $(form).append(name);

$('.btn').click(function () {
  $('.cover').append(contactForm)
})
