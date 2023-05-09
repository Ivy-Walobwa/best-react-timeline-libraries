import { Chrono } from "react-chrono";
import { events } from "../helpers/data";
import { ReactChronoDataMap } from "../helpers/dataMaps";

const ReactChronoComponent = () => {
    const mappedEvents = ReactChronoDataMap(events);
    return <>
        <div style={{ width: "fit-content", height: "600px" }} className="px-3 py-5">
            <h3>VERTICAL</h3>
            <Chrono items={mappedEvents} mode="VERTICAL"></Chrono>
        </div>
        <div style={{ width: "fit-content", height: "600px" }} className="px-3 py-5">
            <h3>HORIZONTAL</h3>
            <Chrono items={mappedEvents} mode="HORIZONTAL"></Chrono>
        </div>
        <div style={{ width: "fit-content", height: "600px" }} className="px-3 py-5">
            <h3>VERTICAL_ALTERNATING</h3>
            <Chrono items={mappedEvents} mode="VERTICAL_ALTERNATING"></Chrono>
        </div>
    </>
}

export default ReactChronoComponent;