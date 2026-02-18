"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-20 w-56">
              <Image src="/images/ardalogo.png" alt="ARDA Seeds Logo" fill className="object-contain" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link href="/" className="px-3 py-2 text-gray-700 hover:text-green-700">
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center px-3 py-2 text-gray-700 hover:text-green-700">
                  Products <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/products/maize">Maize</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products/wheat">Wheat</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products/soybeans">Soybeans</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products/groundnuts">Groundnuts</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products/sunflower">Sunflower</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products">All Products</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center px-3 py-2 text-gray-700 hover:text-green-700">
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/services/outgrowing">Outgrowing</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/agronomy" className="px-3 py-2 text-gray-700 hover:text-green-700">
              Agronomy
            </Link>
            <Link href="/about" className="px-3 py-2 text-gray-700 hover:text-green-700">
              About Us
            </Link>
            <Link href="/news" className="px-3 py-2 text-gray-700 hover:text-green-700">
              News
            </Link>
            <Link href="/contact" className="px-3 py-2 text-gray-700 hover:text-green-700">
              Contact
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="outline" className="border-green-700 text-green-700 hover:bg-green-50">
              <Link href="/quote">Order Seed</Link>
            </Button>
            <Button asChild className="bg-green-700 hover:bg-green-800">
              <Link href="/register">Grower Registration</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className="px-3 py-2 text-gray-700 hover:text-green-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <div className="border-t pt-2">
                <p className="px-3 font-medium text-sm text-gray-500">Products</p>
                <Link
                  href="/products/maize"
                  className="px-6 py-2 text-gray-700 hover:text-green-700 block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Maize
                </Link>
                <Link
                  href="/products/wheat"
                  className="px-6 py-2 text-gray-700 hover:text-green-700 block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Wheat
                </Link>
                <Link
                  href="/products/soybeans"
                  className="px-6 py-2 text-gray-700 hover:text-green-700 block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Soybeans
                </Link>
                <Link
                  href="/products/groundnuts"
                  className="px-6 py-2 text-gray-700 hover:text-green-700 block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Groundnuts
                </Link>
                <Link
                  href="/products/sunflower"
                  className="px-6 py-2 text-gray-700 hover:text-green-700 block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sunflower
                </Link>
                <Link
                  href="/products/other"
                  className="px-6 py-2 text-gray-700 hover:text-green-700 block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Other Crops
                </Link>
                <Link
                  href="/products"
                  className="px-6 py-2 text-gray-700 hover:text-green-700 block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  All Products
                </Link>
              </div>
              <div className="border-t pt-2">
                <p className="px-3 font-medium text-sm text-gray-500">Services</p>
                <Link
                  href="/services/outgrowing"
                  className="px-6 py-2 text-gray-700 hover:text-green-700 block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Outgrowing
                </Link>
                <Link
                  href="/services/soil-testing"
                  className="px-6 py-2 text-gray-700 hover:text-green-700 block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Soil Testing
                </Link>
              </div>
              <Link
                href="/agronomy"
                className="px-3 py-2 text-gray-700 hover:text-green-700 border-t"
                onClick={() => setIsMenuOpen(false)}
              >
                Agronomy
              </Link>
              <Link
                href="/about"
                className="px-3 py-2 text-gray-700 hover:text-green-700"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/news"
                className="px-3 py-2 text-gray-700 hover:text-green-700"
                onClick={() => setIsMenuOpen(false)}
              >
                News
              </Link>
              <Link
                href="/contact"
                className="px-3 py-2 text-gray-700 hover:text-green-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-3 pt-3 border-t">
                <Button asChild variant="outline" className="border-green-700 text-green-700">
                  <Link href="/quote" onClick={() => setIsMenuOpen(false)}>
                    Request Quote
                  </Link>
                </Button>
                <Button asChild className="bg-green-700 hover:bg-green-800">
                  <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                    Register
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
