var OverlayMenu
 = React.createClass({


	render: function(){

		return(

		
					<div className="overlay_menu container">

						<div className="mobilenav"> 
						  <li><a href="#"  data-hover="Portfolio">Portfolio</a></li>
						  <li><a href="#"  data-hover="Projects">Projects</a></li>
						  <li><a href="#"  data-hover="Blog">Blog</a></li>
						  <li><a href="#"  data-hover="Events">Events</a></li>
						  <li><a href="#"  data-hover="Contact">Contact</a></li>
						  <li><a href="#"  data-hover="Event">Event</a></li>
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

 