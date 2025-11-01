export default function TopResult1() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold text-orange-500">MHT-CET 2024</h3>
        <img src="/images/msa-logo.svg" alt="MSA Logo" className="h-8" />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4 text-center">
        <div >
          <p className="text-5xl font-extrabold text-gray-800">123</p>
          <p className="text-sm text-gray-600">scored <span className="font-bold">98+</span> percentile</p>
        </div>
        <div>
          <p className="text-5xl font-extrabold text-gray-800">60</p>
          <p className="text-sm text-gray-600">scored <span className="font-bold">99+</span> percentile</p>
        </div>
      </div>
    </div>
  );
}
