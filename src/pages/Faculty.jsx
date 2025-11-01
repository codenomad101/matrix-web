export default function Faculty() {
  // Helper function to convert name to filename
  const nameToFilename = (name) => {
    return name.toLowerCase().replace(/\s+/g, '-')
  }

  const faculty = [
    { name: 'Nishant Patwardhan', subject: 'Physics', qualification: 'B.Tech (Mech) COEP, NET', exp: '13 Yrs', img: nameToFilename('Nishant Patwardhan') },
    { name: 'Ravindra Yadav', subject: 'Chemistry', qualification: 'M.Sc (CS), B.Ed (Maths)', exp: '13 Yrs', img: nameToFilename('Ravindra Yadav') },
    { name: 'Abhishek Mehta', subject: 'Maths', qualification: 'MCS (Maths)', exp: '23 Yrs', img: nameToFilename('Abhishek Mehta') },
    { name: 'Sagar Shahane', subject: 'Biology', qualification: 'M.Sc. (Microbiology), NET - JRF, SET', exp: '15 Yrs', img: nameToFilename('Sagar Shahane') },
    { name: 'Saurabh Pore', subject: 'Chemistry', qualification: 'M.Sc (Physical Chemistry), GATE (AIR 3900), SET', exp: '8 Yrs', img: nameToFilename('Saurabh Pore') },
    { name: 'Akash Kesarkar', subject: 'Physics', qualification: 'M.Tech. (VJTI), GATE (Mech.) 2017', exp: '7 Yrs', img: nameToFilename('Akash Kesarkar') },
    { name: 'Mangilal Vishnoi', subject: 'Maths', qualification: 'B.E. (Mech.)', exp: '8 Yrs', img: nameToFilename('Mangilal Vishnoi') },
    { name: 'Deepak Singh', subject: 'Physics', qualification: 'B.Tech (Mech.) COEP', exp: '7 Yrs', img: nameToFilename('Deepak Singh') },
    { name: 'Shankar Tompe', subject: 'Chemistry', qualification: 'M.Sc (Organic Chemistry), Ex JR Scientist, SET', exp: '5 Yrs', img: nameToFilename('Shankar Tompe') },
    { name: 'Tushar Khapne', subject: 'Physics', qualification: 'M.Tech. (Chemical Engg), NIT NAGPUR', exp: '5 Yrs', img: nameToFilename('Tushar Khapne') },
    { name: 'Dinesh Srivastava', subject: 'Maths', qualification: 'Mathematics B.Tech (IT)', exp: '12 Yrs', img: nameToFilename('Dinesh Srivastava') },
    { name: 'Pravin Menkudale', subject: 'Chemistry', qualification: 'M.Sc. (Chem.), Ph.D Pursuing', exp: '8 Yrs', img: nameToFilename('Pravin Menkudale') },
    { name: 'Prasad Hande', subject: 'Maths', qualification: 'B.Tech (Mech.), Sinhgad College of Engg', exp: '8 Yrs', img: nameToFilename('Prasad Hande') },
    { name: 'Pankaj Singh', subject: 'Maths', qualification: 'Mechanical Engineering (IIT Bombay)', exp: '11 Yrs', img: nameToFilename('Pankaj Singh') },
    { name: 'Bhagvat Dhesale', subject: 'English', qualification: 'M.A. English | NET, SET | Ph.D.', exp: '11 Yrs', img: nameToFilename('Bhagvat Dhesale') },
    { name: 'Sanket Gadade', subject: 'Computer', qualification: 'B.E. Computer', exp: '6 Yrs', img: nameToFilename('Sanket Gadade') },
    { name: 'Sneha Malgave', subject: 'Chemistry', qualification: 'B.Tech Metallurgy, COEP', exp: '6 Yrs', img: nameToFilename('Sneha Malgave') },
    { name: 'Vaishnavi Wadile', subject: 'Maths', qualification: 'M.Sc (Maths)', exp: '12 Yrs', img: nameToFilename('Vaishnavi Wadile') },
    { name: 'Pratik Jogalekar', subject: 'Physics', qualification: 'Mechanical Engineering (Pursuing)', exp: '2 Yrs', img: nameToFilename('Pratik Jogalekar') },
    { name: 'Mahesh Govind Gholap', subject: 'Mathematics', qualification: 'M.Sc (Mathematics), MCA, Pune University', exp: '6 Yrs', img: nameToFilename('Mahesh Govind Gholap') },
    { name: 'Ankita Taware', subject: 'Biology', qualification: 'M.Sc Botany', exp: '3 Yrs', img: nameToFilename('Ankita Taware') },
  ]

  return (
    <div className="container-content py-10">
      <h1 className="text-3xl font-bold mb-2">Our Faculty</h1>
      <p className="text-slate-600 mb-8">150+ Teachers by Choice - Expert educators dedicated to your success</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {faculty.map((f, idx) => (
          <div key={idx} className="card p-6 hover:-translate-y-1 transition-transform duration-300 text-center">
            {/* Faculty Photo */}
            <div className="relative mb-4 mx-auto w-32 h-32">
              <img 
                src={`/images/extracted/faculty/${f.img}.jpg`} 
                alt={f.name}
                className="h-32 w-32 rounded-full object-cover border-4 border-brand/30 shadow-soft"
                onError={(e) => {
                  // Fallback to initials if image fails to load
                  e.target.style.display = 'none'
                  const fallback = e.target.nextElementSibling
                  if (fallback) fallback.style.display = 'grid'
                }}
              />
              <div 
                className="h-32 w-32 rounded-full bg-brand/40 grid place-content-center text-slate-900 font-bold text-xl border-4 border-brand/30 shadow-soft hidden"
              >
                {f.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
            
            <div className="font-semibold text-lg text-slate-900">{f.name}</div>
            <div className="text-brand font-medium mt-1">{f.subject}</div>
            <div className="text-sm text-slate-600 mt-2">{f.qualification}</div>
            <div className="text-xs text-slate-500 mt-1">Experience: {f.exp}</div>
          </div>
        ))}
      </div>
    </div>
  )
}




