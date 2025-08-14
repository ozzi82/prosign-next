export default function AdditionalServices() {
  const items = [
    { title: "Free Production Drawings", text: "Detailed drawings with dimensions." },
    { title: "3D Day & Night Views", text: "Realistic renders for review." },
    { title: "Installation Patterns", text: "Full-size paper patterns." },
    { title: "Power Supplies Included", text: "Transformers/PSU included for LEDs." },
    { title: "Touch-Up Paint", text: "Matching paint for field touch-ups." },
    { title: "3-Year Warranty", text: "Comprehensive coverage." },
  ];
  return (
    <section className="py-16 bg-neutral-950">
      <div className="container">
        <h3 className="text-3xl font-bold text-white mb-8">What’s Included</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-6">
              <div className="text-white font-semibold">{it.title}</div>
              <p className="text-neutral-400 mt-2">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
