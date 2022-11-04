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
let scrollpos = window.scrollY

const header = document.querySelector(".header-fixed")
const scrollChange = 80;

const add_class_on_scroll = () => header.classList.add("bg-white")
const remove_class_on_scroll = () => header.classList.remove("bg-white")

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) { 
    add_class_on_scroll() 
  }  else { 
    remove_class_on_scroll() 
  }
  
})



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

// jQuery 
$("#telephone").intlTelInput({
  // whether or not to allow the dropdown
allowDropdown: true,

// if there is just a dial code in the input: remove it on blur, and re-add it on focus
autoHideDialCode: true,

// add a placeholder in the input with an example number for the selected country
autoPlaceholder: "polite",

// modify the auto placeholder
customPlaceholder: null,

// append menu to specified element
dropdownContainer: null,

// don't display these countries
excludeCountries: [],

// format the input value during initialisation and on setNumber
formatOnDisplay: true,

// geoIp lookup function
geoIpLookup: null,

// inject a hidden input with this name, and on submit, populate it with the result of getNumber
hiddenInput: "",

// initial country
initialCountry: "",

// localized country names e.g. { 'de': 'Deutschland' }
localizedCountries: null,

// don't insert international dial codes
nationalMode: true,

// display only these countries
onlyCountries: [],

// number type to use for placeholders
placeholderNumberType: "MOBILE",

// the countries at the top of the list. defaults to united states and united kingdom
preferredCountries: [ "us", "gb" ],

// display the country dial code next to the selected flag so it's not part of the typed number
separateDialCode: false,

// specify the path to the libphonenumber script to enable validation/formatting
utilsScript: ""
});


 

  

  