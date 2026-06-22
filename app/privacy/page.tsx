import type { Metadata } from "next";
import { site } from "@/lib/site";
import { CtaBand, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: `Privacy Policy | ${site.name}`,
  description: `Read the ${site.name} privacy policy — how we collect, use, and protect your information when you request a junk removal quote in ${site.region}, ${site.state}.`,
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-navy">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-sky-deep">Your privacy</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Privacy Policy</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-sky-light/90">
            How {site.name} collects, uses, and protects the information you share with us.
          </p>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <SectionHeading title="What We Collect" eyebrow="Information" center={false} />
          <p className="mt-4 text-lg leading-relaxed text-navy/80">
            When you request a quote or contact {site.name}, we may collect your name, phone number, email address,
            service address, and any photos you submit through our quote form. We only collect what we need to deliver
            an accurate quote and complete your job.
          </p>

          <h3 className="mt-10 text-2xl font-extrabold text-navy">How We Use Your Information</h3>
          <p className="mt-4 text-lg leading-relaxed text-navy/80">
            We use your information to respond to quote requests, schedule and provide service, send job-related
            updates, process payments, and follow up about your experience. We do not use your information for any
            unrelated marketing without your permission.
          </p>

          <h3 className="mt-10 text-2xl font-extrabold text-navy">Sharing Your Information</h3>
          <p className="mt-4 text-lg leading-relaxed text-navy/80">
            We do not sell, rent, or trade your personal information. We only share information when it is necessary
            to provide service — for example, with a payment processor to complete a transaction — or when required
            by law.
          </p>

          <h3 className="mt-10 text-2xl font-extrabold text-navy">Cookies &amp; Analytics</h3>
          <p className="mt-4 text-lg leading-relaxed text-navy/80">
            Our website may use cookies and standard analytics tools to understand how visitors use the site and to
            improve performance. These tools may collect general information such as pages viewed, browser type, and
            approximate location. You can disable cookies in your browser settings at any time.
          </p>

          <h3 className="mt-10 text-2xl font-extrabold text-navy">Data Security</h3>
          <p className="mt-4 text-lg leading-relaxed text-navy/80">
            We take reasonable steps to protect the information you share with us. No method of transmission over the
            internet is 100% secure, but we work to safeguard your data using standard practices.
          </p>

          <h3 className="mt-10 text-2xl font-extrabold text-navy">Your Choices</h3>
          <p className="mt-4 text-lg leading-relaxed text-navy/80">
            You may request that we update or delete the personal information we have on file at any time by
            contacting us using the details below.
          </p>

          <h3 className="mt-10 text-2xl font-extrabold text-navy">Contact Us</h3>
          <p className="mt-4 text-lg leading-relaxed text-navy/80">
            Questions about this policy? Reach {site.name} at{" "}
            <a href={`mailto:${site.email}`} className="font-bold text-sky-deep hover:text-navy">{site.email}</a>{" "}
            or call{" "}
            <a href={site.phoneHref} className="font-bold text-sky-deep hover:text-navy">{site.phone}</a>.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
