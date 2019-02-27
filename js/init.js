$(function(){
   const doc = new function() {
      this.height = $(window).height();
      this.width = $(window).width();
      // this.resizeHeight = function(){
      //    resize = $(window).bind("resize", function () {
      //       var w =  $(this).width();
      //       return w;
      //    });
      //    return resize;
      // }
   }
   $(window).bind("resize", function () {
         var w =  $(this).width();
         var h =  $(this).height();
         $(".mailerContent").css('width', (w-270)+"px");
         $(".sidebar").css('height', h+"px");
      });
   $(".sidebar").css('height', doc.height+"px");
   $(".mailerContent").css('width', (doc.width-270)+"px");
   // console.log(doc.width);

   // sidebar nav
   $('.sidebar').append('<li><div class="center-align"><img src="images/logo.svg" style="width:200px" alt="EPICMAIL"></div></li>'
   +'<li class="center-align"><a class="btn-compose white radius-5" href="#"><span class="fas fa-plus"></span> Compose</a></li>'
   +'<li><div class="divider indigo darken-2"></div></li>'
   +'<li><a class="text-grey" href="inbox.html"> <span class="fas fa-inbox"></span> Inbox</a></li>'
   +'<li><a class="text-grey" href="sent.html"> <span class="fas fa-location-arrow"></span> Sent</a></li>'
   +'<li><a class="text-grey" href="draft.html"> <span class="fas fa-sticky-note"></span> Drafts</a></li>'
   +'<li><div class="divider indigo darken-2"></div></li>'
   +'<li><a class="text-grey" href="users.html"> <span class="fas fa-user-friends"></span> Users</a></li>'
   +'<li><a class="text-grey" href="groups.html"> <span class="fas fa-users"></span> Groups</a></li>'
   +'<li><div class="divider indigo darken-2"></div></li>'
   +'<li><a class="text-grey" href="me.html"> <span class="fas fa-user"></span> Profile</a></li>'
   +'<li><a class="text-grey" href="#"> <span class="fas fa-sign-out-alt"></span> Logout</a></li>'
   )
});
