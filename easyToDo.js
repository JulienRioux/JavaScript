// A simple toDoList

// create a variable that show to the uset what they can do
var showActions = "What do you want to do now? (new[n], delete[d], list[l], quit[q])";
// Ask for add, delete, show or quit
var action = prompt(showActions);
// Create an empty list
var toDoList = [];

// create a function to consol log the list with the index
function showItems() {
    console.log("************");
    toDoList.forEach(function (task, i) {
        console.log(i + ": " + task);
    })
    console.log("************");
}

// this function add items into the toDoList
function addToDo() {
     // add the item that the user want and ask what he want to do after
    var newItem = prompt("What do you want to add?");
    toDoList.push(newItem);
    action = prompt("What's next?\n" + showActions);
}

// this function delete items into the toDoList
function delToDo() {
    var delIndex = prompt("What element index's do you want to delete?");

    // check if the item is in the toDoList first
    if (delIndex > toDoList.length-1 || delIndex < 0 || delIndex.isNaN == true) {
        // if not ask the user what he want to do
        action = prompt("The item index is'nt in the to do list\n" + showActions);
    }

    // if there is the wanted deleted item:
    else {
        // create a variable that is the deleted item
        var delItem = toDoList[delIndex];

        // delete the item with splice(index, howManyToDeleteAfter);
        toDoList.splice(delIndex,1);
         // show the deleted item and ask the user what he want to do
        console.log(">> " + delItem + " has been deleted.")
        action = prompt(showActions);
    }
}

//
//
// ******* This is the main piece of the to do list  *******
//
//

// while you doesnt want to quit
while (action != "q") {
    // create a variable that will represent the toDoList items

    // if want to add new one
    if (action === "n") {
        addToDo();
    }

    // if you want to delete something
    else if (action === "d") {
        delToDo();
    }

    // show the toDoList and ask the user what he want to do
    else if (action === "l") {
        showItems();
        action = prompt(showActions);
    }

    // Tell the user if his input is not an accepted one (q, n, d or l)
    else {
        action = prompt("Sorry I don't understand"+ showActions);
    }
}



// Say goodbye message when the user want to quit
showItems();
console.log("Goodbye!")
