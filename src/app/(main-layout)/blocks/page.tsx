import CtaSections from "../components/CtaSections";
import Landingpageone from "../components/Landingpageone";
import Landingpagetwo from "../components/Landingpagetwo";
import Landingpagethree from "../components/Landingpagethree";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Dividing line below navbar */}
      <div className="w-full h-px bg-border fixed top-12 left-0 z-[80]"></div>

      {/* Content wrapper with proper spacing */}
      <div className="relative pt-0 overflow-x-hidden">
        {/* Content with full width - components handle their own layout */}
        <div className="w-full overflow-x-hidden">
          {/* Render your section components - they handle their own padding */}
          <CtaSections isFirstInstance={true} />
          <CtaSections variant="email" />
          <CtaSections />
          <CtaSections variant="cta" />
          <CtaSections variant="cta2" />
          <Landingpageone />
          <Landingpagetwo />
          <Landingpagethree />

          {/* Footer Divider */}
          <div className="mx-[8vw] mt-16 mb-16">
            <hr className="border-t border-border" />
          </div>
        </div>
      </div>
    </div>
  );
}
