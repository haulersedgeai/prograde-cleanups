import Link from "next/link";
export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-32 text-center">
      <h1 className="text-5xl font-bold text-ink">404</h1>
      <p className="mt-4 text-slate-600">That page doesn&apos;t exist.</p>
      <Link href="/" className="mt-6 inline-block rounded-lg bg-brand px-6 py-3 font-semibold text-white">Back Home</Link>
    </div>
  );
}
