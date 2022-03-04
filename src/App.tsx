import { ProviderGenreId } from './Context'

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

export function App() {
  return (
    <div className="box">
      <ProviderGenreId>
        <SideBar />
        <Content />
      </ProviderGenreId>

    </div>
  )
}