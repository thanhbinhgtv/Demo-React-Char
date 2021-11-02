import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AnnotationChart from "./components/annotation-chart";
import BubbleChart from "./components/bubble-chart";
import ColumnChart from "./components/column-chart";
import GeoChart from "./components/geo-chart";
import LineChart from "./components/line-chart";
import PieChart from "./components/pie-chart";
import TreeMapChart from "./components/tree-map-chart";

function App() {
  return (
    <Router>
      <div>
        <Link to="/pie">
          <button>Pie</button>
        </Link>
        <Link to="/line">
          <button>Line</button>
        </Link>
        <Link to="/bubble">
          <button>Bubble</button>
        </Link>
        <Link to="/geo">
          <button>Geo</button>
        </Link>
        <Link to="/column">
          <button>Column</button>
        </Link>
        <Link to="/tree-map">
          <button>Tree Map</button>
        </Link>
        <Link to="/annotation">
          <button>Annotation</button>
        </Link>
      </div>

        <Switch>
          <Route exact path="/">
            <PieChart />
          </Route>
          <Route path="/pie">
            <PieChart />
          </Route>
          <Route path="/line">
            <LineChart />
          </Route>
          <Route path="/bubble">
            <BubbleChart />
          </Route>
          <Route path="/geo">
            <GeoChart />
          </Route>
          <Route path="/column">
            <ColumnChart />
          </Route>
          <Route path="/tree-map">
            <TreeMapChart />
          </Route>
          <Route path="/annotation">
            <AnnotationChart />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
