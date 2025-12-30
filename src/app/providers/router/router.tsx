import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../../../pages/HomePage';
import { ROUTES } from '../../../shared/routes';
 
const router = createBrowserRouter([
    { path: ROUTES.ROOT, element: <HomePage /> }
])

export default router;