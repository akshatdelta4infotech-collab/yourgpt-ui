// src/config/previews.tsx
import React from "react";
import CtaSections from "@/app/(main-layout)/components/CtaSections";
import LandingOne from "@/app/(main-layout)/components/Landingpageone";
import LandingTwo from "@/app/(main-layout)/components/Landingpagetwo";
import LandingThree from "@/app/(main-layout)/components/Landingpagethree";
import InstaLandingpage from "@/app/(main-layout)/components/InstaLandingpage";

export type PreviewItem = {
  id: string;
  label: string;
  render: (props?: { hideHeader?: boolean }) => React.ReactNode;
};

export const previews: PreviewItem[] = [
  {
    id: "cta-default",
    label: "CTA Default",
    render: (props) => <CtaSections variant="default" {...props} />,
  },
  {
    id: "cta-email",
    label: "CTA Email",
    render: (props) => <CtaSections variant="email" {...props} />,
  },
  {
    id: "cta-variant",
    label: "CTA Variant",
    render: (props) => <CtaSections variant="cta" {...props} />,
  },
  {
    id: "cta-variant2",
    label: "CTA Variant 2",
    render: (props) => <CtaSections variant="cta2" {...props} />,
  },
  {
    id: "landing-one",
    label: "Landing Page 1",
    render: (props) => <LandingOne {...props} />,
  },
  {
    id: "landing-two",
    label: "Landing Page 2",
    render: (props) => <LandingTwo {...props} />,
  },
  {
    id: "landing-three",
    label: "Landing Page 3",
    render: (props) => <LandingThree {...props} />,
  },
  {
    id: "InstaLandingpage",
    label: "Instagram Landing Page",
    render: (props) => <InstaLandingpage {...props} />,
  },
];
