const quotes = [
    {
        quote: "The only person you should try to be better than is the person you were yesterday.",
        author: "Anonymous"
    },
    {
        quote: "Life's too mysterious to take too serious.",
        author: "Mary Engelbreit"
    },
    {
        quote: "No one can make you feel inferior without your consent.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "You can't go around building a better world for people. Only people can build a better world for people. Otherwise it's just a cage.",
        author: "Terry Pratchett, Witches Abroad"
    },
    {
        quote: "If you want to go fast, go alone. If you want to go far, go together.",
        author: "African proverb"
    },
    {
        quote: "I can be changed by what happens to me but I refuse to be reduced by it.",
        author: "Maya Angelou"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "T. Roosevelt"
    },
    {
        quote: "There is no elevator to success — you have to take the stairs.",
        author: "Anonymous"
    },
    {
        quote: "Plant your garden and decorate your own soul, instead of waiting for someone to bring you flowers.",
        author: "Jose Luis Borges"
    },
    {
        quote: "Do what you feel in your heart to be right, for you'll be criticized anyway.",
        author: "Eleanor Roosevelt."
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;