import { useEffect } from "react";
import Gantt from 'frappe-gantt'
import { events } from "../helpers/data";
import { FrappeGanttDataMap } from "../helpers/dataMaps";

const FrappeGantt = () => {
    const tasks = FrappeGanttDataMap(events);
    console.log(tasks)

    useEffect(() => {
        const gantt = new Gantt("#gantt", tasks);
        gantt.change_view_mode('Month')
    }, [tasks])

    return <svg id="gantt"></svg>
}

export default FrappeGantt;