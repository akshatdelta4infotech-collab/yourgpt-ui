// src/config/previews.tsx
import React from "react";
import CtaSections from "@/app/(main-layout)/components/CtaSections";
import LandingOne from "@/app/(main-layout)/components/Landingpageone";
import LandingTwo from "@/app/(main-layout)/components/Landingpagetwo";
import LandingThree from "@/app/(main-layout)/components/Landingpagethree";
import InstaLandingpage from "@/app/(main-layout)/components/InstaLandingpage";

import cta_default from "@/preview_code/cta_default.json";
import cta_email from "@/preview_code/cta_email.json";
import cta_variant from "@/preview_code/cta_variant.json";
import cta_variant2 from "@/preview_code/cta_variant2.json";
import landingpageone from "@/preview_code/landingpageone.json";
import landingpagetwo from "@/preview_code/landingpagetwo.json";
import landingpagethree from "@/preview_code/landingpagethree.json";

// ✅ Extend type with `code`
export type PreviewItem = {
  id: string;
  label: string;
  render: (props?: { hideHeader?: boolean }) => React.ReactNode;
  code: string;
};

export const previews: PreviewItem[] = [
  {
    id: "cta-default",
    label: "CTA Default",
    render: (props) => <CtaSections variant="default" {...props} />,
    code: cta_default.code,
  },
  {
    id: "cta-email",
    label: "CTA Email",
    render: (props) => <CtaSections variant="email" {...props} />,
    code: cta_email.code,
  },
  {
    id: "cta-variant",
    label: "CTA Variant",
    render: (props) => <CtaSections variant="cta" {...props} />,
    code: cta_variant.code,
  },
  {
    id: "cta-variant2",
    label: "CTA Variant 2",
    render: (props) => <CtaSections variant="cta2" {...props} />,
    code: cta_variant2.code,
  },
  {
    id: "landing-one",
    label: "Landing Page 1",
    render: (props) => <LandingOne {...props} />,
    code: landingpageone.code,
  },
  {
    id: "landing-two",
    label: "Landing Page 2",
    render: (props) => <LandingTwo {...props} />,
    code: landingpagetwo.code,
  },
  {
    id: "landing-three",
    label: "Landing Page 3",
    render: (props) => <LandingThree {...props} />,
    code: landingpagethree.code,
  },
  {
    id: "InstaLandingpage",
    label: "Instagram Landing Page",
    render: (props) => <InstaLandingpage {...props} />,
    code: `
      // Instagram Landing Page
      import InstaLandingpage from "@/app/(main-layout)/components/InstaLandingpage";

      export default function Example() {
        return <InstaLandingpage />;
      }
    `,
  },
];
