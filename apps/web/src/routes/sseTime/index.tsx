import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/sseTime/')({
	component: ServerTimePage
})

function ServerTimePage() {
	const [serverTime, setServerTime] = useState<string | undefined>(undefined)

	useEffect(() => {
		const es = new EventSource('/api/server_time')

		es.addEventListener('time-update', (event) => {
			setServerTime(event.data)
		})

		es.addEventListener('error', (e) => {
			console.error('error', e)
			es.close()
		})

		return () => es.close()
	}, [])

	return (
		<div>
			<h1>Server Time</h1>
			<br />
			<p>{serverTime ?? 'Not connected'}</p>
		</div>
	)
}
