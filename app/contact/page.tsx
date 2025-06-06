import type { Metadata } from "next"
import ContactForm from "@/components/contact-form"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | ARDA Seeds",
  description:
    "Get in touch with ARDA Seeds. Contact our team for inquiries about our products, services, or any other information you need.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
      <p className="text-gray-600 mb-8">
        Get in touch with our team for any inquiries about our products, services, or any other information you need.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>

        <div>
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-green-700 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-600">ARDA Seeds (PVT) Ltd</p>
                  <p className="text-gray-600">Harare, Zimbabwe</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-5 w-5 text-green-700 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">0242 704924</p>
                  <p className="text-gray-600">08010166</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-5 w-5 text-green-700 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">info@arda.co.zw</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-5 w-5 text-green-700 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Business Hours</p>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Saturday: 8:00 AM - 12:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Our Retail Partners</h2>
            <div className="space-y-4">
              <div>
                <p className="font-medium">Farmer City</p>
                <p className="text-gray-600">Multiple locations across Zimbabwe</p>
                <p className="text-gray-600">Contact: 0242 XXXXXX</p>
              </div>

              <div>
                <p className="font-medium">Electrosales</p>
                <p className="text-gray-600">Harare, Bulawayo, Mutare</p>
                <p className="text-gray-600">Contact: 0242 XXXXXX</p>
              </div>

              <div>
                <p className="font-medium">Other Authorized Dealers</p>
                <p className="text-gray-600">Find our products at agricultural supply stores nationwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Location Map</h2>
        <div className="bg-gray-200 h-[400px] rounded-lg flex items-center justify-center">
          <p className="text-gray-600">Map will be embedded here</p>
        </div>
      </div>
    </div>
  )
}
