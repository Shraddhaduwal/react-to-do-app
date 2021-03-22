import {Link} from 'react-router-dom'

const About = () => {
	return (
		<div>
			<h2>About</h2>
			<p>This is the Task Tracking app that helps in tracking our time and completing tasks</p>
			<br/><br/>
			<Link to="/">Home</Link>
		</div>
	)
}

export default About