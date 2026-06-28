
const item = document.querySelectorAll(".item");
console.log(`Name of categories: ${item.length}`);

const res = (arr) => {
    return arr.forEach(el => {
      const title = el.querySelector("h2").textContent;
      const categories= el.querySelectorAll("li").length;
      console.log(`Category: ${title}`);
      console.log(`Elements: ${categories}`);
    })
}

res(item);
