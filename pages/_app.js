import { useMemo, useState } from 'react'
import '../styles/globals.css'
import { UserContext } from '../UserContext'

function MyApp({ Component, pageProps }) {
  const [loggedInUser, setLoggedInUser] = useState({})
  const providerValue = useMemo(() => {
    (loggedInUser, setLoggedInUser)}, 
    [loggedInUser, setLoggedInUser]
  )

  return (
    <UserContext.Provider value={providerValue}>
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}

export default MyApp
