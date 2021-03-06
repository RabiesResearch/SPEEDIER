// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "inline-block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Add a class for linking to a specific tab
$(document).ready(function(){
    $(".moveTo").click(function(){
        var elemId = $(this).attr('href')
        $(elemId).find('a:first').click();
    });
});