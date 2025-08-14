// app/projects/page.js
import ProjectGallery from "./ProjectGallery";

export const metadata = {
  title: "Projects & References | Sunlite Signs",
  description:
    "Recent wholesale signage installations across retail, corporate, professional, and restaurant environments.",
};

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen bg-neutral-950 text-neutral-100 overflow-hidden">
      {/* top separator line */}
      <div
        className="absolute inset-x-0 top-0 h-[2px] md:h-[3px] z-10"
        style={{ background: "linear-gradient(90deg,#ffb84d 0%,#ff7a1a 40%,#ffb84d 70%,#ffd27a 100%)" }}
      />

      {/* liquid background: deep gradient + soft glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a] via-[#0a0e17] to-[#09090b]" />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vmax] h-[140vmax] rounded-full opacity-20 blur-3xl animate-[spin_40s_linear_infinite]"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(255,172,64,0.18), rgba(80,170,255,0.18), rgba(255,172,64,0.18))",
          }}
        />
        <div
          className="absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full blur-3xl opacity-25"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(255,172,64,0.22), rgba(255,172,64,0.00) 60%)",
          }}
        />
        <div
          className="absolute -bottom-28 -right-20 w-[460px] h-[460px] rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(80,170,255,0.20), rgba(80,170,255,0.00) 60%)",
          }}
        />
      </div>

      <ProjectGallery />
    </main>
  );
}
