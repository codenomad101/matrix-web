export default function Felicitation() {
  const felicitationImages = [
    {
      title: 'Felicitation Ceremony 2024',
      cloudinaryId: 'v1764181879/B_r8gw6s',
      alt: 'Felicitation Ceremony 2024'
    },
    {
      title: 'Achievement Awards & Recognition',
      cloudinaryId: 'v1764181864/A_dbzo2c',
      alt: 'Achievement Awards & Recognition'
    }
  ]

  return (
    <div className="container-page py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0a1a67] mb-3">Felicitation Ceremonies</h1>
        <p className="text-[#0a1a67] text-lg">
          Celebrating the outstanding achievements of our students
        </p>
      </div>

      <div className="space-y-12">
        {felicitationImages.map((item, idx) => (
          <div key={idx}>
            <h2 className="text-3xl font-bold text-[#0a1a67] mb-8">{item.title}</h2>
            <div className="flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-lg max-w-4xl w-full">
                <img 
                  src={`https://res.cloudinary.com/ddqgxrgnc/image/upload/w_1200,h_800,c_fit,q_auto,f_auto/${item.cloudinaryId}`}
                  alt={item.alt}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

