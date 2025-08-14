"use client";

import { useState, useMemo, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Home, Info, Phone, FolderKanban } from "lucide-react";
import { motion } from "framer-motion";
import { products, getAllCategories } from "../data/products";

// helper: active route check
const useIsActive = (pathname) => (href) => {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
};

// reusable glow+flip nav item
function GlowNavItem({ href, label, icon, active }) {
  const itemVariants = {
    initial: { rotateX: 0, opacity: 1 },
    hover: { rotateX: -90, opacity: 0 },
  };
  const backVariants = {
    initial: { rotateX: 90, opacity: 0 },
    hover: { rotateX: 0, opacity: 1 },
  };
  const glowVariants = {
    initial: { opacity: 0, scale: 0.8 },
    hover: {
      opacity: 1,
      scale: 2,
      transition: {
        opacity: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
        scale: { duration: 0.5, type: "spring", stiffness: 280, damping: 24 },
      },
    },
  };
  const sharedTransition = { type: "spring", stiffness: 120, damping: 18, duration: 0.45 };

  return (
    <motion.li className="relative" initial="initial" whileHover="hover">
      <motion.div
        className="block rounded-xl overflow-visible group relative"
        style={{ perspective: "600px" }}
      >
        {/* per-item radial glow (brand orange) */}
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none rounded-xl"
          variants={glowVariants}
          style={{
            background:
              "radial-gradient(circle, rgba(255,158,43,0.15) 0%, rgba(255,136,26,0.08) 50%, rgba(255,122,26,0) 100%)",
          }}
        />

        {/* front face */}
        <motion.a
          href={href}
          className={`flex items-center gap-2 px-4 py-2 relative z-10 rounded-xl transition-colors
            ${active ? "text-orange-400" : "text-neutral-300 group-hover:text-white"}`}
          variants={itemVariants}
          transition={sharedTransition}
          style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
        >
          <span className="text-[1rem]">{icon}</span>
          <span className="text-sm font-medium">{label}</span>
        </motion.a>

        {/* back face (flips in) */}
        <motion.a
          href={href}
          className="flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 rounded-xl text-white"
          variants={backVariants}
          transition={sharedTransition}
          style={{
            transformStyle: "preserve-3d",
            transformOrigin: "center top",
            rotateX: 90,
          }}
        >
          <span className="text-[1rem]">{icon}</span>
          <span className="text-sm font-medium">{label}</span>
        </motion.a>
      </motion.div>

      {/* underline for active state */}
      <span
        className={`absolute left-3 right-3 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-orange-400 to-yellow-300 transition-all duration-300 ${
          active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      />
    </motion.li>
  );
}

export default function Header() {
  const pathname = usePathname();
  const isActive = useIsActive(pathname);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prodOpen, setProdOpen] = useState(false);
  const closeTimer = useRef(null);

  const grouped = useMemo(() => {
    return getAllCategories().map((category) => ({
      category,
      items: products.filter((p) => p.category === category),
    }));
  }, []);

  const openProd = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setProdOpen(true);
  };
  const closeProdWithDelay = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setProdOpen(false), 150);
  };

  // Contact moved to the end
  const desktopNav = [
    { href: "/", label: "Home", icon: <Home className="h-5 w-5" /> },
    { href: "/about", label: "About", icon: <Info className="h-5 w-5" /> },
    { href: "/projects", label: "Projects", icon: <FolderKanban className="h-5 w-5" /> },
    { href: "/contact", label: "Contact", icon: <Phone className="h-5 w-5" /> },
  ];

  return (
    <header className="fixed top-0 w-full z-50 border-b border-neutral-800/60 backdrop-blur bg-neutral-950/70">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-white">
            <img src="/logo.png" alt="Sunlite Signs" className="h-8 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {/* ONE shared glowing shell — border removed */}
            <motion.div
              className="relative z-10 flex items-center gap-2 p-2 rounded-2xl shadow-lg overflow-visible bg-transparent"
              initial={{ opacity: 1 }}
              whileHover="hover"
            >
              {/* overall soft aura */}
              <motion.div
                className="pointer-events-none absolute -inset-2 rounded-3xl z-0"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                style={{
                  background:
                    "radial-gradient(80% 80% at 50% 50%, rgba(255,158,43,0.10) 0%, rgba(255,158,43,0.06) 40%, rgba(255,158,43,0.00) 70%)",
                }}
              />

              {/* left: icon links */}
              <ul className="relative z-10 flex items-center gap-2">
                {desktopNav.map((item) => (
                  <GlowNavItem
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    icon={item.icon}
                    active={isActive(item.href)}
                  />
                ))}
              </ul>

              {/* middle: Products trigger */}
              <div className="relative z-20" onMouseEnter={openProd} onMouseLeave={closeProdWithDelay}>
                <motion.button
                  whileHover={{ y: -1 }}
                  className={`relative flex items-center gap-1 px-4 py-2 rounded-xl text-sm transition
                    ${pathname.startsWith("/products")
                      ? "text-orange-400 font-semibold"
                      : "text-neutral-200 hover:text-white"}`}
                  aria-expanded={prodOpen}
                  aria-haspopup="true"
                  type="button"
                >
                  <span className="relative z-10">Products</span>
                  <ChevronDown className="w-4 h-4 relative z-10" />
                  {/* subtle per-item glow */}
                  <motion.span
                    className="absolute inset-0 rounded-xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ opacity: 1, scale: 1.05 }}
                    transition={{ duration: 0.25 }}
                    style={{
                      background:
                        "radial-gradient(circle, rgba(255,158,43,0.14) 0%, rgba(255,136,26,0.08) 50%, rgba(255,122,26,0) 100%)",
                    }}
                  />
                </motion.button>

                {/* dropdown */}
                {prodOpen && (
                  <div
                    className="absolute left-0 top-full w-72 max-h-[70vh] overflow-auto rounded-xl border border-neutral-800 bg-neutral-950 shadow-xl p-2
                               translate-y-1 opacity-0 animate-[fadeIn_.15s_ease-out_forwards]"
                    onMouseEnter={openProd}
                    onMouseLeave={closeProdWithDelay}
                  >
                    <Link
                      href="/products"
                      className="block px-3 py-2 rounded text-neutral-200 hover:bg-neutral-900 font-medium"
                    >
                      All Products
                    </Link>
                    <div className="my-2 h-px bg-neutral-800" />
                    {grouped.map((group) => (
                      <div key={group.category} className="mb-2">
                        <div className="px-3 py-1 text-xs font-semibold text-neutral-400">
                          {group.category}
                        </div>
                        {group.items.map((p) => (
                          <Link
                            key={p.id}
                            href={`/products/${p.id}`}
                            className="block px-5 py-1.5 rounded text-sm text-neutral-300 hover:bg-neutral-900"
                          >
                            {p.title}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* right: Get Quote */}
              <Link
                href="/contact"
                className="relative z-10 inline-flex items-center rounded-xl px-4 py-2 font-semibold text-neutral-900"
                style={{ background: "linear-gradient(90deg,#ffb84d,#ff7a1a)" }}
              >
                Get Quote
              </Link>
            </motion.div>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-neutral-200"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu (Contact moved to last) */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-800">
            <nav className="flex flex-col gap-3">
              <Link
                href="/"
                className={pathname === "/" ? "text-orange-400 font-medium" : "text-neutral-200 hover:text-white"}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={
                  pathname.startsWith("/about") ? "text-orange-400 font-medium" : "text-neutral-200 hover:text-white"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/projects"
                className={
                  pathname.startsWith("/projects") ? "text-orange-400 font-medium" : "text-neutral-200 hover:text-white"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className={
                  pathname.startsWith("/contact") ? "text-orange-400 font-medium" : "text-neutral-200 hover:text-white"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="border-t border-neutral-800 pt-3">
                <Link
                  href="/products"
                  className={
                    pathname.startsWith("/products") ? "text-orange-400 font-medium" : "text-neutral-200 hover:text-white"
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  All Products
                </Link>
                <div className="mt-2 ml-2">
                  {grouped.map((group) => (
                    <div key={group.category} className="mb-2">
                      <div className="text-xs font-semibold text-neutral-400 mb-1">{group.category}</div>
                      {group.items.map((p) => (
                        <Link
                          key={p.id}
                          href={`/products/${p.id}`}
                          className="block text-sm text-neutral-400 hover:text-white py-1"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {p.title}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center self-start rounded-xl px-4 py-2 font-semibold text-neutral-900 mt-2"
                style={{ background: "linear-gradient(90deg,#ffb84d,#ff7a1a)" }}
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </Link>
            </nav>
          </div>
        )}
      </div>

      {/* tiny keyframes for fade-in */}
      <style jsx>{`
        @keyframes fadeIn {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </header>
  );
}
