import * as React from 'react'
import { Routes, Route, Outlet, Link } from 'react-router-dom'
import routes from './routes/route'
const Loader = React.lazy(() => import("./components/loader/loader.helper"));
const Topbar = React.lazy(() => import("./components/topbar/topbar.helper"));

const App: React.FunctionComponent = () => {
    // document.body.style.backgroundColor = "#D9DDDC"

  return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {routes.map(item =>
                        <Route
                            path={item.path}
                            key={item.path}
                            element={
                                <React.Suspense fallback={<Loader />}>
                                    <Topbar />
                                    {item.element}
                                </React.Suspense>
                            }
                        />
                    )}
                    <Route path="*" element={<NotFoundComponent />} />
                </Route>
            </Routes>
        </div>
  )
}
export default App

const Layout: React.FunctionComponent = () => {
  return (<div>
            <Outlet />
        </div>
  )
}

const NotFoundComponent: React.FunctionComponent = () => {
  return (
        <div>
            <h2>Invalid Route!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
  )
}
