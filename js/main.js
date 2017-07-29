// build contact form
let form = `<form action=" " id="contact-us" class="form-horizontal contact-form">`;
let formGroup = `<div class="form-group">`;
let label = `<label for="`;
let controlLabel = `class="col-sm-2 control-label">`;
let colDiv = `<div class="col-sm-10">`;
let input = `<input type="`
let formControl = `class="form-control"`;
let unDiv = `</div>
</div>`
let name = `${formGroup}
${label}name" ${controlLabel}Name:</label>
${colDiv}
${input}text" ${formControl} id="name" name="user_name" placeholder="Your Name">
${unDiv}`;
let phone = `${formGroup}
${label}phone" ${controlLabel}Phone:</label>
${colDiv}
${input}tel" ${formControl} id="phone" name="user_phone" placeholder="(###)###-####">
${unDiv}`;
let email = `${formGroup}
${label}email" ${controlLabel}Email:</label>
${colDiv}
${input}mail" ${formControl} id="email" name="user_email" placeholder="you@example.com">
${unDiv}`;
let msg = `${formGroup}
${label}msg" ${controlLabel}Message:</label>
${colDiv}
<textarea ${formControl} id="msg" name="user_message" placeholder="Max length 500 characters"></textarea>
${unDiv}`;
let button = `${formGroup}
<div class="col-sm-offset-2 col-sm-10">
<button type="submit" class="btn btn-lg btn-primary send">Send</button>
${unDiv}`;
let contactForm = `${form}
${name}
${phone}
${email}
${msg}
${button}
</form>`;

$('.btn').click(function () {
  $('body').append(contactForm)
})
