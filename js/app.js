
// enter field for task
document.body.onload = addElement;

function addElement () { 
  // create a new div element 
  // and give it some content 
  var newTimer = document.createElement("div"); 
  var newContent = document.createTextNode("Here's the timer"); 
  newDiv.appendChild(newContent); //add the text node to the newly created div. 

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("countdown"); 
  document.body.insertBefore(newTimer, currentDiv); 
}
// var body = document.body;
// var newParagraph = document.createElement("p");
// var pleaseEnableParagraph = document.querySelector("#new-task");
// document.createElement(pleaseEnableParagraph);

// var createNewFlowTask = function(taskString) {
//   var flowTask = document.createElement("li");
//   var flowInput = document.createElement("input");
//   var label = document.createElement("label");
//   var startButton = document.createElement("button");
//   var stopButton = document.createElement("button");
//   var resetButton = document.createElement("button");
//     var resetButton = document.remo ("button");
// }
// add new document element repeating the task AND
// start timer
// on expiration howl

//start timer
var seconds = 60*25;
    countdownTimer;

function secondPassed() {
    var minutes = Math.round((seconds - 30)/60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;  
    }
    document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds;
    if (seconds == 0) {
        clearInterval(countdownTimer);
        document.getElementById('countdown').innerHTML = alert("You're done");
    } else {
        seconds--;
    }
}
 
var countdownTimer = setInterval('secondPassed()', 1000);
//end timer

// // // planning the flow timer app:

// // var taskInput = document.getElementById("new-pomodoro");

// // // text input field for user to enter current flow category
// // var currentFlowCategory = function(categoryString){
// //   //New Task List Item
// //   var listItem = document.createElement("li");
// //   return listItem;
// // }

// // text input field for user to enter specifics of the task - plan the work
//   // add timer button to start the current flow category
// // scheduler - input a new flow category
// // scheduler - add flow category to completed once timer expires
// // once timer expires alert the customer
// // add a text entry field for the customer to enter their reflections
// // append data to table: date, time, duration, category, reflections
// //Problem: User interaction doesn't provide desired results.
// //Solution: Add interactivty so the user can manage daily tasks.

// var taskInput = document.getElementById("new-task"); //new-task
// var addButton = document.getElementsByTagName("button")[0]; //first button
// var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
// var completedTasksHolder= document.getElementById("completed-tasks"); //completed-tasks

// //New Task List Item
// var createNewTaskElement = function(taskString) {
//   //Create List Item
//   var listItem = document.createElement("li");

//   //input (checkbox)
//   var checkBox = document.createElement("input"); // checkbox
//   //label
//   var label = document.createElement("label");
//   //input (text)
//   var editInput = document.createElement("input"); // text
//   //button.edit
//   var editButton = document.createElement("button");
//   //button.delete
//   var deleteButton = document.createElement("button");
  
//   //Each element needs modifying
  
//   checkBox.type = "checkbox";
//   editInput.type = "text";
  
//   editButton.innerText = "Edit";
//   editButton.className = "edit";
//   deleteButton.innerText = "Delete";
//   deleteButton.className = "delete";
  
//   label.innerText = taskString;
  
//   //Each element needs appending
//   listItem.appendChild(checkBox);
//   listItem.appendChild(label);
//   listItem.appendChild(editInput);
//   listItem.appendChild(editButton);
//   listItem.appendChild(deleteButton);

//   return listItem;
// }

// //Add a new task
// var addTask = function() {
//   console.log("Add task...");
//   //Create a new list item with the text from #new-task:
//   var listItem = createNewTaskElement(taskInput.value);
//   //Append listItem to incompleteTasksHolder
//   incompleteTasksHolder.appendChild(listItem);
//   bindTaskEvents(listItem, taskCompleted);
  
//   taskInput.value = "";
// }

// //Edit an existing task
// var editTask = function() {
//   console.log("Edit task...");

//   var listItem = this.parentNode;
  
