import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {RootComponent} from "./map/rootComponent/RootComponent.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        {/*<App />*/}
        <RootComponent/>
    </StrictMode>,
)
