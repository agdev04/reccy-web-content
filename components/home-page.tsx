"'use client'"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Upload, FileSearch, Lightbulb, MessageCircle } from "lucide-react"

export function HomePageComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="w-1/4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Colour%20Logo%20Small%20Cropped%20(1)-KM3RLKEPt3gHqQzLTX9hatKL1U7R6m.png"
                alt="Reccy Logo"
                width={120}
                height={48}
              />
            </div>
            <nav className="w-3/4 flex justify-end items-center space-x-6 text-sm">
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Login</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">About Us</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Book an Appointment</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Contact Us</Link>
            </nav>
          </div>
          <div className="flex justify-center py-4">
            <nav className="flex space-x-8">
              <Link href="#" className="text-gray-600 hover:text-gray-900 font-medium pb-2 border-b-2 border-transparent hover:border-gray-900 transition-all duration-200">How it Works</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 font-medium pb-2 border-b-2 border-transparent hover:border-gray-900 transition-all duration-200">Privacy & Security</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 font-medium pb-2 border-b-2 border-transparent hover:border-gray-900 transition-all duration-200">News</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Fast & Secure Data Insights & Analysis</h1>
            <p className="text-xl mb-8">Reccy offers the most effective means to give rapid and deep insights into groups of electronic documents.</p>
            <Button size="lg">Get Started</Button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Data Rooms: Oceans of Data expensive to trawl Through</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="mb-4">Data rooms are an essential part of M&A and yet so many people involved in can be the most frustrating part of the process. Everyone needs to be able to find information quickly.</p>
                <p>It's time to stop hunting around file structures, looking for information that isn't there, sourcing data from different places, getting stuck with incomplete data sets and then having to get the finance team involved to help you maintain spreadsheets.</p>
              </div>
              <div className="bg-gray-200 h-64" aria-label="Placeholder for data room illustration"></div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">How Reccy Works</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: Upload, text: "You upload your data room" },
                { icon: FileSearch, text: "Reccy analyses and categorises your files" },
                { icon: Lightbulb, text: "After Reccy's analysis, you get 60 key insights" },
                { icon: MessageCircle, text: "Reccy answers any question and references the source" }
              ].map((step, index) => (
                <Card key={index} className="flex flex-col items-center text-center">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-neutral-900 flex items-center justify-center dark:bg-neutral-50">
                      <step.icon className="w-8 h-8 text-neutral-50 dark:text-neutral-900" />
                    </div>
                  </CardHeader>
                  <CardContent>{step.text}</CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-xl font-bold mb-4">All Within Minutes of Set Up*</p>
              <Button variant="outline">Find Out More</Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Privacy and Security</h2>
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-6">
                <p className="mb-4">Your Reccy room is secure and encrypted at rest. We do not train our systems on your data or pass to any insecure third-party companies. Only those authorised by you can see your documents.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Each room is private and only seen by authorised users</li>
                  <li>You have full administration of access to each room</li>
                  <li>When deleted, a room is permanently erased</li>
                </ul>
                <Button className="mt-4">Read More</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Claim a Free Trial</h2>
            <Card className="max-w-md mx-auto">
              <CardContent className="space-y-4 p-6">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Free room for 14 days</li>
                  <li>Unlimited users</li>
                  <li>Free data room size up to 1Gb</li>
                </ul>
                <div className="flex justify-center space-x-4">
                  <Button>Book a Meeting</Button>
                  <Button variant="outline">Contact Us</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Reccy News</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((item) => (
                <Card key={item}>
                  <CardContent className="h-40 flex items-center justify-center">
                    Lorem ipsum
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-2">Free Trial</h3>
              <p>Set up your first Reccy and have 14 days to trial our solution.</p>
              <Button variant="secondary" className="mt-2 bg-white text-gray-800 hover:bg-gray-200">Book a Trial</Button>
            </div>
            <div>
              <h3 className="font-bold mb-2">Explore</h3>
              <ul className="space-y-1">
                <li><Link href="#" className="hover:underline">How it Works</Link></li>
                <li><Link href="#" className="hover:underline">Pricing</Link></li>
                <li><Link href="#" className="hover:underline">Privacy & Security</Link></li>
                <li><Link href="#" className="hover:underline">News</Link></li>
                <li><Link href="#" className="hover:underline">Reccy Login</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">About Us</h3>
              <p className="mb-2">Created in partnership with an AI pioneer, created in the M&A space and incubated by Unbox.</p>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/recct-white-KjzazYLPimwQeTf1dgMBJM6baClQel.png"
                alt="Reccy Logo"
                width={100}
                height={40}
              />
            </div>
            <div>
              <h3 className="font-bold mb-2">Contact us</h3>
              <p>Reccy AI Limited<br />Fourth Floor<br />Reading Bridge House<br />Reading<br />RG1 8PR</p>
              <Button variant="secondary" className="mt-2 bg-white text-gray-800 hover:bg-gray-200">Book Appointment</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}