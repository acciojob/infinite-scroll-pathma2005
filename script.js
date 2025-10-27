const list = document.getElementById("infi-list")
function addItems(num){
	for(let i=0;i<num;i++){
	    const li = document.createElement("li");
			li.textContent=`item${++itemCount}`;
	  list.appendChild(li);
	}
}
addItems(10);
window.addEventListener("scroll",()=>{
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    addItems(2);
  }
});

