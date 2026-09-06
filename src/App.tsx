import ClastarCompanyHome from './ClastarCompanyHome'
import ClastarProductPages from './ClastarProductPages'
import ClastarSolutionsTechnology from './ClastarSolutionsTechnology'

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'

  if (path === '/products' || path.startsWith('/products/')) return <ClastarProductPages />
  if (path === '/solutions' || path.startsWith('/solutions/')) return <ClastarSolutionsTechnology />
  if (path === '/technology' || path.startsWith('/technology/')) return <ClastarSolutionsTechnology />

  return <ClastarCompanyHome />
}
