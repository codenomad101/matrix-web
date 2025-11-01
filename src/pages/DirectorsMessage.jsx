import { FaBuilding, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

export default function DirectorsMessage() {
  const directors = [
    {
      name: 'Mr. Nishant Patwardhan',
      role: 'Director, Matrix Science Academy',
      image: '/images/extracted/faculty/Mr-Nishant-Patwardhan.jpg',
    },
    {
      name: 'Mr. Ravindra Yadav',
      role: 'Director, Matrix Science Academy',
      image: '/images/extracted/faculty/Mr-Ravindra-Yadav.jpg',
    },
    {
      name: 'Mr. Abhishek Mehta',
      role: 'Director, MSA Ravet',
      image: '/images/extracted/faculty/Mr-Abhishek-Mehta.jpg',
    },
    {
      name: 'Mr. Algesh Patrike',
      role: 'Director, Matrix Science Academy',
      image: '/images/extracted/faculty/Mr-Algesh-Patrike.jpg',
    },
    {
      name: 'Mr. Manoj Kumar',
      role: 'Director, MSA Wakad',
      image: '/images/extracted/faculty/Mr-Manoj-Kumar.jpg',
    },
    {
      name: 'Mr. Umesh Bharde',
      role: 'Director, MSA Moshi',
      image: '/images/extracted/faculty/Mr-Umesh-Bharde.jpg',
    },
  ];

  const branches = [
    {
      name: 'Pradhikaran Office',
      address: 'Tated horizon building Opp. St. Ursula School Nigdi, Pradhikaran',
      phone: ['91755 57966', '84848 79514'],
      qr: '/images/extracted/faculty/qr-code.jpg',
    },
    {
      name: 'Nigdi Office',
      address: '3rd Floor, Kohinoor Arcade, Nigdi Chowk',
      phone: ['91755 57966', '70587 40609'],
      qr: '/images/extracted/faculty/qr-code.jpg',
    },
    {
      name: 'Ravet 1 Office',
      address: '3rd Floor, Blooming Dale, Above Dominos',
      phone: ['84848 07149', '84840 95234'],
      qr: '/images/extracted/faculty/qr-code.jpg',
    },
    {
      name: 'Ravet 2 Office',
      address: '3rd Floor, Sr No. 95, Bhalchandra Prospera',
      phone: ['84848 25383', '84849 75084'],
      qr: '/images/extracted/faculty/qr-code.jpg',
    },
    {
      name: 'Chinchwad Office',
      address: '3rd Floor, Geo Spaces, Opp. Elpro Mall, Link Road',
      phone: ['98348 24292', '83295 12658'],
      qr: '/images/extracted/faculty/qr-code.jpg',
    },
    {
      name: 'Shahunagar Office',
      address: 'Spine Road, Near NKGSB Bank, Purnanagar',
      phone: ['93732 69468', '99221 13988'],
      qr: '/images/extracted/faculty/qr-code.jpg',
    },
    {
      name: 'Moshi',
      address: 'Bharat Mata Chowk Above Reliance Digital',
      phone: ['96733 06104', '93732 69468'],
      qr: '/images/extracted/faculty/qr-code.jpg',
    },
    {
      name: 'Wakad Office',
      address: 'Sr No 190/190 Ground Floor, Sunder Height, Near Saraswat Bank, Datta Mandir',
      phone: ['75072 04456', '75179 94456'],
      qr: '/images/extracted/faculty/qr-code.jpg',
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container-page">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-slate-700 mb-4">Director's Message:</h1>
          <p className="text-gray-700 leading-relaxed">
            We are teachers by our choice and we passionately do our job. Our Aim is not to run the classes conventionally, but we
            are here to make a change and make a strong impact in the field of 8th to 12th Education in Maharashtra. We believe
            education is the key to success. <strong>Matrix Science Academy</strong> Aims to Provide Quality and Affordable Education to
            all the students via offline as well as online mode. We have young and highly qualified teachers who can drive the
            students for their career.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
            {directors.map((director, index) => (
              <div key={index} className="text-center">
                <div className="relative inline-block">
                  <img
                    src={director.image}
                    alt={director.name}
                    className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-md"
                  />
                  <div className="absolute inset-0 rounded-full border-2 border-brand animate-pulse"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mt-4">{director.name}</h3>
                <p className="text-gray-500">{director.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-4xl font-bold text-slate-700 mb-8">Branches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {branches.map((branch, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex items-center">
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-brand-dark flex items-center">
                    <FaBuilding className="mr-3" /> {branch.name}
                  </h3>
                  <p className="text-gray-600 mt-3 flex items-start">
                    <FaMapMarkerAlt className="mr-3 mt-1 flex-shrink-0" />
                    <span>{branch.address}</span>
                  </p>
                  <p className="text-gray-600 mt-3 flex items-center">
                    <FaPhoneAlt className="mr-3" />
                    {branch.phone.join(' | ')}
                  </p>
                </div>
                <div className="ml-6 flex-shrink-0">
                  <img src={branch.qr} alt="QR Code" className="w-24 h-24" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}