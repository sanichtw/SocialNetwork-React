import ReactDOM from 'react-dom';
import { AppJS } from "./App";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AppJS />, div);
    ReactDOM.unmountComponentAtNode(div)
})