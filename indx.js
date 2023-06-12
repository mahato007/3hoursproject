function savetoLocalStorage(event) {
  event.preventDefault();
  let choose = event.target.chooseexpenseamount.value;
  console.log(choose);
  const choose1 = event.target.choosedescription.value;
  const choose2 = event.target.chooseacategory.value;
  const obj = {
    choose,
    choose1,
    choose2,
  };
  const z = localStorage.setItem(obj.choose1, JSON.stringify(obj));
  showonScreen(obj);
}
function showonScreen(obj) {
  const list = document.getElementById("listofitem");
  const childEl = document.createElement("li");
  childEl.textContent = obj.choose + "-" + obj.choose1 + "-" + obj.choose2;
  //   list.appendChild(childEl);
  const deletebtn = document.createElement("input");
  deletebtn.type = "button";
  deletebtn.value = "Delete Expenses";
  deletebtn.onclick = () => {
    list.removeChild(childEl);
  };
  childEl.appendChild(deletebtn);
  //   list.appendChild(childEl);
  //   let forEdit = this.parentElement;
  const editbtn = document.createElement("input");
  editbtn.type = "button";
  editbtn.value = "Edit Expenses";

  editbtn.onclick = () => {
    localStorage.removeItem(obj.choose1);
    // list.removeChild(childEl);
  };

  childEl.appendChild(editbtn);
  list.appendChild(childEl);
}
