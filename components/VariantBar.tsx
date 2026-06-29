"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { VARIANTS } from "@/lib/data";

// Sticky engineering control bar — the variant switcher present on every version.
export default function VariantBar() {
  const pathname = usePathname();
  return (
    <div className="vbar" role="navigation" aria-label="Design variant switcher">
      <div className="vbar-inner">
        <span className="vbar-brand">MMS · ENGINEERING CONTROL</span>
        <div className="vbar-toggle">
          {VARIANTS.map((v) => {
            const active = pathname === v.path;
            return (
              <Link
                key={v.id}
                href={v.path}
                className="vbar-tab"
                aria-current={active ? "page" : undefined}
                data-active={active}
              >
                <span className="vbar-tab-num">/{v.id}</span>
                <span className="vbar-tab-label">{v.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
