import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function FooterPage() {
  const companyLinks = [
    { label: "About Us", href: "#hero-section" },
    { label: "Our Services", href: "#services-section" },
    { label: "Results", href: "#results-section" },
    { label: "Why Us", href: "#whyUs-section" },
  ];

  const helpLinks = [
    { label: "Contact", href: "#contact-section" },
  ];

  return (
    <footer className="bg-[#FAFAFA] text-[#004643]">
      <div className="max-w-6xl mx-auto px-4 md:px-10 py-12">

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Company */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Company</h2>
            <div className="bg-[#004643] w-16 h-0.5 mt-2 mb-4"></div>

            <div className="space-y-3">
              {companyLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-[#004643] text-sm md:text-lg hover:translate-x-2 transition-all cursor-pointer w-fit"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Help */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Get Help</h2>
            <div className="bg-[#004643] w-16 h-0.5 mt-2 mb-4"></div>

            <div className="space-y-3">
              {helpLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-[#004643] text-sm md:text-lg hover:translate-x-2 transition-all cursor-pointer w-fit"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Follow Us</h2>
            <div className="bg-[#004643] w-16 h-0.5 mt-2 mb-4"></div>

            <div className="flex gap-4 mt-4 text-2xl md:text-3xl">
              <a href="https://github.com/chinmay21" target="_blank" aria-label="Instagram">
                <FaInstagram className="text-[#004643] hover:opacity-80 cursor-pointer transition-all" />
              </a>

              <a href="https://github.com/chinmay21" target="_blank" aria-label="X (Twitter)">
                <FaSquareXTwitter className="text-[#004643] hover:opacity-80 cursor-pointer transition-all" />
              </a>

              <a href="https://github.com/chinmay21" target="_blank" aria-label="LinkedIn">
                <FaLinkedin className="text-[#004643] hover:opacity-80 cursor-pointer transition-all" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom line */}
        <div className="mt-10 border-t border-neutral-700 pt-5 text-center text-sm text-neutral-400">
          © {new Date().getFullYear()} NorthPeak Digital. All rights reserved.
        </div>


        <a
        href="https://digitalheroesco.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline text-lg text-[#004643]"
        >
        Built for Digital Heroes Training Task
        </a>

      </div>
    </footer>
  );
}