import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">Cloud Menu</a>
        <span className="ml-1">&copy; 2021.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="http://cloudmenu.sa" target="_blank" rel="noopener noreferrer">Cloud Menu</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
