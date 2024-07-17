import React from 'react'

function UserProfile({profiles}) {
    console.log({profiles})

    return (
        <>
            <div className="container mx-auto mt-4">
                <div className="row">
                    {profiles.map((item,index) =>
                        <div className="col" key={index}>
                            <div className="card">
                                <img src={item.avatar} className="card-img-top" height="200px" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-subtitle mb-2 text-muted">{item.name}</h6>
                                    <p className="card-text bg-color text-justify p-2">{item.biography}</p>
                                    <p style={{ backgroundColor: "lightblue" }}><b>Location : </b>{item.location}</p>
                                    <div>
                                        <a className='p-2' href="#"><i className="fa fa-dribbble"></i></a>
                                        <a className='p-2' href="#"><i className="fa fa-twitter"></i></a>
                                        <a className='p-2' href="#"><i className="fa fa-linkedin"></i></a>
                                        <a className='p-2' href="#"><i className="fa fa-facebook"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default UserProfile;
