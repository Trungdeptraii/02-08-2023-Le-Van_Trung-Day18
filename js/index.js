const lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500$";
const strSplit = lorem.split(" ");
let html = "";
strSplit.map((el) => {
  html = html + `<span>${el}</span> `;
});
const des = document.querySelector(".des");
des.innerHTML = html;
const listChild = Array.from(des.children);

setInterval(() => {
  active();
}, 500);
let i = 0;
function active() {
  if (i <= listChild.length - 1) {
    listChild[i].style.color = "red";
    if (i >= 1) {
      listChild[i - 1].style.color = "initial";
    }
    i++;
  } else {
    listChild[i - 1].style.color = "initial";
    i = 0;
  }
}
