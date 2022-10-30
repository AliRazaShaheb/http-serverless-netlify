const app = document.querySelector(".app");
const btn = document.createElement("button");

const fetchData1 = async () => {
  const res = await fetch("http://localhost:8888/");
  const data = await res.json();
  const h1 = document.createElement("h1");
  h1.textContent = data.msg;
  app.append(h1);
};

const fetchData2 = async () => {
  const res = await fetch("http://localhost:8888/ali");
  const data = await res.json();
  const h1 = document.createElement("h1");
  h1.textContent = data.msg;
  app.append(h1);
};

fetchData1();
// btn.append("fetch ali");
btn.textContent = "fetch";
document.body.appendChild(btn);
btn.onclick = fetchData2;
btn.style.cursor = "pointer";
