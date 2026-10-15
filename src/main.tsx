import { ViteReactSSG } from "vite-react-ssg"

import "./index.css"
import Home from "./pages/Home"

// Each `path` is prerendered to static HTML on build.
export const routes = [{ path: "/", element: <Home /> }]

export const createRoot = ViteReactSSG({ routes })
