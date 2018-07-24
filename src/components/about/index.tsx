import * as React from 'react'
import { Button } from 'reactstrap'

class About extends React.Component {
	public render() {
		return (
			<div>
				<div className="alert alert-primary" role="alert">
					A simple primary alert—check it out!
		  		</div>
          		<p>
					About page
          		</p>
				<Button
					tag="a"
					color="success"
					size="large"
					href="http://reactstrap.github.io"
					target="_blank"
				>
					View Reactstrap Docs
          		</Button>
			</div>
		);
	}
}

export default About;
