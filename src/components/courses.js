
import './index.css';
const Cources = (props) => {

    
  const allCourcesList=props.allCources.map((Course,index)=>{
    return (
        <div className="hamada" key={index}>
            <h3 id="Cname">{Course.name}</h3>
            <p>{Course.desc}</p>

        </div>
    )
  })
return(<div>{allCourcesList}</div>);

}
export default Cources;