//   var editInput = listItem.querySelector("input[type=text");
//   var label = listItem.querySelector("label");
  
//   var containsClass = listItem.classList.contains("editMode");
  
//   //if the class of the parent is .editMode
//   if(containsClass) {
//     //Switch from .editMode
//     //label text become the input's value
//     label.innerText = editInput.value;
//   } else {
//     //Switch to .editMode
//     //input value becomes the label's text
//     editInput.value = label.innerText;
//   }
  
//   //Toggle .editMode on the list item
//   listItem.classList.toggle("editMode");
  
// }

// //Delete an existing task
// var deleteTask = function() {
//   console.log("Delete task...");
//   var listItem = this.parentNode;
//   var ul = listItem.parentNode;
  
//   //Remove the parent list item from the ul
//   ul.removeChild(listItem);
// }

// //Mark a task as complete
// var taskCompleted = function() {
//   console.log("Task complete...");
//   //Append the task list item to the #completed-tasks
//   var listItem = this.parentNode;
//   completedTasksHolder.appendChild(listItem);
//   bindTaskEvents(listItem, taskIncomplete);
// }

// //Mark a task as incomplete
// var taskIncomplete = function() {
//   console.log("Task incomplete...");
//   //Append the task list item to the #incomplete-tasks
//   var listItem = this.parentNode;
//   incompleteTasksHolder.appendChild(listItem);
//   bindTaskEvents(listItem, taskCompleted);
// }

// var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
//   console.log("Bind list item events");
//   //select taskListItem's children
//   var checkBox = taskListItem.querySelector("input[type=checkbox]");
//   var editButton = taskListItem.querySelector("button.edit");
//   var deleteButton = taskListItem.querySelector("button.delete");
  
//   //bind editTask to edit button
//   editButton.onclick = editTask;
  
//   //bind deleteTask to delete button
//   deleteButton.onclick = deleteTask;
  
//   //bind checkBoxEventHandler to checkbox
//   checkBox.onchange = checkBoxEventHandler;
// }

// var ajaxRequest = function() {
//   console.log("AJAX request");
// }

// //Set the click handler to the addTask function
// addButton.addEventListener("click", addTask);
// addButton.addEventListener("click", ajaxRequest);

// //cycle over incompleteTasksHolder ul list items
// for(var i = 0; i < incompleteTasksHolder.children.length; i++) {
//   //bind events to list item's children (taskCompleted)
//   bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
// }

// //cycle over completedTasksHolder ul list items
// for(var i = 0; i < completedTasksHolder.children.length; i++) {
//   //bind events to list item's children (taskIncomplete)
//   bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
// }





//Based on TreeHouse ToDo App:

//Problem: User interaction doesn't provide desired results.
//Solution: Add interactivty so the user can manage daily tasks.

// var taskInput = document.getElementById("new-task"); //new-task
// var addButton = document.getElementsByTagName("button")[0]; //first button
// var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
// var completedTasksHolder= document.getElementById("completed-tasks"); //completed-tasks

// //New Task List Item
// var createNewTaskElement = function(taskString) {
//   //Create List Item
//   var listItem = document.createElement();

//   //input (checkbox)
//   var checkBox = document.createElement("input"); // checkbox
//   //label
//   var label = document.createElement("label");
//   //input (text)
//   var editInput = document.createElement("input"); // text
//   //button.edit
//   var editButton = document.createElement("button");
//   //button.delete
//   var deleteButton = document.createElement("button");
  
//   //Each element needs modifying
  
//   checkBox.type = "checkbox";
//   editInput.type = "text";
  
//   editButton.innerText = "Edit";
//   editButton.className = "edit";
//   deleteButton.innerText = "Delete";
//   deleteButton.className = "delete";
  
//   label.innerText = taskString;
  
//   //Each element needs appending
//   listItem.appendChild(checkBox);
//   listItem.appendChild(label);
//   listItem.appendChild(editInput);
//   listItem.appendChild(editButton);
//   listItem.appendChild(deleteButton);

