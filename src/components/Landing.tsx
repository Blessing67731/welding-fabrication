import { useState } from 'react'
import { Phone,MapPin} from 'lucide-react'
import logo from '../images/logo.png'
import heroImg from '../images/slidingdoor.png'
import projectImg1 from '../images/project1.png'
import aboutImg from '../images/about.png'
import projectImg3 from '../images/project3.png'
import projectImg2 from '../images/project2.png'
import projectImg4 from '../images/project4.png'
import slidingGateImg from '../images/slidegate.png'
import slidingdoor from '../images/slide.png'
import windowFrameImg from '../images/windowframe.png'
import steeldoorImg from '../images/doorframe.png'
import tankStandImg from '../images/tank.png'
import customSteelImg from '../images/fabric2.png'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
]

const services = [
  {
    title: 'Sliding gates',
    copy: 'Strong, smooth-running gates that look expensive and lock your property down.',
    image: slidingGateImg,
  },
  {
    title: 'Sliding doors',
    copy: 'Custom security doors with clean welds, solid frames, and a professional finish.',
    image: slidingdoor,
  },
  {
    title: 'Windows & frames',
    copy: 'Neat steel window frames built to fit, painted properly, and made to last.',
    image: windowFrameImg,
  },
  {
    title: 'Aluminium doors',
    copy: "Guaranteed strong ,we don't just madedoors, we sucure home.",
    image: steeldoorImg,
  },
  {
    title: 'Tank stands',
    copy: 'Heavy-duty stands sized to your tank, with bracing that will not sag.',
    image: tankStandImg,
  },
  {
    title: 'Custom steel work',
    copy: 'Railings, carports, frames, and any steel structure you need fabricated.',
    image: customSteelImg,
  },
]

const reasons = [
  { title: 'Neat welding', copy: 'Clean beads, square joints, and finishing you can see up close.' },
  { title: 'Strong materials', copy: 'Proper gauge steel — built to take weather, weight, and daily use.' },
  { title: 'Perfect finishing', copy: 'Grind, prime, and paint so the job looks new for years.' },
  { title: 'Affordable prices', copy: 'Fair quotes, no surprises, and a free site visit for most jobs.' },
]

const Landing = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [sent, setSent] = useState(false)
  const [form ,setForm] =useState({

    name: "",
    phone : "",
    service : "",
    details: ""
  })

  function handleChange(e:any){

    setForm({

      ...form ,
      [e.target.name]:e.target.value
    })
  }
