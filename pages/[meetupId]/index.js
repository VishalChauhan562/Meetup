import { MeetupDetail } from "../../components/meetups/MeetupDetail"

const MeetupDetails = ({meetUpImg,meetUpTitle,meetUpAddress,meetUpDescription}) => {
    return (
        <MeetupDetail
            img={meetUpImg}
            title={meetUpTitle}
            address={meetUpAddress}
            description={meetUpDescription}
        />
    )
}

export async function getStaticPaths (){
    return {
        fallback : false,
        paths : [
            {
                params : {
                    meetupId : 'm1'
                }
            },
            {
                params : {
                    meetupId : 'm2'
                }
            }
        ]
    }
}

export async function getStaticProps (context){
    let meetup_id = context.params.meetupId
    console.log("meetupId====>",meetup_id);
    
    return {
        props : {
            meetUpImg : 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Prague_%286365119737%29.jpg',
            meetUptitle : 'First meetup',
            meetUpAddress : 'Some street, some place',
            meetUpDescription : 'Nice Meetup'
        }

    }
}

export default MeetupDetails