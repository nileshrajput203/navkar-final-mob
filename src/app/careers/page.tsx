

import { careerOpenings } from "@/lib/data";
import CareersPageClient from "@/components/careers/CareersPageClient";
import { PopupApplication } from "@/components/careers/PopupApplication";

export default function CareersPage() {
  return (
    <>
      <CareersPageClient openings={careerOpenings} />
      <PopupApplication />
    </>
  );
}
