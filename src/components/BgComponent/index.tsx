export function BgComponent() {
  return (
    <>
      <video
        src="/assets/intro_min.mp4"
        autoPlay
        loop
        muted
        className="absolute w-auto min-w-full min-h-full max-h-none opacity-80 object-cover -z-10 left-0 top-0"
      />
    </>
  );
}
