import classes from './MeetupDetail.module.css'

export const MeetupDetail = (props) => {
  return (
    <section className={classes.details}>
      <img src={props.img} alt="Image details" />
      <p>{props.title}</p>
      <p>{props.address}</p>
      <p>{props.description}</p>
    </section>
  )
}
