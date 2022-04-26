import React from 'react'
import Card from '../components/shared/Card'
import { Link } from "react-router-dom";
function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This react app to leave feedback for a product or service</p>
        <p>version1.0.0</p>

        <p>
          <Link to="/">Back Home</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage