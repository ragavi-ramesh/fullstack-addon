const firstParagraph = document.querySelector("p");
console.log(firstParagraph);

const para1 = document.querySelector("#para1");
const para2 = document.querySelector("#para2");
const para3 = document.querySelector("#para3");
const para4 = document.querySelector("#para4");

console.log(para1, para2, para3, para4);

const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

paragraphs.forEach(paragraph => {
    console.log(paragraph.textContent);
});

