const searsh = document.querySelector("#search");
/* const clearBtn = document.querySelector("#btn");
 */
const itemsContainer = document.querySelector("#itemsContainer");
/* searsh */

searsh.addEventListener("input", searchevent);

/* filter items */

function searchevent(e) {
  /*   console.log(e.target.value);
   */
  const text = e.target.value.toLowerCase();
  /* get the items */
  const items = itemsContainer.querySelectorAll(".box");
  /* convert items to array */
  Array.from(items).forEach(function (item) {
    const itemListName = item.children[1].textContent;
    if (itemListName.toLocaleLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
