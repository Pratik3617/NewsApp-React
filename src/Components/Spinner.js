// import React, { Component } from 'react'   class based
import React from 'react'

import loading from './loading.gif'


const Spinner=()=> {
        return (
            <div className='text-center my-3'>
                <img src={loading} alt='loading'/>
            </div>
        )
    
}
export default Spinner


// class method

// export default class Loading extends Component {
//     render() {
//         return (
//             <div className='text-center my-3'>
//                 <img src={loading} alt='loading'/>
//             </div>
//         )
//     }
// }