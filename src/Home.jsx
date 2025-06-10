import React from 'react'

function Home() {
  return (
    <div className='bg-success text-white p-3 m-2'>
        <h1>Home</h1>
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Welcome</h5>
                            <p className="card-text">This is your home page. Explore the features and get started!</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Features</h5>
                            <ul className="list-unstyled">
                                <li>✔️ Fast and responsive</li>
                                <li>✔️ Easy to use</li>
                                <li>✔️ Modern design</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Get Started</h5>
                            <p className="card-text">Check the documentation or contact support for help.</p>
                            <a href="#" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home