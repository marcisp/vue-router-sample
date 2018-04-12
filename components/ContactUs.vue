<template>
  <div class="text-center">
    <h1 class="display-4">
      Contact us
    </h1>
    <p class="lead">
      Below is an example of a contact form
    </p>

    <div class="row text-left">
      <div class="col-md-8 offset-md-2" >

        <form action="">

          <h4 class="mb-3">Send us a note</h4>

          <div class="row m-0">
            <div class="col mb-3 pl-0">
              <label for="firstName">First name</label>
              <input type="text" class="form-control" id="firstName" placeholder="" value="" required="">
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>
            <div class="col mb-3 pr-0">
              <label for="lastName">Last name</label>
              <input type="text" class="form-control" id="lastName" placeholder="" value="" required="">
              <div class="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
          </div>

          <div class="mb-3">
            <label for="username">E-mail</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">@</span>
              </div>
              <input type="text" class="form-control" id="username" placeholder="E-mail" required="">
              <div class="invalid-feedback" style="width: 100%;">
                Your username is required.
              </div>
            </div>
          </div>

          <div class="mb-3">
            <label for="text">Text</label>
            
            <textarea class="form-control" name="text" id="text" >

            </textarea>
            <div class="invalid-feedback" style="width: 100%;">
              Your username is required.
            </div>
            
          </div>

          <hr class="mb-4">
          <button class="btn btn-primary btn-lg btn-block" type="submit">Send</button>

        </form>

      </div>

      

    </div>


  </div>
</template>
