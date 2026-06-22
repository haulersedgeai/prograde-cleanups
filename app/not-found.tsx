import Link from "next/link";
export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-32 text-center">
      <h1 className="text-5xl font-extrabold text-navy">404</h1>
      <p className="mt-4 text-navy/70">That page doesn&apos;t exist.</p>
      <Link href="/" className="mt-6 inline-block rounded-full bg-navy px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-navy-dark">Back Home</Link>
    </div>
  );
}
