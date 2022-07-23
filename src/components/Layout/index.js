import React from 'react'

function Layout({ name, children }) {
  React.useEffect(() => {
    document.title = `INVOICING  | ${name ? name.toUpperCase() : ''}`
  }, [name])
  return <>{children}</>
}

export default Layout
