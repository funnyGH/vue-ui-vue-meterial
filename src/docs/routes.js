import Home from './pages/Home';
import Avatar from './pages/Avatar';
import BottomBar from './pages/BottomBar';
import Buttons from './pages/Buttons';
import ButtonToggle from './pages/ButtonToggle';
import Checkbox from './pages/Checkbox';
import Radio from './pages/Radio';
import Divider from './pages/Divider';
import Icon from './pages/Icon';
import Input from './pages/Input';
import Ripple from './pages/Ripple';
import List from './pages/List';
import Sidenav from './pages/Sidenav';
import Theme from './pages/Theme';
import Toolbar from './pages/Toolbar';
import Tooltip from './pages/Tooltip';
import Whiteframe from './pages/Whiteframe';

const routes = {
  '/': {
    name: 'home',
    component: Home
  },
  '/avatar': {
    name: 'avatar',
    component: Avatar
  },
  '/bottom-bar': {
    name: 'bottomBar',
    component: BottomBar
  },
  '/button': {
    name: 'button',
    component: Buttons
  },
  '/button-toggle': {
    name: 'buttonToggle',
    component: ButtonToggle
  },
  '/radio': {
    name: 'radio',
    component: Radio
  },
  '/checkbox': {
    name: 'checkbox',
    component: Checkbox
  },
  '/divider': {
    name: 'divider',
    component: Divider
  },
  '/icon': {
    name: 'icon',
    component: Icon
  },
  '/input': {
    name: 'input',
    component: Input
  },
  '/list': {
    name: 'list',
    component: List
  },
  '/ripple': {
    name: 'ripple',
    component: Ripple
  },
  '/sidenav': {
    name: 'sidenav',
    component: Sidenav
  },
  '/theme': {
    name: 'theme',
    component: Theme
  },
  '/toolbar': {
    name: 'toolbar',
    component: Toolbar
  },
  '/tooltip': {
    name: 'tooltip',
    component: Tooltip
  },
  '/whiteframe': {
    name: 'whiteframe',
    component: Whiteframe
  }
};

export default routes;
