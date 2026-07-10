export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-32">

      <p className="text-emerald-400 font-semibold mb-4">
        Sports Analytics • Machine Learning • Data Science
      </p>

      <h1 className="text-6xl font-bold mb-6 leading-tight">
        Hi, I'm Josh.
      </h1>

      <p className="text-xl text-gray-400 max-w-3xl mb-10">
        I build predictive sports models and interactive analytics
        applications that transform complex datasets into actionable
        insights.
      </p>

      <div className="flex gap-5">

        <button className="bg-emerald-500 hover:bg-emerald-400 px-6 py-3 rounded-lg font-semibold transition">
          View Projects
        </button>

        <button className="border border-gray-700 px-6 py-3 rounded-lg hover:bg-slate-800 transition">
          Resume
        </button>

      </div>

    </section>
  );
}