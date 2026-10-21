import React from 'react'
import { site } from '../lib/site'
import { useReveal } from '../utils/useReveal'
import {
  AdminConsole,
  ChatClient,
  FitnessScreens,
  KanbanBoard,
  WeatherDashboard,
} from './renders'

const leadModules = [
  'Product catalog',
  'Cart and checkout',
  'Live inventory',
  'Order tracking',
  'Vendor roles',
  'Sales overview',
]

const leadStack = ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Tailwind CSS']

const LeadProject = () => {
  const ref = useReveal(80)

  return (
    <section id="work" className="section" ref={ref}>
      <div className="shell grid gap-3 lg:grid-cols-[47fr_22fr_25fr] lg:items-stretch">
        {/* Dark media card */}
        <article data-reveal className="reveal reveal-media band-ink rounded-[24px] overflow-hidden flex flex-col">
          <div className="p-7">
            <p className="text-[20px] font-medium on-ink">Case study</p>
            <p className="mt-1 text-[15px] on-ink-muted max-w-[34ch]">
              Personal project. A multi-vendor store with checkout, stock and an admin console.
            </p>
          </div>

          <div className="media-inner mx-7 rounded-[14px] overflow-hidden aspect-[16/9]">
            <AdminConsole />
          </div>

          <h2 className="px-7 pt-8 text-[clamp(36px,4.4vw,72px)] font-bold leading-[0.98] tracking-[-0.04em] on-ink">
            Enterprise
            <br />
            E-Commerce Platform
          </h2>

          <div className="mt-auto p-7">
            <p className="text-[18px] on-ink-muted max-w-[26ch]">
              Checkout, stock and roles in one codebase.
            </p>
          </div>
        </article>

        {/* Problem / approach */}
        <article data-reveal className="reveal card p-7 flex flex-col">
          <p className="text-[14px] text-muted">Problem</p>
          <p className="mt-2 text-[clamp(20px,1.6vw,26px)] font-semibold leading-[1.15] tracking-[-0.02em]">
            Several vendors share one storefront, but each should only see and edit their own
            products and orders.
          </p>
          <p className="mt-8 text-[14px] text-muted">Approach</p>
          <p className="mt-2 text-[17px] text-muted leading-relaxed">
            Role checks live in Express middleware, not the UI. Redux slices are split by domain,
            catalog, cart and orders, and Stripe Checkout drives order state through webhooks.
          </p>
          <div className="mt-auto pt-8">
            <span className="block h-px bg-divider" aria-hidden="true" />
            <p className="pt-4 text-[14px] text-muted">Personal project, built end to end.</p>
          </div>
        </article>

        {/* Stack + modules */}
        <div className="grid gap-3 content-stretch">
          <article data-reveal className="reveal card p-7">
            <h3 className="text-[20px] font-semibold">Stack</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {leadStack.map((item) => (
                <li
                  key={item}
                  className="text-[14px] px-3 py-1.5 rounded-full border border-divider text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article data-reveal className="reveal card p-7">
            <h3 className="text-[20px] font-semibold">What it handles</h3>
            <ol className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3">
              {leadModules.map((module, index) => (
                <li key={module} className="text-[16px] flex gap-2">
                  <span className="tabular text-muted text-[13px] pt-1">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {module}
                </li>
              ))}
            </ol>
          </article>
        </div>
      </div>
    </section>
  )
}

const bigProjects = [
  {
    name: 'Collaborative Task Space',
    summary: 'A kanban board where teammates see each other’s cursors and changes live.',
    stack: 'React, TypeScript, Firebase',
    Render: KanbanBoard,
    backing: 'var(--surface-alt)',
  },
  {
    name: 'Distributed Chat Engine',
    summary: 'Channels, file previews and message streaming over WebSockets.',
    stack: 'React, Socket.io, Express, MongoDB, Docker',
    Render: ChatClient,
    backing: '#141311',
  },
]

const MoreWork = () => {
  const ref = useReveal(90)

  return (
    <section className="section pt-0" ref={ref}>
      <div className="shell">
        <div className="grid gap-6 lg:grid-cols-[38fr_30fr_26fr] lg:items-start">
          <h2 className="headline">More work</h2>
          <p className="text-[18px] text-muted max-w-[32ch] lg:pt-2">
            Personal projects, each built to learn something specific.
          </p>
          <a
            href={site.repos}
            target="_blank"
            rel="noreferrer"
            className="link-u text-[16px] lg:justify-self-end lg:pt-3"
          >
            All repositories
          </a>
        </div>

        <div className="mt-12 grid gap-x-6 gap-y-12 md:grid-cols-2">
          {bigProjects.map(({ name, summary, stack, Render, backing }) => (
            <article key={name} data-reveal className="reveal reveal-media block">
              <div className="aspect-square overflow-hidden" style={{ background: backing }}>
                <div className="media-inner w-full h-full p-[8%]">
                  <div className="w-full h-full overflow-hidden rounded-[6px]">
                    <Render />
                  </div>
                </div>
              </div>
              <h3 className="mt-6 text-[24px] font-semibold tracking-[-0.02em]">{name}</h3>
              <p className="mt-1 text-[18px] text-muted">
                {summary} {stack}.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const smallProjects = [
  {
    meta: 'Mobile · React Native, Node.js, PostgreSQL',
    title: 'Fitness tracker',
    body: 'Workout plans, progress charts and offline sync that catches up when the phone reconnects.',
    Render: FitnessScreens,
  },
]

const SmallerBuilds = () => {
  const ref = useReveal(80)

  return (
    <section className="section pt-0" ref={ref}>
      <div className="shell">
        <div className="grid gap-6 lg:grid-cols-[42fr_32fr_20fr] lg:items-end">
          <h2 className="headline">
            Smaller builds,
            <br />
            <span className="text-muted">same standards.</span>
          </h2>
          <p className="text-[18px] text-muted max-w-[34ch]">
            Side projects where I tried a new platform, a new API or a new constraint.
          </p>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary lg:justify-self-end h-11 px-6 text-[14px]"
          >
            GitHub profile
            <span className="arrow" aria-hidden="true">&#8594;</span>
          </a>
        </div>

        <div className="mt-12 grid gap-3 lg:grid-cols-[32fr_65fr]">
          {smallProjects.map(({ meta, title, body, Render }) => (
            <article key={title} data-reveal className="reveal card p-5 flex flex-col">
              <div className="w-[160px] max-w-[45%] aspect-square rounded-[12px] overflow-hidden">
                <Render />
              </div>
              <p className="mt-auto pt-10 text-[14px] text-muted">{meta}</p>
              <h3 className="mt-2 text-[26px] font-medium leading-[1.1] tracking-[-0.02em]">{title}</h3>
              <p className="mt-2 text-[16px] text-muted">{body}</p>
            </article>
          ))}

          <article data-reveal className="reveal reveal-media relative rounded-[20px] overflow-hidden min-h-[380px] flex flex-col">
            <div className="media-inner absolute inset-0">
              <WeatherDashboard />
            </div>
            <div className="relative p-6">
              <p className="text-[20px] font-semibold">Weather dashboard</p>
            </div>
            <div
              className="relative mt-auto p-6 pt-16"
              style={{ background: 'linear-gradient(to top, rgba(20,19,17,0.94), rgba(20,19,17,0))' }}
            >
              <h3 className="text-[clamp(28px,2.6vw,52px)] font-semibold leading-[1.02] tracking-[-0.03em] on-ink text-right">
                Forecasts, radar
                <br />
                and hourly charts.
              </h3>
              <p className="mt-3 text-[15px] on-ink-muted text-right">
                Web &middot; React, TypeScript, OpenWeather API, Chart.js.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

const Work = () => (
  <>
    <LeadProject />
    <MoreWork />
    <SmallerBuilds />
  </>
)

export default Work
