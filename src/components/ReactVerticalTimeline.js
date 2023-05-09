

//React Vertical Timeline Component imports
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
//Material UI Icons imports
import WorkIcon from '@material-ui/icons/Work';
import { events } from "../helpers/data";
import { getYear } from "../helpers/dateConverter"

const ReactVerticalTimelineComponent = () => {
    return <VerticalTimeline>
        {events.map(data => <VerticalElement data={data} />)}
    </VerticalTimeline>

}

const VerticalElement = ({ data }) => {
    return <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date={`${getYear(data.start)} - ${data.end ? getYear(data.end) : "present"}`}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<WorkIcon />}
    >
        <h3 className="vertical-timeline-element-title">{data.position}</h3>
        <h4 className="vertical-timeline-element-subtitle">{data.company}</h4>
        <p>{data.description}</p>
    </VerticalTimelineElement>
}

export default ReactVerticalTimelineComponent