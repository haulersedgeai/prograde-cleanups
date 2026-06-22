import type { Metadata } from "next";
import { site } from "@/lib/site";
import { CtaBand, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${site.name}`,
  description: `Review the ${site.name} terms and conditions — pricing, scheduling, cancellations, and service policies for junk removal and cleanouts in ${site.region}, ${site.state}.`,
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-navy">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-sky-deep">The fine print</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Terms &amp; Conditions</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-sky-light/90">
            The terms that govern your use of {site.name} services across {site.region}, {site.state}.
          </p>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <SectionHeading title="Services Provided" eyebrow="What we do" center={false} />
          <p className="mt-4 text-lg leading-relaxed text-navy/80">
            {site.legalName} provides junk removal, residential and commercial cleanouts, demolition debris removal,
            and Grizzly dumpster bag pickup throughout {site.region}, {site.state}. We do not handle hazardous
            materials, chemicals, or other items prohibited by law or local regulation.
          </p>

          <h3 className="mt-10 text-2xl font-extrabold text-navy">Pricing &amp; Estimates</h3>
          <p className="mt-4 text-lg leading-relaxed text-navy/80">
            Our pricing is volume-based and determined on-site, since the amount of space your items take up in our
            trailer is the most accurate way to price the job. Photo and phone estimates are good-faith approximations
            based on the information you provide. The final price will always be confirmed with you before any work
            begins, and you are free to decline if it does not meet your expectations.
          </p>

          <h3 className="mt-10 text-2xl font-extrabold text-navy">Payment Terms</h3>
          <p className="mt-4 text-lg leading-relaxed text-navy/80">
            Payment is due upon completion of the job unless other arrangements have been agreed to in advance. We
            accept major credit cards, debit cards, and other standard payment methods. Returned payments or chargebacks
            may incur additional fees.
          </p>

          <h3 className="mt-10 text-2xl font-extrabold text-navy">Scheduling &amp; Cancellations</h3>
          <p className="mt-4 text-lg leading-relaxed text-navy/80">
            We ask for at least 24 hours&apos; notice to cancel or reschedule an appointment. Cancellations made with less
            than 24 hours&apos; notice, or jobs where our team arrives at the scheduled time and is unable to perform the
            service for reasons outside our control, may be subject to a trip fee.
          </p>

          <h3 className="mt-10 text-2xl font-extrabold text-navy">Customer Responsibilities</h3>
          <p className="mt-4 text-lg leading-relaxed text-navy/80">
            You are responsible for ensuring our crew has safe and legal access to the items being removed and the
            authority to remove them. Please disclose any special considerations — narrow doorways, stairs, fragile
            surroundings, or hazardous items — before the job begins.
          </p>

          <h3 className="mt-10 text-2xl font-extrabold text-navy">Limitation of Liability</h3>
          <p className="mt-4 text-lg leading-relaxed text-navy/80">
            {site.legalName} takes reasonable care when handling items and working on your property. However, we are
            not liable for pre-existing damage, normal wear and tear, or damage caused by tight access points,
            unstable structures, or undisclosed conditions. Our maximum liability for any claim is limited to the
            amount paid for the specific job in question.
          </p>

          <h3 className="mt-10 text-2xl font-extrabold text-navy">Governing Law</h3>
          <p className="mt-4 text-lg leading-relaxed text-navy/80">
            These terms are governed by the laws of the Commonwealth of Virginia. Any disputes arising from our
            services will be resolved in the appropriate courts of Virginia.
          </p>

          <h3 className="mt-10 text-2xl font-extrabold text-navy">Contact Us</h3>
          <p className="mt-4 text-lg leading-relaxed text-navy/80">
            Questions about these terms? Reach {site.name} at{" "}
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
