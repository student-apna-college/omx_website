import Image from "next/image";

export default function LeftContent() {
  return (
    <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col items-center justify-center relative rgb(0,104,83) backdrop-blur-sm overflow-hidden">

      {/* Floating gradient circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full rgb(0,104,83) blur-3xl animate-blob"></div>
      <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full rgb(0,104,83) blur-3xl animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-lg space-y-6 flex flex-col items-center text-center">
        {/* Company Logo */}
        <Image
          src="/images/omx info.png"
          alt="OMX Logo"
          width={200}
          height={120}
          className="mb-4 object-contain"
        />

        <h1 className="text-2xl md:text-4xl font-extrabold text-[var(--color-ink)] drop-shadow-lg">
          OMX Info Management
        </h1>

        <p className="text-sm md:text-base leading-relaxed text-[var(--color-ink)]/90 drop-shadow-md max-h-72 overflow-y-auto">
          Welcome to OMX Info Management (OM Group Company) offering Records & Information Management Services. We can help you manage and secure your company's greatest asset - your business information. We at OMX believe that your business data is only valuable if it is readily accessible when needed.
          <br /><br />
          Safety, compliance, quality, and innovation are at the heart of everything we do. By customizing our processes to your protocols, we make collaboration effortless.
        </p>
      </div>
    </div>
  );
}