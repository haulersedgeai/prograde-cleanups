type WaveDividerProps = {
  fill?: string;
  background?: string;
  flip?: boolean;
  className?: string;
  height?: number;
};

export default function WaveDivider({
  fill = "#fdfbf7",
  background = "transparent",
  flip = false,
  className = "",
  height = 72,
}: WaveDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none w-full leading-[0] ${className}`}
      style={{ background, height }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block h-full w-full"
        style={{ transform: flip ? "scaleY(-1)" : undefined }}
      >
        <path
          d="M0,40 C240,80 480,0 720,32 C960,64 1200,72 1440,24 L1440,80 L0,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
