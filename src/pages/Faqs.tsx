import { useState, useMemo } from "react";
import { Search, Plus, X } from "lucide-react";

type Category = "All" | "Process" | "Pricing" | "Bookings" | "Delivery";

interface FaqItem {
  id: string;
  category: Exclude<Category, "All">;
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    id: "f1",
    category: "Process",
    question: "How does a typical project start?",
    answer:
      "We begin with a short discovery call to understand your goals, timeline, and creative direction. From there we send a proposal with scope and pricing, and once approved, kick off with a shared mood board before any shoot dates are set.",
  },
  {
    id: "f2",
    category: "Process",
    question: "Can I be involved in the creative direction?",
    answer:
      "Always. We treat every project as a collaboration — you'll review shot lists, references, and styling choices before the shoot, and we welcome feedback at every stage rather than just at the end.",
  },
  {
    id: "f3",
    category: "Pricing",
    question: "What's included in your packages?",
    answer:
      "Every package includes pre-production planning, the shoot day itself, professional editing and color grading, and a private online gallery for downloads. Prints, albums, and rush editing are available as add-ons.",
  },
  {
    id: "f4",
    category: "Pricing",
    question: "Do you require a deposit?",
    answer:
      "Yes — a 30% deposit secures your date on our calendar, with the remaining balance due one week before the shoot. We accept card, bank transfer, and most major payment apps.",
  },
  {
    id: "f5",
    category: "Bookings",
    question: "How far in advance should I book?",
    answer:
      "For weddings and large campaigns, 3–6 months ahead is ideal. Portrait sessions and smaller shoots can often be scheduled within two to three weeks, depending on the season.",
  },
  {
    id: "f6",
    category: "Bookings",
    question: "What happens if I need to reschedule?",
    answer:
      "Life happens — we allow one free reschedule with at least 72 hours' notice. We'll work with you to find the next available date that fits your timeline.",
  },
  {
    id: "f7",
    category: "Delivery",
    question: "How long until I receive my photos?",
    answer:
      "Standard delivery is 2–3 weeks from the shoot date. A curated sneak peek gallery of 10–15 images is typically ready within 48 hours so you have something to share right away.",
  },
  {
    id: "f8",
    category: "Delivery",
    question: "In what format will I receive the final images?",
    answer:
      "You'll get a private online gallery with full-resolution, color-graded JPEGs available for download, plus optional web-sized versions for easy sharing. RAW files are available on request for an additional fee.",
  },
  {
    id: "f9",
    category: "Delivery",
    question: "Do you offer prints or albums?",
    answer:
      "Yes — we offer archival fine-art prints and handcrafted albums through our print partner. You can order directly from your gallery, and we're happy to advise on sizing and layout.",
  },
  {
    id: "f10",
    category: "Process",
    question: "What if the weather doesn't cooperate on an outdoor shoot?",
    answer:
      "We monitor forecasts closely in the days leading up to an outdoor shoot and will proactively suggest a backup date or indoor alternative if conditions look unworkable, at no extra cost.",
  },
];

const CATEGORIES: Category[] = ["All", "Process", "Pricing", "Bookings", "Delivery"];

