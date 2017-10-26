
document.addEventListener("DOMContentLoaded", function(){

    $(".change-devoured").on("click", function(event) {
  
      var id = $(this).data("id");
      var devoured = $(this).data("devoured");
  
      var newDevouredState = {
        devoured: !devoured
      };

      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed devoured to", devoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  

    $(".btn_delete").on("click", function(event) {
      var id = $(this).data("id");

      $.ajax("/api/burgers/"+ id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger");
          location.reload();
        }
      );
    });
  

    $(".create-form").on("submit", function(event) {

      event.preventDefault();
  

  
      var newBurger = {
        name: $("#newBurger").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim(), 
        image: $("#burgerImage").val().trim()
      };
  

      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  

  });