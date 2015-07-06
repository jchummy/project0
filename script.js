$(function() {



 // listen for the click on the 'Post a Note' button
$("#newNoteButton").on('click', function() { 
  // show form to post a new note
  $(".form-section").toggleClass("display"); 
  $('#postTitle').focus();
}); 
 
 Posts.all = [];


Posts.prototype.save = function(){
	   Posts.all.push(this);
	   console.log(this);
	 };


 function Posts (post_title, post_content) {
   this.post_title = post_title;
   this.post_content = post_content;

 };


 var $newPostForm = $("#new_post_form"); 

 var postingTemplate = _.template($('#post-template').html());

 //element to hold all of the posts
 var $postsSection = $("#posts-section");
//renders new post to the page
Posts.prototype.render = function() {
 
   var $note = $(postingTemplate(this));

   $postsSection.append($note)
   console.log("render works")

 }

$(".form-section").toggleClass("display"); 
    $(".welcome").addClass("display");

  note.save();

note.render();

    
    $newPostForm[0].reset();
    $('#postTitle').focus();


   event.preventDefault();

  
    var noteName = $('#postTitle').val();
    var noteContent = $('#postContent').val();
    var note = new Posts(noteName, noteContent);

    
  });

});
