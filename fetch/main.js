const userCard = (title) => {
  const body = document.body;

  // WRAPPER
  const wrapper = document.createElement("div");
  wrapper.setAttribute("class", "wrapper");

  //IMAGE
  const image = document.createElement("img");
  image.setAttribute("src", "./messi.jpeg");

  // H1
  const h1el = document.createElement("h1");
  h1el.innerText = title;
  //UL
  const ulEl = document.createElement("ul");

  //BUTTON
  const button = document.createElement("button");
  button.innerText = "SHOW";

  //LI
  const liEl = ["Foot :  Left", "World cup : 1", "Golden ball:8"];
  liEl.forEach((el) => {
    const li = document.createElement("li");
    li.innerText = el;
    ulEl.append(li);
  });

  wrapper.append(image, h1el, ulEl);
  body.append(wrapper, button);
  return wrapper;
};
userCard();

async function fetchData() {
  try {
    const rawData = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!rawData.ok) {
      throw Error(`WRONG REQUEST`);
    }
    const data = await rawData.json();

    console.log(data);
    data.forEach((el) => {
      userCard(el.body);
    });
  } catch (error) {
    console.error(error.message);
  }
}

fetchData();