function handleSubmit(e:any){

  e.preventDefault();

setSent(true)


  if(!form.name.trim() || !form.phone.trim() ||

!form.details.trim()){

  alert('please fill in all required fields')
  return;

 
}



const text =`

New Customer Inquiry

name:${form.name}
phone:${form.phone}
service:${form.service}
details:${form.details}
`;

window.open(`https://wa.me/263783239582?text=${encodeURIComponent(text)}`,'_blank')



setForm({
name: "",
phone: "",
service: "",
details: "",
})
}

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(query.trim().toLowerCase()),
  )

 // const handleQuote = (event: FormEvent<HTMLFormElement>) => {
  //  event.preventDefault()
  
 // }

  return (
    <div className="min-h-screen bg-steel text-slate-100">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-steel/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#home" className="flex items-center gap-3">
            <img src={logo} alt="Samby Welding Fabrications" className="h-12 w-auto rounded-sm sm:h-14" />
            <span className="hidden font-display text-sm tracking-[0.18em] text-white uppercase sm:block">
              Samby Welding
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium tracking-wide text-slate-200 uppercase hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <label className="sr-only" htmlFor="product-search">
              Search product
            </label>
            <input
              id="product-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search product..."
              className="w-44 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:border-ember focus:outline-none"
            />
            <a
              href="#contact"
              className="rounded-md bg-ember px-4 py-2 text-sm font-semibold tracking-wide text-white uppercase hover:bg-red-700"
            >
              Free quote
            </a>
          </div>

          <button
            type="button"
            className="rounded-md border border-white/20 px-3 py-2 text-sm lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-steel px-4 py-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium uppercase hover:bg-white/10"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search product..."
              className="mt-3 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-slate-400"
            />
          </div>
        )}
      </header>

      <section
        id="home"
        className="relative flex min-h-screen items-center bg-cover bg-center bg-fixed pt-24"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/35" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <p className="mb-4 font-display text-sm tracking-[0.35em] text-ember uppercase">
            Custom steel · Built to last
          </p>
          <h1 className="max-w-4xl font-display text-4xl leading-tight font-bold text-white uppercase sm:text-6xl">
            Samby Welding Fabrications
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200 sm:text-xl">
            Tired of weak gates? We build beautiful sliding gates, doors, and windows that protect
            your home and make it look expensive. Neat welding, strong materials, perfect finishing,
            great paint, and affordable prices.
          </p>
          <p className="mt-4 max-w-2xl text-base font-medium text-amber-300 sm:text-lg">
            Don&apos;t wait until it&apos;s too late — call us today and get your free quote.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-md bg-ember px-6 py-3 font-semibold tracking-wide text-white uppercase hover:bg-red-700"
            >
              Get a free quote
            </a>
            <a
              href="#services"
              className="rounded-md border border-white/30 px-6 py-3 font-semibold tracking-wide text-white uppercase hover:bg-white/10"
            >
              View services
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#0f1522] py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <img
            src={aboutImg}
            alt="Welder fabricating a steel frame in the workshop"
            className="h-[420px] w-full rounded-xl object-cover shadow-2xl ring-1 ring-white/10"
          />
          <div>
            <p className="font-display text-sm tracking-[0.3em] text-ember uppercase">About us</p>
            <h2 className="mt-2 font-display text-4xl font-semibold uppercase">Built in the shop, finished for your home</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-300">
              We specialize in the fabrication of strong, well-built sliding gates, window frames,
              burglar bars, doors, tank stands, and all steel structures. Our work is neat, durable,
              and built to last — with clean welding and professional painting.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              Whether you need a sliding gate for your home, steel windows for your house, or custom
              metalwork for your business, we have quality workmanship at affordable prices.
            </p>
            <a href="#contact" className="mt-8 inline-block font-semibold text-ember hover:underline">
              Contact us for a free quotation →
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-display text-sm tracking-[0.3em] text-ember uppercase">Services</p>
              <h2 className="mt-2 font-display text-4xl font-semibold uppercase">What we fabricate</h2>
            </div>
            {query && (
              <p className="text-sm text-slate-400">
                Showing results for “{query}”
              </p>
            )}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service) => (
              <article
                key={service.title}
                className="overflow-hidden rounded-xl border border-white/10 bg-[#111827] shadow-lg transition hover:-translate-y-1 hover:border-ember/50"
              >
                <img src={service.image} alt={service.title} className="h-52 w-full object-cover" />
                <div className="p-5">
                  <div className="flex items-center justify-center justify-between gap-3">
                    <h3 className="font-display text-2xl uppercase">{service.title}</h3>
                  </div>
                  <p className="mt-3 text-slate-300">{service.copy}</p>
                </div>
              </article>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <p className="rounded-lg border border-white/10 bg-white/5 p-8 text-center text-slate-300">
              No matching product. Try “gates”, “windows”, or “doors”.
            </p>
          )}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0f1522] py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div key={reason.title}>
              <h3 className="font-display text-xl uppercase text-white">{reason.title}</h3>
              <p className="mt-2 text-slate-300">{reason.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="font-display text-sm tracking-[0.3em] text-ember uppercase">Workshop</p>
          <h2 className="mt-2 font-display text-4xl font-semibold uppercase">Steel, sparks, and finished jobs</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <img src={projectImg1} alt="Workshop fabrication" className="h-72 w-full rounded-xl object-cover md:col-span-2" />
            <img src={projectImg2} alt="Welder at work" className="h-72 w-full rounded-xl object-cover" />
            <img src={projectImg4} alt="Steel work in progress" className="h-64 w-full rounded-xl object-cover" />
            <img src={projectImg3} alt="Precision welding" className="h-64 w-full rounded-xl object-cover md:col-span-2" />
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#0f1522] py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="font-display text-sm tracking-[0.3em] text-ember uppercase">Contact</p>
            <h2 className="mt-2 font-display text-4xl font-semibold uppercase">Request a free quote</h2>
            <p className="mt-4 text-lg text-slate-300">
              Tell us what you need — gate, door, windows, or a custom job — and we will get back
              with a price. Site visits available.
            </p>
            <ul className="mt-8 space-y-3 text-slate-200">
              <li className='flex flex-row'>
                <span className="text-slate-400"><Phone/> </span>
                <a className=" ml-2 hover:text-white" href="tel:+263 783888918">
                  +263 783 239 582
                </a>
              </li>
              <li>
                <span className="text-slate-400">WhatsApp: </span>
                <a className="text-green-500 hover:text-md" href="https://wa.me/263783239582">
                  Message Samby Welding 
                </a>
              </li>
              <li className='flex flex-row'>
                <span className="text-slate-400"><MapPin/></span>
              <p className='ml-2'> Denda business center Domboshava</p> 
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit}
          className="rounded-xl border border-white/10 bg-steel p-6 shadow-xl">
            {sent ? (
              <p className="py-10 text-center text-lg text-amber-300">
                Thanks — we have your request. We will call you with a free quote.
              </p>
            ) : (
              <div className="grid gap-4">
                <label className="grid gap-1 text-sm">
                  Name
                  <input value={form.name} onChange={handleChange} required name="name" className="rounded-md border border-white/15 bg-white/5 px-3 py-2 text-white" />
                </label>
                <label className="grid gap-1 text-sm">
                  Phone
                  <input value={form.phone} onChange={handleChange} required name="phone" type="tel" className="rounded-md border border-white/15 bg-white/5 px-3 py-2 text-white" />
                </label>
                <label className="grid gap-1 text-sm">
                  Service 
                  <select value={form.service} onChange={handleChange} name="job" className="rounded-md border border-white/15 bg-white/5 px-3 py-2 text-white">
                    {services.map((service) => (
                      <option key={service.title} value={service.title} className="bg-steel">
                        {service.title}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-1 text-sm">
                  Details
                  <textarea value={form.details} onChange={handleChange}
                    name="details"
                    rows={4}
                    placeholder="Size and any design notes"
                    className="rounded-md border border-white/15 bg-white/5 px-3 py-2 text-white placeholder:text-slate-500"
                  />
                </label>
                <button
                  type="submit"
                  className="rounded-md bg-ember px-5 py-3 font-semibold tracking-wide text-white uppercase hover:bg-red-700"
                >
                  Send quote request
                </button>
              </div>
            )}
          </form>
        </div>
      </section>

      <footer className=" ml-5 border-t border-white/10 py-8 text-center text-sm text-slate-400 flex flex-row flex items-center justify-center">
        <p className=''>© {new Date().getFullYear()} Samby Welding Fabrications. All rights reserved.</p>

<li className='flex flex-row ml-2'>
<p className='items-small'><MapPin/></p>
  <p className=''> Denda Business Center Domboshava</p>
</li>

<li className='flex flex-row '>

<p className='ml-2'><Phone/></p>
<p className='ml-2'>+263 783239582</p>
</li>

      




      </footer>
    </div>
  )
}

export default Landing
