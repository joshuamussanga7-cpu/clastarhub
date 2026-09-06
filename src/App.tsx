import ClastarCompanyHome from './ClastarCompanyHome'
import ClastarProductPages from './ClastarProductPages'

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'

  if (path === '/products' || path.startsWith('/products/')) {
    return <ClastarProductPages />
  }

  return <ClastarCompanyHome />
}
