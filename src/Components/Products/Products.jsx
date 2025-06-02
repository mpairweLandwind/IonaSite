"use client"

import { useState } from "react"
import { ArrowRight, Monitor, Smartphone, Car, ExternalLink, Info } from "lucide-react"

const Products = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  const products = [
    {
      id: 1,
      title: "Driver Management System",
      description:
        "Comprehensive solution for fleet management, driver tracking, and route optimization with real-time analytics.",
      image: "/images/Driver.jpg",
      icon: <Car className="w-8 h-8" aria-hidden="true" />,
      features: ["Real-time GPS tracking", "Driver performance analytics", "Route optimization", "Fuel management"],
      category: "Fleet Management",
      status: "Available",
    },
    {
      id: 2,
      title: "Mobile Applications",
      description:
        "Custom mobile app development for iOS and Android with cutting-edge features and seamless user experience.",
      image: "/images/Phone.jpg",
      icon: <Smartphone className="w-8 h-8" aria-hidden="true" />,
      features: ["Cross-platform development", "Native performance", "Cloud integration", "Push notifications"],
      category: "Mobile Development",
      status: "Available",
    },
    {
      id: 3,
      title: "Desktop Solutions",
      description: "Powerful desktop applications and enterprise software solutions tailored to your business needs.",
      image: "/images/Pc.jpg",
      icon: <Monitor className="w-8 h-8" aria-hidden="true" />,
      features: ["Custom desktop apps", "Enterprise solutions", "Database integration", "Multi-platform support"],
      category: "Desktop Development",
      status: "Available",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Products</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our innovative software solutions designed to transform your business operations and drive growth
            through cutting-edge technology.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              onMouseEnter={() => setHoveredProduct(index)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {product.status}
                </span>
              </div>

              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Overlay Content */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center gap-2 text-white">
                    {product.icon}
                    <span className="text-sm font-medium">{product.category}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {product.title}
                  </h3>
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {product.icon}
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Info className="w-4 h-4" aria-hidden="true" />
                    Key Features
                  </h4>
                  <ul className="space-y-1">
                    {product.features.slice(0, hoveredProduct === index ? 4 : 2).map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button 
                    className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                    aria-label={`Learn more about ${product.title}`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <button 
                    className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors group/btn"
                    aria-label={`Open ${product.title} in new tab`}
                  >
                    <ExternalLink className="w-4 h-4 text-gray-600 group-hover/btn:text-blue-600" aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/20 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how our innovative solutions can help streamline your operations and accelerate your growth.
            Get in touch with our expert team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
              aria-label="Get started with our products"
            >
              Get Started
            </button>
            <button 
              className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              aria-label="View all products"
            >
              View All Products
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "30+", label: "Happy Clients" },
            { number: "5+", label: "Years Experience" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products