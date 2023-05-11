const quotes = [
    {
        quote: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.", 
        author: "- Ayn Rand",
    },
    {
        quote: "The rich invest in time, the poor invest in money.",
        author: " - Warren Buffett",
    },
    {
        quote:"The only way to do great work is to love what you do.",
        author: " - Steve Jobs",
    },

    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "- Franklin D. Roosevelt",
    },
    {
        quote: "Don't let yesterday take up too much of today.",
        author: " - Will Rogers",
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: " - Sam Levenson",
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: " - Theodore Roosevelt",
    },
    {
        quote: "You miss 100% of the shots you don't take.",
        author: " - Wayne Gretzky",
    },
    {
        quote: "Don't be afraid to give up the good to go for the great.",
        author: " - John D. Rockefeller",
    },
    {
        quote: "A person who never made a mistake never tried anything new.",
        author: " - Albert Einstein",
    },
    {
        quote: "You don't have to be great to start, but you have to start to be great.",
        author: " - Zig Ziglar",
    },    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: " - Winston Churchill",
    },    {
        quote: "The only place where success comes before work is in the dictionary.",
        author: " - Vidal Sassoon",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
