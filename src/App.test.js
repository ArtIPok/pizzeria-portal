import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  // eslint-disable-next-line react/react-in-jsx-scope
  shallow(<App />);
});
