import React from 'react'
import './style.css'

function Sidebar() {
    return (
        <div className='bg-white sidebar p-3'>
            <div className='m-2'>
                <i className='bi bi-bootstrap-fill me-2 fs-4'></i>
                <span className='brand-name fs-4 '>yourself</span>
            </div>
            <hr className='text-dark' />
            <div className='list -group list -group-flush'>
                <a className='list-group-item px-3 '>
                    <i class="bi bi-speedometer2 fs-4 me-2"></i>
                    <span className='Dashboard'>Dashboard</span>
                </a>
                <hr className='text-dark' />

                <a className='list-group-item px-3 '>
                    <i class="bi bi-house fs-4 me-2"></i>
                    <span className='Dashboard'>Home</span>
                </a>
                <hr className='text-dark' />

                <a className='list-group-item px-3 '>
                    <i class="bi bi-table fs-4 me-2"></i>
                    <span className='Dashboard' >Products</span>
                </a>
                <hr className='text-dark' />


                <a className='list-group-item px-3'>
                    <i class="bi bi-clipboard fs-4 me-2"></i>
                    <span className='Dashboard' >Report</span>
                </a>
                <hr className='text-dark' />

                <a className='list-group-item px-3 '>
                    <i class="bi bi-person fs-4 me-2"></i>
                    <span className='Dashboard' >Customers</span>
                </a>
                <hr className='text-dark' />

                <a className='list-group-item px-2 '>
                    <i class="bi bi-power fs-4 me-2"></i>
                    <span className='logout' >logout</span>
                </a>




            </div>
        </div>
    )
}

export default Sidebar;