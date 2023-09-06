import './index.css'

const DestinationItem = props => {
  const {eachDestination} = props
  const {name, imgUrl} = eachDestination
  return (
    <li>
      <img src={imgUrl} alt={name} className="image-size" />
      <p>{name}</p>
    </li>
  )
}
export default DestinationItem
