import React from 'react'

function Onetwosection(props) {
	const {className, Name, discription, price, text1, text2} = props
	return ( 
		<div>
			<section className={className}>
		<div className="container">

			<div className="new-alert">
				New
			</div>

			<div className="title-wraper bold black">
				{Name}
		</div> 
		<div class="description-wrapper black">
				{discription}
			</div>
		<div class="price-wrapper grey">
				{price}
			</div>

			<div className="links-wrapper">
				<ul>
					<li><a href="">Learn more</a></li>
					<li><a href="">Order</a></li>
				</ul> 
			</div>

			<div className="ipod-caption row">
			<div className="col-sm-12 col-md-6 text-md-right">{text1}</div>
			<div className="col-sm-12 col-md-6 text-md-left">{text2}</div>
			</div>
		</div>
	</section>
	  </div>
	)
  }

export default Onetwosection;