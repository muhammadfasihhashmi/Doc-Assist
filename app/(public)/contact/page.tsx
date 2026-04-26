import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email us",
    value: "support@docassist.pk",
    sub: "We reply within 24 hours",
  },
  {
    icon: Phone,
    label: "Call us",
    value: "+92 300 1234567",
    sub: "Mon–Fri, 9am to 6pm",
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: "Lahore, Punjab, Pakistan",
    sub: "Head office location",
  },
  {
    icon: Clock,
    label: "Working hours",
    value: "Mon – Fri: 9am – 6pm",
    sub: "Sat: 10am – 2pm",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* ── HERO ── */}
      <section className="bg-gradient-to-b from-violet-50/60 to-white px-4 sm:px-6 lg:px-8 py-16 border-b border-violet-100">
        <div className="max-w-6xl mx-auto text-center">
          <Badge
            variant="secondary"
            className="bg-violet-100 text-violet-800 hover:bg-violet-100 mb-5 px-4 py-1.5 text-xs font-medium rounded-full"
          >
            Get in touch
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-violet-950 tracking-tight mb-4">
            We&apos;d love to hear from you
          </h1>
          <p className="text-base text-slate-500 max-w-md mx-auto leading-relaxed">
            Have a question, a partnership idea, or just need help? Our team is
            here and ready to respond.
          </p>
        </div>
      </section>

      {/* ── CONTACT INFO ── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-violet-100 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          {contactInfo.map((info) => {
            const Icon = info.icon;
            return (
              <Card
                key={info.label}
                className="border-violet-200 shadow-none hover:border-violet-300 transition-colors"
              >
                <CardContent className="pt-5 pb-5 px-4">
                  <div className="w-9 h-9 bg-violet-100 rounded-lg flex items-center justify-center mb-3">
                    <Icon size={16} className="text-violet-800" />
                  </div>
                  <p className="text-xs font-semibold text-violet-950 mb-0.5">
                    {info.label}
                  </p>
                  <p className="text-xs text-violet-800 font-medium mb-0.5">
                    {info.value}
                  </p>
                  <p className="text-xs text-slate-400">{info.sub}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <form>
            <div>
              <Card className="border-violet-200 shadow-sm bg-white">
                <CardContent className="pt-6 pb-6 px-6">
                  <h3 className="text-base font-bold text-violet-950 mb-5">
                    Send us a message
                  </h3>
                  <form className="flex flex-col gap-4">
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <Label className="text-xs font-medium text-violet-950">
                          Full name
                        </Label>
                        <Input
                          type="text"
                          placeholder="Muhammad Ali"
                          className="border-violet-200 focus-visible:ring-violet-400 text-sm placeholder:text-slate-400"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <Label className="text-xs font-medium text-violet-950">
                          Email address
                        </Label>
                        <Input
                          type="email"
                          placeholder="you@example.com"
                          className="border-violet-200 focus-visible:ring-violet-400 text-sm placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                      <Label className="text-xs font-medium text-violet-950">
                        Phone number{" "}
                        <span className="text-slate-400 font-normal">
                          (optional)
                        </span>
                      </Label>
                      <Input
                        type="tel"
                        placeholder="+92 300 0000000"
                        className="border-violet-200 focus-visible:ring-violet-400 text-sm placeholder:text-slate-400"
                      />
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col gap-1.5">
                      <Label className="text-xs font-medium text-violet-950">
                        Subject
                      </Label>
                      <Input
                        type="text"
                        placeholder="How can we help you?"
                        className="border-violet-200 focus-visible:ring-violet-400 text-sm placeholder:text-slate-400"
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <Label className="text-xs font-medium text-violet-950">
                        Message
                      </Label>
                      <Textarea
                        placeholder="Tell us more about your question or issue..."
                        className="border-violet-200 focus-visible:ring-violet-400 text-sm placeholder:text-slate-400 min-h-[120px] resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      className="w-full bg-violet-800 hover:bg-violet-900 text-white text-sm font-semibold rounded-lg shadow-none mt-1"
                    >
                      Send message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </form>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 border-t border-violet-100 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Quick answers to some common questions about DocAssist
            </p>
          </div>

          <div className="space-y-4">
            <Card className="border-violet-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-slate-900 mb-2">
                  How do I book an appointment?
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Simply search for your doctor or specialty, choose a time that
                  works for you, and confirm your booking. You’ll receive an SMS
                  and email confirmation immediately.
                </p>
              </CardContent>
            </Card>

            <Card className="border-violet-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-slate-900 mb-2">
                  Can I reschedule or cancel my appointment?
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Yes, you can reschedule or cancel up to 2 hours before your
                  appointment time through the “My Bookings” section in your
                  account.
                </p>
              </CardContent>
            </Card>

            <Card className="border-violet-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-slate-900 mb-2">
                  Are the doctor profiles verified?
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Absolutely. All doctors on DocAssist undergo a verification
                  process to ensure their credentials and specializations are
                  authentic.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
