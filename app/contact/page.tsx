import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Contact Us</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Have a question or want to work together? Fill out the form and we'll get back to you as soon as possible.
            </p>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" placeholder="Enter your first name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" placeholder="Enter your last name" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea className="min-h-[150px]" id="message" placeholder="Enter your message" />
            </div>
            <Button>Send Message</Button>
          </div>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Our Office</h2>
            <p className="text-gray-500 dark:text-gray-400">
              123 Main Street, Anytown USA 12345
            </p>
          </div>
          <div>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <img
                alt="Map"
                className="object-cover"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}