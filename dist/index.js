const app = document.querySelector(".app");
const btn = document.createElement("button");

const baseURL = process.env.BASE_URL || "http://localhost:8888/";

const fetchData1 = async () => {
  const res = await fetch(baseURL);
  const data = await res.json();
  const h1 = document.createElement("h1");
  h1.textContent = data.msg;
  app.append(h1);
};

const fetchData2 = async () => {
  const res = await fetch(`${baseURL}/ali`);
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
