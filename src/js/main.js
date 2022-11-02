$("select").styler();

$(document).on("click", ".header-burger", function () {
    $(".header-mobile").addClass('open');
});

$(document).on("click", ".heder-mobile-close", function () {
    $(".header-mobile").removeClass('open');
});

$(document).on("click", ".vacancy-info-filter", function () {
  $(".mobile-filter").addClass('open');
});

$(document).on("click", ".mobile-filter-close", function () {
  $(".mobile-filter").removeClass('open');
});

// $(document).on("click", ".main-filter-select", function () {
//     $(".header-mobile").addClass('qwe');
// });

// let qwe = document.querySelector(".field-telephone-wrap-select");
// let zxc = document.querySelector(".zxc");


// qwe.addEventListener("click",(e)=> {
//     console.log(e.target.value);
//     zxc.value = e.target.value;
// })



$(document).ready(function () {
    $("#qwe").validate({
      errorElement: "span",
      rules: {
        email: {
          required: true,
          email: true,
        },
        telephone: {
          required: true,
          minlength: 12,
          telephone: true,
        },
        name: {
          required: true,
        //   lettersonlyName: true,
        },
        secondName: {
            required: true, 
        },
        textbox: {
            required: true,
            maxlength: 500,
          },
        // number: {
        //   required: true,
        //   number: true,
        // },
        // person: {
        //   required: true,
        // },
      },
      messages: {
        email: {
          required: "Enter your email",
        },
        name: {
          required: "Enter your name",
        },

        secondName: {
            required: "Enter your second name", 
        },
        telephone: {
          required: "Enter your phone number",
          minlength: " ",
        },
        textbox: {
            required: "Enter your message",
            maxlength: "The comment cannot exceed 500 characters",
          },
        // number: {
        //   required: "Введите данные",
        // },
        // person: {
        //   required: "Введите данные",
        // },
      },
    
    });


    jQuery.validator.addMethod(
        "telephone",
        function (value, element) {
          return (
            this.optional(element) ||
            /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){6,14}(\s*)?$/i.test(value)
          );
        },
        " "
      );
    
      jQuery.validator.addMethod(
        "lettersonly",
        function (value, element) {
          return this.optional(element) || /^[a-zA-ZА-Яа-я\s]+$/i.test(value);
        },
        " "
      );

  });


 

  

  