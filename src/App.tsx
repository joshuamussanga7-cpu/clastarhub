import ClastarSite from './ClastarSite'
import EditorialPreview from './EditorialPreview'

export default function App() {
  const previewPath = window.location.pathname.replace(/\/$/, '') === '/editorial-preview'
  return previewPath ? <EditorialPreview /> : <ClastarSite />
}
