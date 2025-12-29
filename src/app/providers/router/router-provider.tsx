import { createBrowserRouter, RouterProvider as Provider } from "react-router-dom"
import routes from "../../router"

const router = createBrowserRouter(routes)

export function RouterProvider() {
  return <Provider router={router} />
}
