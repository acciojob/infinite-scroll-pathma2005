let itemCount = 0;
const list = document.getElementById("infi-list");

function addItems(num) {
  for (let i = 0; i < num; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${++itemCount}`;
    list.appendChild(li);
  }
}

// Add 10 items at the start
addItems(10);

// Listen for scroll events on the list (not window)
list.addEventListener("scroll", () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems(2); // Add 2 new items when scrolled to bottom
  }
});