//   return listItem;
// }

// //Add a new task
// var addTask = function() {
//   console.log("Add task...");
//   //Create a new list item with the text from #new-task:
//   var listItem = createNewTaskElement(taskInput.value);
//   //Append listItem to incompleteTasksHolder
//   incompleteTasksHolder.appendChild(listItem);
//   bindTaskEvents(listItem, taskCompleted);
  
//   taskInput.value = "";
// }

// //Edit an existing task
// var editTask = function() {
//   console.log("Edit task...");

//   var listItem = this.parentNode;
  
//   var editInput = listItem.querySelector("input[type=text");
//   var label = listItem.querySelector("label");
  
//   var containsClass = listItem.classList.contains("editMode");
  
//   //if the class of the parent is .editMode
//   if(containsClass) {
//     //Switch from .editMode
//     //label text become the input's value
//     label.innerText = editInput.value;
//   } else {
//     //Switch to .editMode
//     //input value becomes the label's text
//     editInput.value = label.innerText;
//   }
  
//   //Toggle .editMode on the list item
//   listItem.classList.toggle("editMode");
  
// }

// //Delete an existing task
// var deleteTask = function() {
//   console.log("Delete task...");
//   var listItem = this.parentNode;
//   var ul = listItem.parentNode;
  
//   //Remove the parent list item from the ul
//   ul.removeChild(listItem);
// }

// //Mark a task as complete
// var taskCompleted = function() {
//   console.log("Task complete...");
//   //Append the task list item to the #completed-tasks
//   var listItem = this.parentNode;
//   completedTasksHolder.appendChild(listItem);
//   bindTaskEvents(listItem, taskIncomplete);
// }

// //Mark a task as incomplete
// var taskIncomplete = function() {
//   console.log("Task incomplete...");
//   //Append the task list item to the #incomplete-tasks
//   var listItem = this.parentNode;
//   incompleteTasksHolder.appendChild(listItem);
//   bindTaskEvents(listItem, taskCompleted);
// }

// var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
//   console.log("Bind list item events");
//   //select taskListItem's children
//   var checkBox = taskListItem.querySelector("input[type=checkbox]");
//   var editButton = taskListItem.querySelector("button.edit");
//   var deleteButton = taskListItem.querySelector("button.delete");
  
//   //bind editTask to edit button
//   editButton.onclick = editTask;
  
//   //bind deleteTask to delete button
//   deleteButton.onclick = deleteTask;
  
//   //bind checkBoxEventHandler to checkbox
//   checkBox.onchange = checkBoxEventHandler;
// }

// var ajaxRequest = function() {
//   console.log("AJAX request");
// }

// //Set the click handler to the addTask function
// addButton.addEventListener("click", addTask);
// addButton.addEventListener("click", ajaxRequest);

// //cycle over incompleteTasksHolder ul list items
// for(var i = 0; i < incompleteTasksHolder.children.length; i++) {
//   //bind events to list item's children (taskCompleted)
//   bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
// }

// //cycle over completedTasksHolder ul list items
// for(var i = 0; i < completedTasksHolder.children.length; i++) {
//   //bind events to list item's children (taskIncomplete)
//   bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
// }



// // // enter category
// // // if button is submitted reval countdown timer
// // // in modal countdown timer


// // var $category = $("#category");
// // var $button = $("#button");
// // // var $confirmPassword = $("#confirm_password");

// // //Hide hints
// // $("#submit").hide();

// // if $category.val().length > 3 {
// //   enableSubmitEvent();
// // };

// // function isCategoryValid() {
// //   return $category.val().length > 8;
// // }

// // function arePasswordsMatching() {
// //   return $password.val() === $confirmPassword.val();
// // }

// // function canSubmit() {
// //   return isCategoryValid();
// //   enableSubmitEvent();
// // }

