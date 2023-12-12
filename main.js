var quates = [
    {
        quate: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    }
    ,
    {
        quate: "You only live once, but if you do it right, once is enough.",
        author: "Mae West"
    }
    ,
    {
        quate: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi"
    }
    ,
    {
        quate: "If you tell the truth, you don't have to remember anything.",
        author: "Mark Twain"
    }
]

function getQuates() {
    var randomQuate = Math.floor(Math.random() * quates.length)
    document.getElementById("quote").innerHTML = quates[randomQuate].quate;
    document.getElementById("Author").innerHTML = quates[randomQuate].author;

}