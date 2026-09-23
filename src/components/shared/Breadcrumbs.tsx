import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumbs({
  items,
  tone = "dark",
}: {
  items: Crumb[];
  tone?: "light" | "dark";
}) {
  const muted = tone === "dark" ? "text-ivory/60" : "text-mist";
  const strong = tone === "dark" ? "text-ivory" : "text-ink";
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        <li>
          <Link href="/" className={`${muted} hover:underline`}>
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1.5">
            <ChevronRight className={`size-3.5 ${muted}`} aria-hidden />
            {item.href && i < items.length - 1 ? (
              <Link href={item.href} className={`${muted} hover:underline`}>
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className={`font-semibold ${strong}`}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
