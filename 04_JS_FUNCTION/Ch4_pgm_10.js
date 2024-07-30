var movie1;
var showMovieInfo;
var movie;
var movie2;

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

showMovieInfo = function () {
  console.log("Movie information for " + movie.title);
  console.log("------------------------------");
  console.log("Actors: " + movie.actors);
  console.log("Directors: " + movie.directors);
  console.log("------------------------------");
};

movie = movie1;

movie2 = {
  title:"RRR",
  actor:"Ram charan",
  director:"raj mouzhi",
};
movie = movie2;

showMovieInfo();
