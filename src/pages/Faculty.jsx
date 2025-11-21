'use client'
export default function Faculty() {
  // Helper function to get image path
  const getImagePath = (name) => {
    const nameMap = {
      'Nishant Patwardhan': ['Mr-Nishant-Patwardhan', 'nishant-patwardhan'],
      'Ravindra Yadav': ['Mr-Ravindra-Yadav', 'ravindra-yadav'],
      'Abhishek Mehta': ['Mr-Abhishek-Mehta', 'abhishek-mehta'],
      'Sagar Shahane': ['sagar-shahane'],
      'Saurabh Pore': ['saurabh-pore'],
      'Akash Kesarkar': ['akash-kesarkar'],
      'Mangilal Vishnoi': ['mangilal-vishnoi'],
      'Deepak Singh': ['deepak-singh'],
      'Shankar Tompe': ['shankar-tompe'],
      'Tushar Khapne': ['tushar-khapne'],
      'Dinesh Srivastava': ['dinesh-srivastava'],
      'Pravin Menkudale': ['pravin-menkudale'],
      'Prasad Hande': ['prasad-hande'],
      'Pankaj Singh': ['pankaj-singh'],
      'Bhagvat Dhesale': ['bhagvat-dhesale'],
      'Sanket Gadade': ['sanket-gadade'],
      'Sneha Malgave': ['sneha-malgave'],
      'Vaishnavi Wadile': ['vaishnavi-wadile'],
      'Pratik Jogalekar': ['pratik-jogalekar'],
      'Mahesh Govind Gholap': ['mahesh-govind-gholap'],
      'Ankita Taware': ['ankita-taware'],
    }
    const paths = nameMap[name] || [name.toLowerCase().replace(/\s+/g, '-')]
    return `/images/extracted/faculty/${paths[0]}.jpg`
  }

  const faculty = [
    { name: 'Nishant Patwardhan', subject: 'Physics', qualification: 'B.Tech (Mech) COEP, NET', exp: '13 Yrs' },
    { name: 'Ravindra Yadav', subject: 'Chemistry', qualification: 'M.Sc (CS), B.Ed (Maths)', exp: '13 Yrs' },
    { name: 'Abhishek Mehta', subject: 'Maths', qualification: 'MCS (Maths)', exp: '23 Yrs' },
    { name: 'Sagar Shahane', subject: 'Biology', qualification: 'M.Sc. (Microbiology), NET - JRF, SET', exp: '15 Yrs' },
    { name: 'Saurabh Pore', subject: 'Chemistry', qualification: 'M.Sc (Physical Chemistry), GATE (AIR 3900), SET', exp: '8 Yrs' },
    { name: 'Akash Kesarkar', subject: 'Physics', qualification: 'M.Tech. (VJTI), GATE (Mech.) 2017', exp: '7 Yrs' },
    { name: 'Mangilal Vishnoi', subject: 'Maths', qualification: 'B.E. (Mech.)', exp: '8 Yrs' },
    { name: 'Deepak Singh', subject: 'Physics', qualification: 'B.Tech (Mech.) COEP', exp: '7 Yrs' },
    { name: 'Shankar Tompe', subject: 'Chemistry', qualification: 'M.Sc (Organic Chemistry), Ex JR Scientist, SET', exp: '5 Yrs' },
    { name: 'Tushar Khapne', subject: 'Physics', qualification: 'M.Tech. (Chemical Engg) NIT NAGPUR', exp: '5 Yrs' },
    { name: 'Dinesh Srivastava', subject: 'Maths', qualification: 'Mathematics B.Tech (IT)', exp: '12 Yrs' },
    { name: 'Pravin Menkudale', subject: 'Chemistry', qualification: 'M.Sc. (Chem.), Ph.D Pursuing', exp: '8 Yrs' },
    { name: 'Prasad Hande', subject: 'Maths', qualification: 'B.Tech (Mech.), Sinhgad College of Engg', exp: '8 Yrs' },
    { name: 'Pankaj Singh', subject: 'Maths', qualification: 'Mechanical Engineering (IIT Bombay)', exp: '11 Yrs' },
    { name: 'Bhagvat Dhesale', subject: 'English', qualification: 'M.A. English | NET, SET | Ph.D.', exp: '11 Yrs' },
    { name: 'Sanket Gadade', subject: 'Computer', qualification: 'B.E. Computer', exp: '6 Yrs' },
    { name: 'Sneha Malgave', subject: 'Chemistry', qualification: 'B.Tech Metallurgy, COEP', exp: '6 Yrs' },
    { name: 'Vaishnavi Wadile', subject: 'Maths', qualification: 'M.Sc (Maths)', exp: '12 Yrs' },
    { name: 'Pratik Jogalekar', subject: 'Physics', qualification: 'Mechanical Engineering (Pursuing)', exp: '2 Yrs' },
    { name: 'Mahesh Govind Gholap', subject: 'Mathematics', qualification: 'M.Sc (Mathematics), MCA, Pune University', exp: '6 Yrs' },
    { name: 'Ankita Taware', subject: 'Biology', qualification: 'M.Sc Botany', exp: '3 Yrs' },
  ]

  return (
    <div className="container-page py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-700 mb-3">Our Faculty</h1>
        <p className="text-slate-600 text-lg">
          150+ Teachers by Choice - Expert educators dedicated to your success
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {faculty.map((f, idx) => (
          <div 
            key={idx} 
            className="card bg-white rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
          >
            {/* Faculty Photo */}
            <div className="relative h-64 w-full">
              <img 
                src={getImagePath(f.name)} 
                alt={f.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to initials if image fails to load
                  e.target.style.display = 'none'
                  const fallback = e.target.nextElementSibling
                  if (fallback) fallback.style.display = 'flex'
                }}
              />
              <div 
                className="absolute inset-0 bg-brand/80 hidden items-center justify-center text-white font-bold text-3xl"
              >
                {f.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
            
            {/* Faculty Details */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-1">{f.name}</h3>
              <div className="text-brand-dark font-semibold mb-3">{f.subject}</div>
              <p className="text-sm text-slate-600 mb-2 leading-relaxed">{f.qualification}</p>
              <div className="text-xs text-slate-500 font-medium">Experience: {f.exp}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
