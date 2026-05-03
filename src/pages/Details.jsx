import { useParams } from 'react-router-dom'

export default function Details() {
	const { id } = useParams()
	return (
		<div className="prose">
			<h1>Details</h1>
			<p>Details for item: {id || 'n/a'}</p>
		</div>
	)
}
