import NextAuth from 'next-auth'
import Providers from 'next-auth/providers/github'

export default NextAuth({
  providers: [
    Providers({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],
  database: process.env.DB_URL,
  session: {
    jwt: true,
  },
  jwt: {
    secret: 'rtyhgjbendsie',
  },
})
