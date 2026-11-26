import ClastarSite from './ClastarSite'
import EditorialPreview from './EditorialPreview'
import TypographyComparison from './TypographyComparison'
import HandwrittenTypeStudy from './HandwrittenTypeStudy'

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '')
  if (path === '/handwritten-type-study') return <HandwrittenTypeStudy />
  if (path === '/typography-comparison') return <TypographyComparison />
  if (path === '/editorial-preview') return <EditorialPreview />
  return <ClastarSite />
}
