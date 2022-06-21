import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const session = await getSession({ req })

  if(session) {
    res.status(200)
    res.send(
      `Success! you are signed in. \n session data: ${JSON.stringify(session)}`,
    )
  }

  else {
    res.status(401)
    res.send(
      "Sorry, you are not signed. You must sign in to access this data."
    )
  }
}