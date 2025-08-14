import { CheckCircle, Users, Shield, Clock } from "lucide-react";

export default function About() {
  const achievements = [
    { icon: <Users className="w-6 h-6" />,   title: "50+ Team Members",    description: "Skilled craftspeople and designers" },
    { icon: <Shield className="w-6 h-6" />,  title: "ISO 9001 Certified",   description: "Quality management system" },
    { icon: <Clock className="w-6 h-6" />,   title: "24/7 Support",         description: "Always available for emergencies" },
    { icon: <CheckCircle className="w-6 h-6" />, title: "5000+ Projects",   description: "Successfully completed nationwide" },
  ];

  return (
    <section id="about" className="py-20 bg-neutral-950">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Sunlite Signs
            </h2>
            <p className="text-lg text-neutral-400 mb-6">
              With over 25 years of experience in the signage industry, Sunlite Signs has grown
              from a small local shop to one of the nation's leading wholesale sign manufacturers.
            </p>
            <p className="text-lg text-neutral-400 mb-8">
              We specialize in high-quality, durable signage solutions that help businesses stand out.
              Our state-of-the-art manufacturing facility and experienced team ensure every project
              meets the highest standards of quality and craftsmanship.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {achievements.map((a, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <div className="text-orange-400 mt-1">{a.icon}</div>
                  <div>
                    <h3 className="font-semibold text-white">{a.title}</h3>
                    <p className="text-sm text-neutral-400">{a.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 shadow-lg">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-neutral-400">
                  To provide businesses with exceptional signage solutions that enhance brand visibility
                  and drive growth. We’re committed to quality, innovation, and customer satisfaction in every project.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 shadow-lg">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-orange-400 mr-3" />
                    Industry-leading quality standards
                  </li>
                  <li className="flex items-center text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-orange-400 mr-3" />
                    Competitive wholesale pricing
                  </li>
                  <li className="flex items-center text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-orange-400 mr-3" />
                    Fast turnaround times
                  </li>
                  <li className="flex items-center text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-orange-400 mr-3" />
                    Nationwide shipping available
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
