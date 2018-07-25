import * as React from 'react'
import { Link } from 'react-router-dom'

import {
	Carousel,
	CarouselCaption,
	CarouselControl,
	CarouselIndicators,
	CarouselItem,
} from 'reactstrap';

import './carousel.css'

import carouselImage1 from '../../../assets/header1.jpg';
import carouselImage2 from '../../../assets/header2.jpg';
  

const items = [
  	{
		altText: 'Slide 1',
    	caption: 'Slide 1',
    	header: 'Slide 1 Header',
		src: carouselImage1,
		href: '/about'
  	},
  	{
    	altText: 'Slide 3',
    	caption: 'Slide 3',
    	header: 'Slide 3 Header',
    	src: carouselImage2
  	}
];

interface State {
	activeIndex: number
}

class CarouselElement extends React.Component<{}, State> {
	public state: State = {
		activeIndex: 0,
	};

	public animating: boolean

	public render () {
		const { activeIndex } = this.state;
	
		const slides = items.map((item) => {
		  	return (
				<CarouselItem
			  		onExiting={this.onExiting}
			  		onExited={this.onExited}
			  		key={item.src}
				>	
					{item.href ? (
						<Link to={item.href}>                            
							<img src={item.src} alt={item.altText} />
							<CarouselCaption captionText={item.caption} captionHeader={item.caption} />
						</Link>
					) : (						
						<div>
							<img src={item.src} alt={item.altText} />
							<CarouselCaption captionText={item.caption} captionHeader={item.caption} />
						</div>
					)}
				</CarouselItem>
		  	)
		})
	
		return (
		  	<Carousel
				activeIndex={activeIndex}
				next={this.next}
				previous={this.previous}
		  	>
				<CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
				{slides}
				<CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
				<CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
		  	</Carousel>
		)
	}

	private onExiting = () => {
		this.animating = true;
	}

	private onExited = () => {
		this.animating = false;
	}

	private next = () => {
		if (this.animating) { return }
		const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
		this.setState({ activeIndex: nextIndex });
	}

	private previous = () => {
		if (this.animating) { return }
		const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
		this.setState({ activeIndex: nextIndex });
	}

	private goToIndex = (newIndex: number) => {
		if (this.animating) { return }
		this.setState({ activeIndex: newIndex });
	}
}

export default CarouselElement
