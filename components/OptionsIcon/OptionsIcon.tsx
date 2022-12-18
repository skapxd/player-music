export function OptionsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={8}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle r={3.467} transform="matrix(1 0 0 -1 3.467 4)" fill="#7D8498" />
      <circle r={3.467} transform="matrix(1 0 0 -1 12 4)" fill="#7D8498" />
      <circle r={3.467} transform="matrix(1 0 0 -1 20.533 4)" fill="#7D8498" />
    </svg>
  );
}
