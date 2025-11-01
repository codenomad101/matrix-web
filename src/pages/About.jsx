export default function About() {
  return (
    <div className="container-page py-10">
      <h1 className="text-3xl font-bold text-slate-700">About Us</h1>
      <p className="mt-4 max-w-3xl text-slate-700">
        Matrix Science Academy (MSA) is dedicated to building strong concepts and habits for
        competitive exams and boards. With a blended learning approach, we offer mentor-led
        classes, quality study material, and rigorous assessments.
      </p>
      <div className="mt-8 grid sm:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="font-semibold">Mission</h3>
          <p className="mt-2 text-slate-600">Deliver accessible, high-quality education with compassion and discipline.</p>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold">Vision</h3>
          <p className="mt-2 text-slate-600">Enable every learner to achieve excellence and freedom through knowledge.</p>
        </div>
      </div>
    </div>
  )
}




