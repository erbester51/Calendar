// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

 // Display the current date and time.
var currentDay = dayjs().format('DD/MM/YYYY');
$('#currentDay').text(currentDay);

// $(function () {

  
  // var currentTime = dayjs().hour();
   
  $(".time-block").each(function(){
    var pastHour = parseInt($(this).attr("id"));
    var currentTime = dayjs();

    if(pastHour < currentTime){
      $(this).addClass("past");
    }
    else if(pastHour === currentTime){
      $(this).addClass("present");
    }
    else(pastHour > currentTime);{
      $(this).addClass("future");
    }
  });


// });

// $(function () {
//   // TODO: Add a listener for click events on the save button. This code should
//   // use the id in the containing time-block as a key to save the user input in
//   // local storage. HINT: What does `this` reference in the click listener
//   // function? How can DOM traversal be used to get the "hour-x" id of the
//   // time-block containing the button that was clicked? How might the id be
//   // useful when saving the description in local storage?
//   //

    $(".saveBtn").on("click", function(){
      var pastHour = $(this).siblings(".hour").text().trim();
      var text = $(this).siblings(".description").val().trim();
      localStorage.setItem(Hour, text);
    });

    $(".description").each(function(){
      var pastHour = $(this).siblings(".hour").text().trim();
      var savedInput = localStorage.getItem(pastHour);
      if (savedInput !== null){
        $(this).val(savedInput);
      }
    });

//   // TODO: Add code to apply the past, present, or future class to each time
//   // block by comparing the id to the current hour. HINTS: How can the id
//   // attribute of each time-block be used to conditionally add or remove the
//   // past, present, and future classes? How can Day.js be used to get the
//   // current hour in 24-hour time?
//   //

//   $("#hour-09").each(function(){
//     var hour = parseInt($(this).text());
//     var currentTime = dayjs().hour();
//   }
//     if(hour < currentTime){
//       $(this).addClass("past"))
//     };
  


//   // });
//     // $(".time-block").each(function(){
//     //   var currentTime = dayjs().hour()

//     //   if(hour < currentTime){
//     //     $(this).addClass(".past");
//     //   }
//     //   else if(hour === currentTime){
//     //     $(this).addClass(".present");
//     //   }
//     //   else(hour > currentTime);{
//     //     $(this).addClass(".future");
//     //   }
//     // });

//   // TODO: Add code to get any user input that was saved in localStorage and set
//   // the values of the corresponding textarea elements. HINT: How can the id
//   // attribute of each time-block be used to do this?
//   //
    // $(".time-block").each(function(){
    //   var timeBlockEl = $(this).attr(".id");
    //   var savedInput = localStorage.getItem(timeBlockEl);
    //   if (savedInput !== null){
    //     $(this).children(".description").val(savedInput);
    //   }
    // });

//   // TODO: Add code to display the current date in the header of the page.
//   // $('#currentDay').text(dayjs().format('DD/MM/YYYY'));
// });
