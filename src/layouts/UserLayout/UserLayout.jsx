import React, { useEffect, useState } from "react"
import Header from "./Header"
import Footer from "./Footer"

const UserLayout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loading-indicator">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </>
  )
}

export default UserLayout
