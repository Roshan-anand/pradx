import Image from "next/image";
import { SITE } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with PRADXCLUSIVE on WhatsApp"
      title="Chat on WhatsApp"
      className="whatsapp"
    >
      <span className="whatsapp-pulse" aria-hidden="true" />
      <Image
        src="/assets/brand/whatsapp.svg"
        alt=""
        width={28}
        height={28}
        className="relative z-[1] h-7 w-7"
      />
      <span className="whatsapp-label" aria-hidden="true">
        Chat on WhatsApp
      </span>
    </a>
  );
}
