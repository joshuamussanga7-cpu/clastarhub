import ClastarSite from './ClastarSite'
import EditorialPreview from './EditorialPreview'
import TypographyComparison from './TypographyComparison'
import HandwrittenTypeStudy from './HandwrittenTypeStudy'
import PlatformWorkspace from './PlatformWorkspace'

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  if (path === '/handwritten-type-study') return <HandwrittenTypeStudy />
  if (path === '/typography-comparison') return <TypographyComparison />
  if (path === '/editorial-preview') return <EditorialPreview />
  if (path === '/portal' || path.startsWith('/portal/')) return <PlatformWorkspace mode="portal" />
  if (path === '/admin' || path.startsWith('/admin/')) return <PlatformWorkspace mode="admin" />
  if (path === '/labs' || path.startsWith('/labs/')) return <PlatformWorkspace mode="labs" />
  if (path === '/ai' || path.startsWith('/ai/')) return <PlatformWorkspace mode="ai" />
  return <ClastarSite />
}
