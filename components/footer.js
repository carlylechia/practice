import Link from "next/link"
import { signIn, signOut, useSession } from 'next-auth/react'

function Footer() {
  const { data: session, status } = useSession()
  console.log({session, status});
  if(status === 'authenticated') {
    return (
      <div className={`layout ${status === 'loading' ? 'loading' : 'loaded'}`}>
        <div>
          <b><i>{session.user.name} Next.js App</i></b>
        </div>
        <Link href='/api/auth/signout'>
          <button onClick={e => {
            e.preventDefault()
            signOut()
          }}>Sign Out</button>
        </Link>
      </div>
    )
  }
  return (
    <div className={`layout ${status === 'loading' ? 'loading' : 'loaded'}`}>
      <p>You are not signed in.</p>
      <Link href='/api/auth/signin'>
        <button onClick={e => {
          e.preventDefault()
          signIn('github')
        }}>Sign In</button>
      </Link>

    </div>
  )
}

export default Footer