import React, { useState } from 'react'

export default function DataBase({ value }) {
    const [firmDetails, setFirmDetails] = useState([value]);



    return (
        <div>
            <div>
                {firmDetails.sort().length > 0 ? (
                    <div>
                        <h2 className='bg-success p-2 productHeading'>{value}</h2>
                        {firmDetails.map((firm, index) => (
                            <ul key={index} className='list-group list-group'>
                                <li className='list-group-item litst-items d-flex justify-content-between align-items-start'>
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">{firm.firmname}</div>
                                        {firm.doorno}, {firm.street}, {firm.area}, {firm.city}, {firm.pincode}
                                    </div>
                                    <span className="text-bg-primary rounded-pill p-2">{firm.mobile}</span>
                                </li>
                            </ul>
                        ))
                        }
                    </div>) : <p></p>
                }
            </div>
        </div>
    )
}
