import { proect } from '../data/proect'
import '../css/project.css'

function Project() {
    {
        proect.map((element) => (
            <div className="project" >
                <img src={element.img}/>
                <p>{element.title}</p>
                <h5>{element.sum}</h5>
            </div>
        ))
    }
}

export default Project;