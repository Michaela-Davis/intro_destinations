//business logic
function Destination(place, timeOfYear, landmarks, notes) {
  this.place = place;
  this.timeOfYear = timeOfYear;
  this.landmarks = landmarks;
  this.notes = notes;
}

Destination.prototype.combined = function() {
  return this.place + " " + this.timeOfYear;
}

//user logic
$(document).ready(function() {
  $("form#destinations").submit(function(event) {
    event.preventDefault();

    var inputtedPlace = $("input#place").val();
    var inputtedTimeOfYear = $("input#timeOfYear").val();
    var inputtedLandmarks = $("input#landmarks").val();
    var inputtedNotes = $("input#notes").val();

    var newDestination = new Destination (inputtedPlace, inputtedTimeOfYear, inputtedLandmarks, inputtedNotes);

    $("ul#destinationsDisplay").append("<li><span class='destinations'>" + newDestination.combined() + "</span></li>");

    $(".destinations").last().click(function() {
      $("#showDestination").show();
      $("#showDestination h2").text(newDestination.place);
      $(".place").text(newDestination.place);
      $(".timeOfYear").text(newDestination.timeOfYear);
      $(".landmarks").text(newDestination.landmarks);
      $(".notes").text(newDestination.notes);
    });

  });
});
