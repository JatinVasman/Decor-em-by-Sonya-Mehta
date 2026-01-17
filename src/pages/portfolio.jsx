import { useState, useEffect, useCallback } from "react";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUp, X, ChevronLeft, ChevronRight } from "lucide-react";
import AnimationWrapper from "../components/AnimationWrapper";
import portfolioData from "../data/portfolio.json";

/**
 * Portfolio Page
 * Showcase of completed interior design projects
 * Houston's luxury design transformations
 */
export default function Portfolio() {
  const [filter, setFilter] = useState("kitchens");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const categories = [
    { id: "kitchens", label: "Kitchens" },
    { id: "living", label: "Living Rooms" },
    { id: "bedrooms", label: "Bedrooms" },
    { id: "bathrooms", label: "Bathrooms" },
    { id: "housepaint", label: "House Paint" },
    { id: "dining", label: "Dining" },
  ];

  const filteredProjects = portfolioData.filter(
    (project) => project.category === filter,
  );

  // Flatten images for the current category to allow navigation
  const allImages = filteredProjects.flatMap((p) => p.images);

  const handleNext = useCallback(
    (e) => {
      e?.stopPropagation();
      setSelectedIndex((prev) => (prev + 1) % allImages.length);
    },
    [allImages.length],
  );

  const handlePrev = useCallback(
    (e) => {
      e?.stopPropagation();
      setSelectedIndex(
        (prev) => (prev - 1 + allImages.length) % allImages.length,
      );
    },
    [allImages.length],
  );

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setSelectedIndex(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  // Scroll to top functionality
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setShowScrollTop(window.scrollY > 500);
    });
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <NextSeo
        title="Portfolio | Decor'em by Sonya Mehta — Interior Design & Renovation in Houston"
        description="Browse the portfolio of Decor'em by Sonya Mehta — Houston's leading interior design and renovation practice. Discover our work across homes, kitchens, and commercial spaces."
        openGraph={{
          title: "Portfolio | Decor'em by Sonya Mehta",
          description: "Spaces That Speak Elegance and Emotion.",
          images: [{ url: "/images/hero/portfolio.jpg" }],
        }}
      />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/portfolio.jpg"
            alt="Portfolio collage of interior designs"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-dark/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1
            className="display-1 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Where Vision Meets Reality
          </motion.h1>
          <motion.p
            className="body-xl text-[#FAF9F6]/90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore our collection of transformative designs across Houston —
            each space crafted with elegance, precision, and heart.
          </motion.p>
        </div>

        {/* SEO Keywords (hidden) */}
        <div className="sr-only">
          interior design portfolio Houston, luxury interiors, home renovation
          projects, Sonya Mehta designs
        </div>
      </section>

      {/* Category Filter Bar */}
      <section className="py-12 bg-[#FAF9F6] sticky top-20 z-40 border-b border-[#E4DED7]">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`relative px-6 py-2 text-sm md:text-base font-medium transition-colors ${
                  filter === category.id
                    ? "text-[#C9A76F]"
                    : "text-[#2B2B2B] hover:text-[#C9A76F]"
                }`}
              >
                {category.label}
                {filter === category.id && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A76F]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="py-32 bg-[#FAF9F6]">
        <div className="container-custom max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allImages.map((image, globalIndex) => (
              <motion.div
                key={`${filter}-${globalIndex}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (globalIndex % 12) * 0.05 }}
                className="group cursor-pointer"
                onClick={() => setSelectedIndex(globalIndex)}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src={image}
                    alt={`${filter} design`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="body-lg text-[#3E3E3E]">
                No projects found in this category. Please select another
                filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-[#C3B8A7]">
        <div className="container-custom max-w-5xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#C9A76F] text-2xl">
                  ★
                </span>
              ))}
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif italic text-white drop-shadow-sm">
              Client Testimonials
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white/10 backdrop-blur-sm p-8 rounded-sm"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-white/95 text-lg italic mb-6 leading-relaxed drop-shadow-sm">
                "It was an absolute pleasure to work with Sonya. She was
                incredible at blending our existing decor with our desire for a
                new look. She knows her stuff and helped us transform our house
                into a more modern and cozy space."
              </p>
              <p className="text-white font-semibold tracking-wide">
                — A. Azhdarinia
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-sm p-8 rounded-sm"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-white/95 text-lg italic mb-6 leading-relaxed drop-shadow-sm">
                "Sonya and her team were absolutely amazing! The entire team's
                attention to detail was phenomenal. Sonya was always attentive,
                responsive and guided my choices in a respectful and welcoming
                way."
              </p>
              <p className="text-white font-semibold tracking-wide">
                — Kalyani
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-br from-[#C9A76F] to-[#A88650]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-2xl text-[#FAF9F6] mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="body-xl text-[#FAF9F6]/90 mb-10">
              Let's bring your vision to life with expert design and
              personalized service.
            </p>

            {/* Button */}
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href="/contact"
                className="inline-block px-10 py-4 bg-[#FAF9F6] text-[#2B2B2B] font-semibold rounded-sm hover:bg-white transition-all duration-300 shadow-lg"
              >
                Book a Consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-[#C9A76F] text-white rounded-full shadow-lg hover:bg-[#A88650] transition-all duration-300 flex items-center justify-center"
          whileHover={{ y: -4 }}
        >
          <ArrowUp size={20} />
        </motion.button>
      )}

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center pt-20 pb-10 px-4"
          onClick={() => setSelectedIndex(null)}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-0 right-0 z-60 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-0 z-60 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors -ml-4 md:ml-0"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 z-60 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors -mr-4 md:mr-0"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>

            {/* Full View Image */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full max-w-7xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={allImages[selectedIndex]}
                alt="Full size view"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              {selectedIndex + 1} / {allImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
