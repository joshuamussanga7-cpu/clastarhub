import ClastarSite from './ClastarSite'
import EditorialPreview from './EditorialPreview'
import TypographyComparison from './TypographyComparison'

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '')
  if (path === '/typography-comparison') return <TypographyComparison />
  if (path === '/editorial-preview') return <EditorialPreview />
  return <ClastarSite />
}
