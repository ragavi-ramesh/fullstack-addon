var showMovieInfo;

showMovieInfo = function () {
  console.log("Movie information for " + movie.title);
  console.log("------------------------------");
  console.log("Actors: " + movie.actors);
  console.log("Directors: " + movie.directors);
  console.log("------------------------------");
};


var movie={
    title:"RRR",
    actors:"Ram Charan",
    director:"Raj mouzhi"
};

showMovieInfo();