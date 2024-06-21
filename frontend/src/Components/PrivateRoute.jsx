import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function PrivateRoute({ children }) {
    const { token } = useSelector(state => state.auth)
    const navigate = useNavigate()
  
    useEffect(() => {
        if (token === null) {
          navigate("/signup")
        }
      }, [token, navigate])
    
      if (token === null) {
        return null
      }
    
      return children
    }

export default PrivateRoute