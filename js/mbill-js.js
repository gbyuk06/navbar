//<![CDATA[
 $(document).ready(function(){
  $('.toggle_menus').click(function(){
   $('ul.menu').slideToggle(500);  
  });

 $(window).resize(function(){
  var menu=$('ul.menu');
  var w=$(window).width();
  if (w > 320 && menu.is(':hidden')) {
   menu.removeAttr('style');
  };
 });

 });

$('#back-to-top').hide().click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 800);
    return false;
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
});


var y = new Date();
document.getElementById("copyrights").innerHTML = y.getFullYear();

    $.each($(".post-view[data-id]"), function(a, e) {
        var l = $(e).parent().find("#postviews").addClass("view-load"),
            i = new Firebase("https://dmanime-791.firebaseio.com//pages/id/" + $(e).attr("data-id"));
        i.once("value", function(a) {
            var n = a.val(),
                t = !1;
            null == n && (n = {}, n.value = 0, n.url = window.location.href, n.id = $(e).attr("data-id"), t = !0), l.removeClass("view-load").text(n.value), n.value++, "/" != window.location.pathname && (t ? i.set(n) : i.child("value").set(n.value))
        })
    });

			new gnMenu( document.getElementById( 'gn-menu' ) );
            
			var prevScrollpos = window.pageYOffset;
            window.onscroll = function() {
              var currentScrollPos = window.pageYOffset;
              if (prevScrollpos > currentScrollPos) {
                document.getElementById("gn-menu").style.top = "0";
				document.getElementById("gn-menuuls").style.top = "60px";
              } else {
                document.getElementById("gn-menu").style.top = "-60px";
				document.getElementById("gn-menuuls").style.top = "0";
              }
              prevScrollpos = currentScrollPos;
            }

  var str = document.getElementById("hide_titlte").innerHTML; 
  var res = str.replace(".", "");
  document.getElementById("hide_titlte").innerHTML = res;

function init() {
    var vidDefer = document.getElementsByTagName('iframe');
    for (var i = 0; i < vidDefer.length; i++) {
        if (vidDefer[i].getAttribute('data-src')) {
            vidDefer[i].setAttribute('src', vidDefer[i].getAttribute('data-src')); } } }
window.onload = init;
/*LazyLoad Image
$(window).bind("load",function(){$("#cssload").fadeOut(1e3)});
*/
//]]>
