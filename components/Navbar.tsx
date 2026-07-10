export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
      <h1 className="text-xl font-bold">
        Josh Silverman
      </h1>

      <div className="flex gap-8 text-gray-300">
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Resume</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}