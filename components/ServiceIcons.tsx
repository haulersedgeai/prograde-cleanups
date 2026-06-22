import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Base({ size = 28, children, ...rest }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

export function CouchIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M5 19v3" />
      <path d="M27 19v3" />
      <path d="M5 19h22" />
      <path d="M7 19v-4a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v4" />
      <path d="M10 12V9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
    </Base>
  );
}

export function FridgeIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="9" y="4" width="14" height="24" rx="2" />
      <path d="M9 14h14" />
      <path d="M12 8v3" />
      <path d="M12 17v3" />
    </Base>
  );
}

export function LeafWaveIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M6 22c4 0 6-2 8-6s4-10 12-10c0 8-2 14-6 18s-10 4-14-2z" />
      <path d="M6 22c2-4 6-8 12-10" />
    </Base>
  );
}

export function BoxStackIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="5" y="17" width="10" height="9" rx="1" />
      <rect x="17" y="17" width="10" height="9" rx="1" />
      <rect x="11" y="6" width="10" height="9" rx="1" />
      <path d="M5 21h10" />
      <path d="M17 21h10" />
      <path d="M11 10h10" />
    </Base>
  );
}

export function HammerIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M14 6h10l3 4-3 4H14z" />
      <path d="M14 10l-9 9a2.83 2.83 0 1 0 4 4l9-9" />
    </Base>
  );
}

export function RecycleIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M11 7l-3 5 3 5" />
      <path d="M21 7l3 5-3 5" />
      <path d="M16 21l-3 5h6l-3-5" />
      <path d="M8 12h16" />
    </Base>
  );
}

export function GenericIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M6 26V12l10-6 10 6v14z" />
      <path d="M12 26v-8h8v8" />
    </Base>
  );
}

const slugIconMap: Record<string, (props: IconProps) => React.ReactElement> = {
  "furniture-removal": CouchIcon,
  "mattress-removal": CouchIcon,
  "appliance-removal": FridgeIcon,
  "hot-tub-removal": FridgeIcon,
  "yard-waste-removal": LeafWaveIcon,
  "household-junk-removal": BoxStackIcon,
  "move-out-cleanouts": BoxStackIcon,
  "garage-cleanouts": BoxStackIcon,
  "basement-cleanouts": BoxStackIcon,
  "whole-house-cleanouts": BoxStackIcon,
  "estate-cleanouts": BoxStackIcon,
  "hoarder-cleanouts": BoxStackIcon,
  "foreclosure-eviction-cleanouts": BoxStackIcon,
  "commercial-junk-removal": BoxStackIcon,
  "construction-debris-removal": HammerIcon,
  "scrap-metal-wood-removal": RecycleIcon,
};

export function ServiceIcon({ slug, size = 28, className }: { slug: string; size?: number; className?: string }) {
  const Icon = slugIconMap[slug] ?? GenericIcon;
  return <Icon size={size} className={className} />;
}
