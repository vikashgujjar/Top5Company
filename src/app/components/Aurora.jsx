// Fixed iridescent backdrop behind the whole page, so every glass panel has colour to blur.
const Aurora = () => (
  <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div className="glow -left-[15%] -top-[20%] h-[70vmax] w-[70vmax] animate-blob bg-brand-cyan/[0.22]" />
    <div className="glow -right-[20%] -top-[10%] h-[70vmax] w-[70vmax] animate-blob bg-brand-violet/[0.22] [animation-delay:-7s]" />
    <div className="glow -bottom-[30%] left-[20%] h-[70vmax] w-[70vmax] animate-blob bg-brand-pink/[0.16] [animation-delay:-14s]" />
    <div className="glow -bottom-[20%] -right-[10%] h-[50vmax] w-[50vmax] animate-blob bg-brand-amber/[0.14] [animation-delay:-4s]" />
  </div>
);

export default Aurora;
