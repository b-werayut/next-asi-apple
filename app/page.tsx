import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { MdDevices } from "react-icons/md";
import { BiNetworkChart } from "react-icons/bi";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaCloud } from "react-icons/fa";

export default function Home() {
  const urlimg =
    "https://scontent.fkdt3-1.fna.fbcdn.net/v/t39.30808-6/500227597_122104560512877455_2261583952663327108_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=goLrL3gbXX0Q7kNvwHT1R3S&_nc_oc=AdmdrjJXBvYkqKRRWC8lrKUOKlBVR14nIccYJN_t276tXEd9tLaKh51K13Y7d626rBI&_nc_zt=23&_nc_ht=scontent.fkdt3-1.fna&_nc_gid=tALnRx0AxHrG4vXSRASeyA&oh=00_AfPlOvoD4RM2N2WFlMyGxrCOKA2sgyyqklvzM5JNaMxnCw&oe=684829EF";
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 py-24 text-center">
        <div className="mb-12">
          <div className="flex justify-center">
            <div className="rounded-full overflow-hidden mt-6 border-8 border-white dark:border-gray-800 shadow-lg/40 align-middle z-10">
              <Image
                src={urlimg}
                alt="user img"
                width={270}
                height={270}
                priority
              />
            </div>
          </div>
          {/* <Image 
            src="/logo.svg" 
            alt="ASI Connex Logo" 
            width={120} 
            height={120} 
            className="mx-auto"
          /> */}
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          ASI Connex
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12">
          Connecting Innovation with Simplicity
        </p>
        <a
          href="#contact"
          className="px-8 py-4 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-colors"
        >
          Get in Touch
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About Us
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed text-center">
            ASI Connex is a forward-thinking tech company delivering seamless
            digital connectivity and smart solutions tailored for modern
            businesses.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-16 h-16 mb-6 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-gray-800" />{" "}
                    {/* ✅ Render icon component */}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Our Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            What Our Clients Say
          </h2>

          <div className="space-y-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8 rounded-2xl bg-white shadow-sm">
                <p className="text-xl italic text-gray-600 mb-6">
                   {`"${testimonial.quote}"`}
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Get in Touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Contact Information
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>123 Tech Avenue</p>
                <p>San Francisco, CA 94107</p>
                <p>contact@asiconnex.com</p>
                <p>(555) 123-4567</p>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} ASI Connex. All rights reserved.</p>
      </footer>
    </main>
  );
}

const services = [
  {
    title: "Smart IoT Integration",
    description: "Seamlessly connect your devices...",
    icon: MdDevices,
  },
  {
    title: "Enterprise Networking",
    description: "Build robust, scalable networks...",
    icon: BiNetworkChart,
  },
  {
    title: "IT Consulting",
    description: "Strategic guidance to optimize...",
    icon: BsPersonWorkspace,
  },
  {
    title: "Cloud Solutions",
    description: "Flexible, secure cloud services...",
    icon: FaCloud,
  },
];

const projects = [
  {
    title: "Smart City Infrastructure",
    description: "Integrated IoT network for urban management and monitoring.",
    image: "https://static.vecteezy.com/system/resources/thumbnails/019/046/479/small_2x/smart-grid-cities-png.png",
  },
  {
    title: "Enterprise Cloud Migration",
    description:
      "Seamless transition of legacy systems to modern cloud architecture.",
    image: "https://synoptekmark.b-cdn.net/wp-content/uploads/2019/12/tl-a-practical-guide-to-cloud-migration.png",
  },
  {
    title: "Industrial IoT Platform",
    description:
      "Connected manufacturing solution improving efficiency by 35%.",
    image: "https://png.pngtree.com/png-clipart/20240517/original/pngtree-iot-office-technology-isometric-composition-png-image_15117752.png",
  },
];

const testimonials = [
  {
    quote:
      "ASI Connex transformed our operations with their innovative IoT solutions. Their team's expertise and dedication exceeded our expectations.",
    name: "Sarah Johnson",
    position: "CTO, TechGlobal Inc.",
  },
  {
    quote:
      "Working with ASI Connex has been a game-changer for our business. Their cloud solutions are robust, secure, and perfectly tailored to our needs.",
    name: "Michael Chen",
    position: "Director of IT, Innovate Corp",
  },
];
