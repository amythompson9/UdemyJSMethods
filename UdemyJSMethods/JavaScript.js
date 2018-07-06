var comments = {};

comments.data = ["Good Job!", "Bye", "Lame..."]

function print(arr) {
    arr.forEach(function (el) {
        console.log(el);
    });
}

print(comments.data);

//OR!

comments.print = function() {
    this.data.forEach(function (el) {
        console.log(el);
    });
}

//the word this refers to the object comments
