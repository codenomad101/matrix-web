import { useState } from 'react';
import { FaBuilding, FaMapMarkerAlt, FaPhoneAlt, FaUser } from 'react-icons/fa';

// Avatar component with fallback
function DirectorImage({ src, name }) {
  const [imageError, setImageError] = useState(false);

  if (imageError || !src) {
    return (
      <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#0a1a67] to-[#1a3a97] border-4 border-white shadow-md flex items-center justify-center">
        <FaUser className="text-white text-6xl" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-md"
      onError={() => setImageError(true)}
    />
  );
}

export default function DirectorsMessage() {
  const directors = [
    {
      name: 'Mr. Nishant Patwardhan',
      role: 'Director, Matrix Science Academy',
      image: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/w_200,h_200,c_fill,q_auto,f_auto/v1764218937/nishant_tifi1f',
    },
    {
      name: 'Mr. Ravindra Yadav',
      role: 'Director, Matrix Science Academy',
      image: null,
    },
    {
      name: 'Mr. Abhishek Mehta',
      role: 'Director, MSA Ravet',
      image: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/w_200,h_200,c_fill,q_auto,f_auto/v1764218938/abhi_mehta_f6h4om',
    },
    {
      name: 'Mr. Algesh Patrike',
      role: 'Director, Matrix Science Academy',
      image: null,
    },
    {
      name: 'Mr. Manoj Kumar',
      role: 'Director, MSA Wakad',
      image: null,
    },
    {
      name: 'Mr. Umesh Bharde',
      role: 'Director, MSA Moshi',
      image: null,
    },
  ];

  const branches = [
    {
      name: 'Pradhikaran Office',
      address: 'Tated horizon building Opp. St. Ursula School Nigdi, Pradhikaran',
      phone: ['91755 57966', '84848 79514'],
    },
    {
      name: 'Nigdi Office',
      address: '3rd Floor, Kohinoor Arcade, Nigdi Chowk',
      phone: ['91755 57966', '70587 40609'],
    },
    {
      name: 'Ravet 1 Office',
      address: '3rd Floor, Blooming Dale, Above Dominos',
      phone: ['84848 07149', '84840 95234'],
    },
    {
      name: 'Ravet 2 Office',
      address: '3rd Floor, Sr No. 95, Bhalchandra Prospera',
      phone: ['84848 25383', '84849 75084'],
    },
    {
      name: 'Chinchwad Office',
      address: '3rd Floor, Geo Spaces, Opp. Elpro Mall, Link Road',
      phone: ['98348 24292', '83295 12658'],
    },
    {
      name: 'Shahunagar Office',
      address: 'Spine Road, Near NKGSB Bank, Purnanagar',
      phone: ['93732 69468', '99221 13988'],
    },
    {
      name: 'Moshi',
      address: 'Bharat Mata Chowk Above Reliance Digital',
      phone: ['96733 06104', '93732 69468'],
    },
    {
      name: 'Wakad Office',
      address: 'Sr No 190/190 Ground Floor, Sunder Height, Near Saraswat Bank, Datta Mandir',
      phone: ['75072 04456', '75179 94456'],
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container-page">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-[#0a1a67] mb-4">Director's Message:</h1>
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
                  <DirectorImage src={director.image} name={director.name} />
                  <div className="absolute inset-0 rounded-full border-2 border-brand animate-pulse"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mt-4">{director.name}</h3>
                <p className="text-gray-500">{director.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-4xl font-bold text-[#0a1a67] mb-8">Branches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {branches.map((branch, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}