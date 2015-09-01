var OverlayMenu
 = React.createClass({

    componentDidMount: function() {
        $(".icon").click(function () {
            $(".mobilenav").fadeToggle(500);
            $(".top-menu").toggleClass("top-animate");
            $(".mid-menu").toggleClass("mid-animate");
            $(".bottom-menu").toggleClass("bottom-animate");
        });

        new WOW().init();
        //end od ready
    },

	render: function(){

		return(

		
					<div className="overlay_menu container">

						<div className="mobilenav"> 

						  <li><a href="/projects"  data-hover="Projects">Projects</a></li>
						  <li><a href="/blog"  data-hover="Blog">Blog</a></li>
						  <li><a href="/events"  data-hover="Events">Events</a></li>
						  <li><a href="/contact"  data-hover="Contact">Contact</a></li>
						  <li><a href="/videos"  data-hover="Videos">Videos </a></li>
                          <li><a href="/about"  data-hover="About">About</a></li>


						</div>


						
						<a href="javascript:void(0)" className="icon">
							<div className="hamburger">
							  <div className="menui top-menu"></div>
							  <div className="menui mid-menu"></div>
							  <div className="menui bottom-menu"></div>
							</div>
						</a>




					</div>


		);
	}



});

 