export default function Gallery() {
  // Images are extracted to public/images/extracted/
  // They're in PPM format - you may want to convert them to JPG/PNG for web
  // For now, showing placeholder structure
  
  const imageCategories = [
    { name: 'Felicitation Ceremony', folder: 'felicitation' },
    { name: 'Orientation Sessions', folder: 'orientation' },
    { name: 'Award Ceremony', folder: 'awards' },
    { name: 'Student Events', folder: 'events' },
    { name: 'Campus & Facilities', folder: 'campus' },
  ]

  return (
    <div className="min-h-screen bg-[var(--bg-page)]">
      <section className="page-section-white">
        <div className="container-page">
          <h1 className="text-3xl md:text-4xl font-bold text-heading mb-2">Photo Gallery</h1>
          <p className="text-body mb-6">Explore moments from our events, ceremonies, and student activities.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {imageCategories.map((category, idx) => (
              <div key={idx} className="page-card hover:shadow-md hover:border-gray-200 transition-all duration-300 hover:-translate-y-0.5">
                <div className="aspect-video bg-gray-100 rounded-lg mb-4 grid place-content-center border border-gray-200/80">
                  <span className="text-4xl">📷</span>
                </div>
                <h3 className="text-xl font-semibold text-heading">{category.name}</h3>
                <p className="text-sm text-body/80 mt-2">
                  Images from {category.name.toLowerCase()} are available in the extracted folder.
                  Convert PPM files to JPG/PNG for web display.
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 page-card">
            <h3 className="font-semibold text-heading mb-2">Note:</h3>
            <p className="text-sm text-body">
              Images have been extracted from the PDF to <code className="bg-gray-100 px-2 py-1 rounded text-body">public/images/extracted/</code>.
              They are currently in PPM format. To display them on the website, convert them to JPG or PNG format using ImageMagick:
            </p>
            <pre className="mt-3 bg-[var(--brand-blue)] text-white p-4 rounded-lg text-xs overflow-x-auto">
{`cd public/images/extracted
for f in *.ppm; do
  convert "$f" "\${f%.ppm}.jpg"
done`}
            </pre>
          </div>
        </div>
      </section>
    </div>
  )
}

