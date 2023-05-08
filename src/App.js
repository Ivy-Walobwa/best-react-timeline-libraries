import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [key, setKey] = useState('timeline1');

  return <Tabs
    id="controlled-timeline-tab"
    activeKey={key}
    onSelect={(k) => setKey(k)}
    className="mb-3"
  >
    <Tab eventKey="timeline1" title="Timeline 1">

    </Tab>
    <Tab eventKey="timeline2" title="Timeline 2">

    </Tab>
    <Tab eventKey="timeline3" title="Timeline 3">
    </Tab>
  </Tabs>
}

export default App;
