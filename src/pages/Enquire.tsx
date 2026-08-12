import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { EASE } from '@/lib/motion'

const FIELDS: { name: string; label: string; type: string; full?: boolean }[] = [
  { name: 'name', label: 'Your Name', type: 'text' },
  { name: 'partner', label: "Partner's Name", type: 'text' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'date', label: 'Wedding / Elopement Date', type: 'date' },
  { name: 'location', label: 'Location', type: 'text' },
  { name: 'interest', label: 'Photography, Film, or Both', type: 'text' },
]

function FloatingField({ name, label, type }: { name: string; label: string; type: string }) {
  const [value, setValue] = useState('')
  const [focused, setFocused] = useState(false)
  const active = focused || value.length > 0
  return (
    <div className="relative">
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="peer w-full border-b border-line bg-transparent py-3 text-[15px] outline-none transition-colors focus:border-ink"
      />
      <label
        htmlFor={name}
        className={`pointer-events-none absolute left-0 transition-all duration-300 ${
          active ? '-top-4 text-xs tracking-[0.08em] text-ash' : 'top-3 text-[15px] text-ash'
        }`}
      >
        {label}
      </label>
    </div>
  )
}

export default function Enquire() {
  const [sent, setSent] = useState(false)

  const submit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="mx-auto max-w-3xl px-6 pb-28 pt-36 md:px-10 md:pt-44">
      <p className="eyebrow mb-4 text-center">Get In Touch</p>
      <h1 className="heading-hero mx-auto max-w-xl text-center font-display text-[36px] md:text-[52px]">
        Let&rsquo;s create something beautiful.
      </h1>
      <p className="mx-auto mt-6 max-w-md text-center text-[15px] leading-relaxed text-ash">
        Tell me a little about your day — I reply to every enquiry within 48 hours.
      </p>

      <AnimatePresence mode="wait">
        {!sent ? (
          <motion.form
            key="form"
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5, ease: EASE }}
            onSubmit={submit}
            className="mx-auto mt-16 grid max-w-xl grid-cols-1 gap-8 sm:grid-cols-2"
          >
            {FIELDS.map((f) => (
              <FloatingField key={f.name} {...f} />
            ))}
            <div className="relative sm:col-span-2">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="peer w-full resize-none border-b border-line bg-transparent py-3 text-[15px] outline-none transition-colors focus:border-ink"
                placeholder=" "
              />
              <label htmlFor="message" className="mb-2 block text-xs tracking-[0.08em] text-ash">
                TELL US ABOUT YOUR PLANS
              </label>
            </div>
            <button
              type="submit"
              className="eyebrow mt-4 border border-ink px-8 py-4 transition-colors hover:bg-ink hover:text-bg sm:col-span-2"
            >
              Send Enquiry
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mx-auto mt-20 max-w-md text-center"
          >
            <p className="font-display text-3xl">Thank you.</p>
            <p className="mt-4 text-sm leading-relaxed text-ash">
              Your enquiry has been sent. I&rsquo;ll be in touch within 48 hours.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
