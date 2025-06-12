// Get the form element from the page
const form = document.querySelector('#form');
// Get the input element where the user types a new item
const input = document.querySelector('#item-input');
// Get the list element where items will be added
const list = document.querySelector('#list');

// Listen for the form's submit event
form.addEventListener('submit', function(event) {
  // Prevent the page from reloading
  event.preventDefault();

  // Get the text the user typed
  const itemText = input.value;

  // Create a new list item element
  const li = document.createElement('li');
  // Set the text of the new list item
  li.textContent = itemText;

  // Create a delete button for this item
  const deleteBtn = document.createElement('button');
  // Add a class for styling
  deleteBtn.className = 'delete-btn';
  // Set the button's inner HTML to a trash icon
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
  // Add a click event to remove the item
  deleteBtn.addEventListener('click', function() {
    // Remove this list item from the list
    list.removeChild(li);
  });

  // Add the delete button to the list item
  li.appendChild(deleteBtn);

  // Add the new list item to the list
  list.appendChild(li);

  // Clear the input box for the next item
  input.value = '';
});
