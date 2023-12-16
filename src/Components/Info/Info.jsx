import cards from '../../cards.json';
import Card from '../Card/Card'


export default function Info(props) {
   

  
  return (
    <div>
        {props.arr.map((item, index) => (
            <Card object={item} key={index}/>
        ))}
    </div>
  )
}