import { useState, useEffect } from "react"
import { useRouter } from "next/router"

function EventList({ events }) {
  const [ sportsEvents, setSportsEvents ] = useState(events)
  const router = useRouter()

  const fetchSportEvents = async () => {
    const response = await fetch('http://localhost:4000/events?category=sports')
    const data = await response.json()
    setSportsEvents(data)
    router.push('events?category=sports', undefined, { shallow: true })
  }

  useEffect(() => {
    setSportsEvents(events)
  }, [events])

  return (
    <>
      <button onClick={fetchSportEvents}>Sports Events</button>
      <h2>List of Events</h2>
      <hr />
      {sportsEvents.map(event => {
        return (
          <div key={event.id}>
            <h3>
              {event.id} {event.title} {event.date} | {event.category}
            </h3>
            <p>{event.description}</p>
            <hr />
          </div>
        )
      })}
    </>
  )

}

export default EventList

export async function getServerSideProps(context) {
  const { query } = context
  const { category } = query
  const queryString = category ? 'category=sports' : ''
  const response = await fetch(`http://localhost:4000/events?${queryString}`)
  const data = await response.json()

  return {
    props: {
      events: data
    }
  }
}