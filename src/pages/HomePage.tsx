import Header from '@/components/Header'
import Bio from '@/components/Bio'
import ProjectGallery from '@/components/ProjectGallery'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-16">
        <Bio />
        <ProjectGallery />
      </main>
      <Footer />
    </div>
  )
}