// // function passwordEvent(){
// //     //Find out if password is valid  
// //     if(isPasswordValid()) {
// //       //Hide hint if valid
// //       $password.next().hide();
// //     } else {
// //       //else show hint
// //       $password.next().show();
// //     }
// // }

// // function confirmPasswordEvent() {
// //   //Find out if password and confirmation match
// //   if(arePasswordsMatching()) {
// //     //Hide hint if match
// //     $confirmPassword.next().hide();
// //   } else {
// //     //else show hint 
// //     $confirmPassword.next().show();
// //   }
// // }


// // function enableSubmitEvent() {
// //   $("#submit").prop("disabled", !canSubmit());
// // }

// //When event happens on password input
// // $password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

// // //When event happens on confirmation input
// // $confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);



// // $('#clock').countdown("2020/10/10", function(event) {
// // 2   var totalHours = event.offset.totalDays * 24 + event.offset.hours;
// // 3   $(this).html(event.strftime(totalHours + ' hr %M min %S sec'));
// // 4 });

// // // set minutes
// // var mins = 25;
 
// // // calculate the seconds (don't change this! unless time progresses at a different speed for you...)
// // var secs = mins * 60;
// // function countdown() {
// //   setTimeout('Decrement()',1000);
// // }
// // function Decrement() {
// //   if (document.getElementById) {
// //     minutes = document.getElementById("minutes");
// //     seconds = document.getElementById("seconds");
// //     // if less than a minute remaining
// //     if (seconds < 59) {
// //       seconds.value = secs;
// //     } else {
// //       minutes.value = getminutes();
// //       seconds.value = getseconds();
// //     }
// //     secs--;
// //     setTimeout('Decrement()',1000);
// //   }
// // }
// // function getminutes() {
// //   // minutes is seconds divided by 60, rounded down
// //   mins = Math.floor(secs / 60);
// //   return mins;
// // }
// // function getseconds() {
// //   // take mins remaining (as seconds) away from total seconds remaining
// //   return secs-Math.round(mins *60);
// // }

// // var Example2 = new (function() {
// //     var $countdown,
// //         $form, // Form used to change the countdown time
// //         incrementTime = 70,
// //         currentTime = 30000,
// //         updateTimer = function() {
// //             $countdown.html(formatTime(currentTime));
// //             if (currentTime == 0) {
// //                 Example2.Timer.stop();
// //                 timerComplete();
// //                 Example2.resetCountdown();
// //                 return;
// //             }
// //             currentTime -= incrementTime / 10;
// //             if (currentTime < 0) currentTime = 0;
// //         },
// //         timerComplete = function() {
// //             alert('Example 2: Countdown timer complete!');
// //         },
// //         init = function() {
// //             $countdown = $('#countdown');
// //             Example2.Timer = $.timer(updateTimer, incrementTime, true);
// //             $form = $('#example2form');
// //             $form.bind('submit', function() {
// //                 Example2.resetCountdown();
// //                 return false;
// //             });
// //         };
// //     this.resetCountdown = function() {
// //         var newTime = parseInt($form.find('input[type=text]').val()) * 100;
// //         if (newTime > 0) {currentTime = newTime;}
// //         this.Timer.stop().once();
// //     };
// //     $(init);
// // });

// // 1: button copy should say let's flow
// // 2: when button pressed:
//     // 2.1: show overlay containing:
//     // 2.2: time set, category input
// // 3: timer should activate
// // 4: once timer is completed:
//       // 4.0: save data to server
//       // 4.1: overlay returns
//       // 4.2: form for inputting notes
//       // 4.3: save notes to server
// // $("myModal").hide();

// // alert("js success");
// // $(".spoiler span").hide();
// // // //2, Add a button
// // $(".spoiler").append("<button>Reveal Spoiler!</button>");
// // // //3, When button pressed
// // $("button").click(function(){
// // //   //3.1, Show spoiler next to the button clicked
// //   $(this).prev().show();


// // $(".flowButton span").hide();

// // $(".flowButton").append("btn-success btn-lg">Lets Flow!");