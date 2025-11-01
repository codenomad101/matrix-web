export default function TopResult2() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold text-blue-500">JEE ADVANCE 2024</h3>
        <img src="/images/msa-logo.svg" alt="MSA Logo" className="h-8" />
      </div>
      <div className="mt-4 text-center">
        <p className="text-6xl font-extrabold text-gray-800">12+</p>
        <p className="text-lg text-gray-600">selections in <span className="font-bold">IITs</span></p>
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500">IIT Guwahati, IIT Kharagpur, IIT Mandi</p>
      </div>
    </div>
  );
}
