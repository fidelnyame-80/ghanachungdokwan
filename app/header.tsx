"use client";

import { useRef, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <header
      className="relative z-10 border-b border-black/10 bg-white"
      onKeyDown={(event) => {
        if (event.key === "Escape" && isOpen) {
          setIsOpen(false);
          menuButton.current?.focus();
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsOpen(false);
        }
      }}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" className="text-xl tracking-tight sm:text-2xl">
          ghanachungdokwan
        </Link>
        <button
          ref={menuButton}
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="site-navigation"
          onClick={() => setIsOpen(!isOpen)}
          className="flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {isOpen ? (
              <path d="m6 6 12 12M6 18 18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      <nav
        id="site-navigation"
        aria-label="Main navigation"
        hidden={!isOpen}
        className="absolute inset-x-0 top-full border-b border-black/10 bg-white px-5 py-4 shadow-sm sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <a
            href="#hero-heading"
            onClick={() => setIsOpen(false)}
            className="block rounded-lg px-3 py-3 text-xl hover:bg-black/5 focus-visible:outline-2"
          >
            Home
          </a>
          <a
            href="#why-train"
            onClick={() => setIsOpen(false)}
            className="block rounded-lg px-3 py-3 text-xl hover:bg-black/5 focus-visible:outline-2"
          >
            Why train
          </a>
          <a
            href="#programs"
            onClick={() => setIsOpen(false)}
            className="block rounded-lg px-3 py-3 text-xl hover:bg-black/5 focus-visible:outline-2"
          >
            Programs
          </a>
        </div>
      </nav>
    </header>
  );
}
