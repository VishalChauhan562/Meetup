import { useEffect, useState } from 'react'
import MeetupList from '../components/meetups/MeetupList'

let DUMMY_DATA = [
    {
        id: 'm1',
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Prague_%286365119737%29.jpg',
        tite: 'Meet 1',
        address: "234, 10 street, mplace"
    },
    {
        id: 'm2',
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Prague_%286365119737%29.jpg',
        tite: 'Meet 2',
        address: "238, 11 street, mplace"
    }
]

const HomePage = (props) => {

    return (
        <MeetupList meetups={props.meetups} />
       
    )
}

export async function getStaticProps (context){
    return {
        props : {
            meetups : DUMMY_DATA
        }

    }
}

// export async function getServerSideProps(contex){

//     console.log("contex===>",{"req":contex.req,"res":contex.res});
    
//     return {
//         props : {
//             meetups : DUMMY_DATA
//         }

//     }
// }

export default HomePage