function collect_ratings () {

let ratings = {
    count :0,
    sum :0,
    average :0 
}

let rating = 0

const elements = document.querySelectorAll("rating")

elements.forEach(element => {
 return rating = element.id.replace('star ','').parseInt()
});

}