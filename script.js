const textQuote = document.getElementById("text")
const textQuoteAuthor = document.getElementById("author")
const getQuote = document.getElementById("new-quote")
const iQuote = document.getElementById("quote")
const tweetQuote = document.getElementById("tweet-quote")

 window.onload = init
function init(){
    console.log("JS Loaded")
    generateQuote(quoteBank)
}

const quoteBank = [
    {
      quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      author: "Martin Fowler"
    },
    {
      quote: "Make it work, make it right, make it fast.",
      author: "Kent Beck"
    },
    {
      quote: "Before software can be reusable it first has to be usable.",
      author: "Ralph Johnson"
    },
    {
      quote: "Simplicity is the soul of efficiency.",
      author: "Austin Freeman"
    },
    {
      quote: "When to use iterative development? You should use iterative development only on projects that you want to succeed.",
      author: "Martin Fowler"
    },
    {
      quote: "Optimism is an occupational hazard of programming: feedback is the treatment.",
      author: "Kent Beck"
    },
    {
      quote: "Fix the cause, not the symptom.",
      author: "Steve Maguire"
    },
    {
      quote: "Code is like humor. When you have to explain it, it’s bad.",
      author: "Cory House"
    },
    {
      quote: "Ruby is rubbish! PHP is phpantastic!",
      author: "Nikita Popov"
    },
    {
      quote: "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.",
      author: "Antoine de Saint-Exupery"
    },
    {
      quote: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.",
      author: "Dan Salomon"
    },
    {
      quote: "Knowledge is power.",
      author: "Francis Bacon"
    },
    {
      quote: "Java is to JavaScript what car is to Carpet.",
      author: "Chris Heilmann"
    },
    {
      quote: "In order to be irreplaceable, one must always be different.",
      author: "Coco Chanel"
    },
    {
      quote: "Experience is the name everyone gives to their mistakes.",
      author: "Oscar Wilde"
    },
    {
      quote: "First, solve the problem. Then, write the code.",
      author: "John Johnson"
    },
    {
        quote: "Programming isn't about what you know; it's about what you can figure out.",
        author: "Chris Pine"
    },
    {
      quote: "The only way to learn a new programming language is by writing programs in it.",
      author: "Dennis Ritchie"
    },
    {
        quote: "Sometimes it's better to leave something alone, to pause, and that's very true of programming.",
        author: "Joyce Wheeler"
    },
    {
      quote: "In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them.",
      author: "Andrew Hunt"
    },
    {
      quote: "Remember that code is really the language in which we ultimately express the requirements. We may create languages that are closer to the requirements. We may create tools that help us parse and assemble those requirements into formal structures. But we will never eliminate necessary precision—so there will always be code.",
      author: "Robert C. Martin"
    },
    {
        quote: "The computer programmer is a creator of universes for which he alone is the lawgiver. No playwright, no stage director, no emperor, however powerful, has ever exercised such absolute authority to arrange a stage or field of battle and to command such unswervingly dutiful actors or troops.",
        author: "Joseph Weizenbaum"
    },
    {
      quote: "The best programs are written so that computing machines can perform them quickly and so that human beings can understand them clearly. A programmer is ideally an essayist who works with traditional aesthetic and literary forms as well as mathematical concepts, to communicate the way that an algorithm works and to convince a reader that the results will be correct.",
      author: "Donald E. Knuth, Selected Papers on Computer Science"
    },
    {
        quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        author: "Martin Fowler"
    },
    {
      quote: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live",
      author: "John Woods"
    }
]

const generateQuote = ((arr) => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    let quoteSize = arr.length 
    let randomIndex = Math.floor(Math.random() * quoteSize)
    let getRandomQuote = arr[randomIndex]

    
    tweetQuote.style.backgroundColor = "#" + randomColor;
    getQuote.style.backgroundColor = "#" + randomColor;
    iQuote.style.color = "#" + randomColor;
    textQuote.style.color = "#" + randomColor;
    textQuoteAuthor.style.color = "#" + randomColor;
    document.body.style.backgroundColor = "#" + randomColor;
    textQuote.innerText = getRandomQuote.quote
    textQuoteAuthor.innerHTML = `- ` + getRandomQuote.author
   return arr
})


getQuote.addEventListener('click', () => {
    generateQuote(quoteBank)
});