function highlight(text: string, query: string) {
  if (!query.trim()) return text;
  const parts = text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi"));
  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark key={i} className="bg-[#F3EBD8] text-[#7A5D1E] rounded-[2px] px-0.5">
        {part}
      </mark>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function Faqs() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("All");
  const [openId, setOpenId] = useState<string | null>("f1");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FAQS.filter((f) => {
      const matchesCategory = category === "All" || f.category === category;
      const matchesQuery =
        !q || f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div className="min-h-screen w-full bg-white text-[#17160F]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap');
        .font-display { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
        .font-body { font-family: 'Inter', sans-serif; }
        @keyframes riseIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .rise-in { animation: riseIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both; }
      `}</style>

      <div className="font-body max-w-2xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
        {/* Header */}
        <div className="rise-in">
          <p className="text-[11px] tracking-[0.18em] uppercase text-[#96742A] font-medium mb-4">
            Frequently asked
          </p>
          <h1 className="font-display text-[40px] sm:text-[52px] leading-[1.05] font-medium tracking-tight text-[#17160F]">
            Questions, answered.
          </h1>
          <p className="mt-5 text-[15px] leading-relaxed text-[#6B6A61] max-w-md">
            Everything you need to know before booking a session with us.
            Can&rsquo;t find what you&rsquo;re looking for? Reach out directly.
          </p>
        </div>

        {/* Search */}
        <div
          className="mt-10 rise-in relative"
          style={{ animationDelay: "80ms" }}
        >
          <Search
            size={17}
            strokeWidth={1.75}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B5B2A5]"
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions..."
            className="w-full h-12 pl-11 pr-11 rounded-full border border-[#E6E3D8] bg-[#FAF9F5] text-[14px] placeholder:text-[#B5B2A5] outline-none transition-colors duration-200 focus:border-[#96742A] focus:bg-white"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#B5B2A5] hover:text-[#17160F] transition-colors"
            >
              <X size={16} strokeWidth={1.75} />
            </button>
          )}
        </div>

        {/* Category pills */}
        <div
          className="mt-5 flex flex-wrap gap-2 rise-in"
          style={{ animationDelay: "140ms" }}
        >
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`h-8 px-4 rounded-full text-[13px] font-medium transition-all duration-200 border ${
                category === c
                  ? "bg-[#17160F] text-white border-[#17160F]"
                  : "bg-white text-[#6B6A61] border-[#E6E3D8] hover:border-[#C7C3B3] hover:text-[#17160F]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Result count */}
        <p
          className="mt-6 text-[12px] text-[#B5B2A5] rise-in"
          style={{ animationDelay: "180ms" }}
        >
          {results.length} {results.length === 1 ? "question" : "questions"}
          {query && <> matching &ldquo;{query}&rdquo;</>}
        </p>

        {/* Accordion list */}
        <div className="mt-4 border-t border-[#E6E3D8]">
          {results.length === 0 ? (
            <div className="py-16 text-center rise-in">
              <p className="font-display text-[20px] text-[#17160F] mb-1">
                No matches found
              </p>
              <p className="text-[14px] text-[#6B6A61]">
                Try a different search term or category.
              </p>
            </div>
          ) : (
            results.map((item, i) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="rise-in border-b border-[#E6E3D8]"
                  style={{ animationDelay: `${Math.min(i, 8) * 40 + 200}ms` }}
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                    aria-expanded={isOpen}
                  >
                    <div>
                      <span className="block text-[11px] tracking-[0.14em] uppercase text-[#B5B2A5] mb-1.5">
                        {item.category}
                      </span>
                      <span className="font-display text-[18px] sm:text-[19px] leading-snug text-[#17160F] group-hover:text-[#96742A] transition-colors duration-200">
                        {highlight(item.question, query)}
                      </span>
                    </div>
                    <span
                      className="mt-1 shrink-0 w-7 h-7 rounded-full border border-[#E6E3D8] flex items-center justify-center transition-transform duration-300"
                      style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                    >
                      <Plus size={14} strokeWidth={1.75} className="text-[#17160F]" />
                    </span>
                  </button>

                  <div
                    className="grid transition-[grid-template-rows] duration-400 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 pr-12 text-[14.5px] leading-relaxed text-[#6B6A61] max-w-xl">
                        {highlight(item.answer, query)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer CTA */}
        <div
          className="mt-16 rounded-2xl bg-[#FAF9F5] border border-[#E6E3D8] px-8 py-9 text-center rise-in"
          style={{ animationDelay: "260ms" }}
        >
          <p className="font-display text-[21px] text-[#17160F] mb-2">
            Still have questions?
          </p>
          <p className="text-[14px] text-[#6B6A61] mb-6 max-w-sm mx-auto">
            We're happy to walk through details, availability, or anything
            specific to your project.
          </p>
          <a
            href="mailto:hello@studio.com"
            className="inline-flex items-center h-11 px-6 rounded-full bg-[#17160F] text-white text-[13.5px] font-medium hover:bg-[#96742A] transition-colors duration-200"
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
}