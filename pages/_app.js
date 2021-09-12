import { useMemo, useState } from 'react'
import '../styles/globals.css'
import { UserProvider } from '../UserContext'

function MyApp({ Component, pageProps }) {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const value = useMemo(() => ({ loggedInUser, setLoggedInUser }), [loggedInUser, setLoggedInUser]);

  return (
    <UserProvider value={value}>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
