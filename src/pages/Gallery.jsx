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
    <div className="container-content py-10">
      <h1 className="text-3xl font-bold mb-2">Photo Gallery</h1>
      <p className="text-[#004c8f] mb-8">Explore moments from our events, ceremonies, and student activities</p>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {imageCategories.map((category, idx) => (
          <div key={idx} className="card p-6 hover:-translate-y-1 transition-transform duration-300">
            <div className="aspect-video bg-brand/20 rounded-lg mb-4 grid place-content-center">
              <span className="text-4xl">📷</span>
            </div>
            <h3 className="text-xl font-semibold">{category.name}</h3>
            <p className="text-sm text-[#004c8f] mt-2">
              Images from {category.name.toLowerCase()} are available in the extracted folder.
              Convert PPM files to JPG/PNG for web display.
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-brand/10 rounded-xl">
        <h3 className="font-semibold mb-2">Note:</h3>
        <p className="text-sm text-[#004c8f]">
          Images have been extracted from the PDF to <code className="bg-white px-2 py-1 rounded">public/images/extracted/</code>.
          They are currently in PPM format. To display them on the website, convert them to JPG or PNG format using ImageMagick:
        </p>
        <pre className="mt-3 bg-[#004c8f] text-white p-4 rounded text-xs overflow-x-auto">
{`cd public/images/extracted
for f in *.ppm; do
  convert "$f" "\${f%.ppm}.jpg"
done`}
        </pre>
      </div>
    </div>
  )
}

