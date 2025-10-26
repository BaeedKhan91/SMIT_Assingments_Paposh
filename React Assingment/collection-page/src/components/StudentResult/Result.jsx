import Fail from "./Fail";
import Pass from "./Pass";



function Result (props){
    const {marks , name , present} = props
if (marks > 50) {
    return <Pass name= {name} marks={marks} present={present}/> 
}else{
    return <Fail name= {name} marks={marks} present={present}/>
}
}

export default Result