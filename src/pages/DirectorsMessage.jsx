export default function DirectorsMessage() {
  const directors = [
    { name: 'Mr. Ravindra Yadav', role: 'Director' },
    { name: 'Mr. Abhishek Mehta', role: 'Director' },
    { name: 'Mr. Manoj Kumar', role: 'Director' },
    { name: 'Mr. Umesh Bharde', role: 'Director' },
  ]

  return (
    <div className="container-content py-10">
      <h1 className="text-3xl font-bold mb-6">Director's Message</h1>
      <div className="max-w-4xl space-y-8">
        {directors.map((director, idx) => (
          <div key={idx} className="card p-8">
            <div className="flex flex-col sm:flex-row gap-6 mb-6">
              <div className="h-32 w-32 rounded-2xl bg-brand/40 grid place-content-center text-slate-900 font-bold text-xl shrink-0">
                {director.name.split(' ').slice(-1)[0].charAt(0)}
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-slate-900">{director.name}</h2>
                <p className="mt-2 text-slate-600">{director.role}</p>
              </div>
            </div>
            
            <div className="prose max-w-none text-slate-700 space-y-4">
              <p>
                We are teachers by our choice and we passionately do our job. Our Aim is not to run the classes conventionally, but we
                are here to make a change and make a strong impact in the field of 8th to 12th Education in Maharashtra. We believe
                education is the key to success.
              </p>
              <p>
                Matrix Science Academy Aims to Provide Quality and Affordable Education to all the students via offline as well as online mode. 
                We have young and highly qualified teachers who can drive the students for their career.
              </p>
              <p>
                With over 150 dedicated teachers by choice and a track record of 1 lakh+ successful students, we have built a learning
                ecosystem that combines rigorous academics with personalized mentorship. Our IMPULSE batch program is specifically
                designed for top performers aiming for IIT-JEE, NEET, MHT-CET, and IISER Foundation.
              </p>
              <p>
                At MSA, we believe that "सा विद्या या विमुक्तये" – knowledge that liberates. We don't just teach; we inspire,
                motivate, and guide our students to achieve their highest potential.
              </p>
              <p>
                Over 20,000+ successful alumni in the last 12 years stand testament to our commitment to excellence. Join us at any of 
                our 8 branches across Pradhikaran, Nigdi, Ravet, Shahunagar, Chinchwad, Wakad, and Moshi, and embark on a journey of academic excellence.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

