import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import styles from '../styles/Home.module.css'
import Link from "next/link"

function EventList({ events }) {
  const [ sportsEvents, setSportsEvents ] = useState(events)
  const router = useRouter()

  const showAllEvents = () => {
    setSportsEvents(events)
  }

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
      <nav className={styles.footer}>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <button onClick={showAllEvents} style={{background: 'green', padding: '0.5rem', marginLeft: '2rem', marginRight: '20rem'}}>All Events</button>
        <button onClick={fetchSportEvents} style={{background: 'silver', padding: '0.5rem', marginLeft: '-18rem', marginRight: '15rem'}}>Sports Events</button>
      </nav>
      <h2>List of Events</h2>
      <hr />
      {sportsEvents.map(event => {
        return (
          <div key={event.id}>
            <h3>
              {event.id} {event.title} {event.date} | {event.category}
            </h3>
            <p className={styles.description}>{event.description}</p>
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