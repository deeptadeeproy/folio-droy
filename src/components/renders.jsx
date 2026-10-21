import React from 'react'

/**
 * Original interface compositions for the personal projects, drawn in HTML/CSS.
 * They illustrate what each project does. They are not screenshots of a live
 * product and they carry no real user data.
 */

const Bar = ({ w, tone = 'ink', h = 6 }) => (
  <span
    className="block rounded-full"
    style={{
      width: w,
      height: h,
      background:
        tone === 'ink' ? 'rgba(21,17,10,0.82)'
          : tone === 'mid' ? 'rgba(21,17,10,0.34)'
            : tone === 'accent' ? 'var(--accent)'
              : 'rgba(21,17,10,0.14)',
    }}
  />
)

export const AdminConsole = ({ compact = false }) => (
  <div className="w-full h-full p-[6%] flex gap-[4%] text-left" style={{ background: 'var(--surface)' }}>
    <div className="hidden sm:flex flex-col gap-3 w-[22%] pt-1">
      <Bar w="70%" tone="accent" h={8} />
      {['Orders', 'Catalog', 'Vendors', 'Payouts', 'Stock'].map((item) => (
        <span key={item} className="text-[9px] font-medium text-muted tracking-wide">{item}</span>
      ))}
    </div>
    <div className="flex-1 flex flex-col gap-[5%]">
      <div className="flex items-center justify-between">
        <Bar w="38%" h={9} />
        <Bar w="16%" tone="accent" h={9} />
      </div>
      <div className="grid grid-cols-3 gap-[4%]">
        {['Orders today', 'Awaiting ship', 'Low stock'].map((label) => (
          <div key={label} className="rounded-md p-2" style={{ background: 'var(--surface-alt)' }}>
            <span className="block text-[8px] uppercase tracking-[0.12em] text-muted">{label}</span>
            <span className="block mt-1 h-[7px] w-2/3 rounded-full" style={{ background: 'rgba(21,17,10,0.7)' }} />
          </div>
        ))}
      </div>
      <div className="flex-1 rounded-md p-3 flex flex-col justify-between" style={{ border: '1px solid var(--divider)' }}>
        {[0, 1, 2, 3, 4].slice(0, compact ? 3 : 5).map((row) => (
          <div key={row} className="flex items-center gap-[4%]">
            <Bar w="8%" tone="soft" h={8} />
            <Bar w={`${34 - row * 3}%`} tone="mid" />
            <span className="flex-1" />
            <Bar w="12%" tone={row === 0 ? 'accent' : 'soft'} />
          </div>
        ))}
      </div>
    </div>
  </div>
)

export const KanbanBoard = () => (
  <div className="w-full h-full p-[7%] grid grid-cols-3 gap-[4%]" style={{ background: 'var(--surface)' }}>
    {[
      { title: 'Backlog', cards: 3 },
      { title: 'In progress', cards: 2 },
      { title: 'Review', cards: 2 },
    ].map((column, columnIndex) => (
      <div key={column.title} className="flex flex-col gap-[8%]">
        <span className="text-[9px] uppercase tracking-[0.14em] text-muted">{column.title}</span>
        {Array.from({ length: column.cards }).map((_, cardIndex) => (
          <div
            key={cardIndex}
            className="rounded-md p-2 flex flex-col gap-2"
            style={{
              background: 'var(--surface-alt)',
              border: columnIndex === 1 && cardIndex === 0 ? '1px solid var(--accent)' : '1px solid transparent',
            }}
          >
            <Bar w={`${80 - cardIndex * 12}%`} tone="mid" />
            <Bar w="45%" tone="soft" />
          </div>
        ))}
        {columnIndex === 1 && (
          <span className="inline-flex items-center gap-1 text-[8px] font-semibold" style={{ color: 'var(--accent-text)' }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
            teammate editing
          </span>
        )}
      </div>
    ))}
  </div>
)

export const ChatClient = () => (
  <div className="w-full h-full p-[7%] flex gap-[5%]" style={{ background: 'var(--surface)' }}>
    <div className="w-[26%] flex flex-col gap-3">
      <span className="text-[9px] uppercase tracking-[0.14em] text-muted">Channels</span>
      {['# general', '# deploys', '# design', '# random'].map((channel, index) => (
        <span
          key={channel}
          className="text-[9px]"
          style={{ color: index === 1 ? 'var(--accent-text)' : 'var(--muted)', fontWeight: index === 1 ? 600 : 400 }}
        >
          {channel}
        </span>
      ))}
    </div>
    <div className="flex-1 flex flex-col justify-end gap-[6%]">
      {[
        { w: '62%', self: false },
        { w: '48%', self: true },
        { w: '70%', self: false },
        { w: '40%', self: true },
      ].map((bubble, index) => (
        <div key={index} className={`flex ${bubble.self ? 'justify-end' : 'justify-start'}`}>
          <span
            className="block rounded-xl"
            style={{
              width: bubble.w,
              height: '14%',
              minHeight: 18,
              background: bubble.self ? 'var(--accent)' : 'var(--surface-alt)',
            }}
          />
        </div>
      ))}
      <div className="rounded-full mt-1" style={{ height: 18, border: '1px solid var(--divider)' }} />
    </div>
  </div>
)

export const FitnessScreens = () => (
  <div className="w-full h-full p-[12%] flex items-end justify-center gap-[6%]" style={{ background: 'var(--surface-alt)' }}>
    {[88, 100, 88].map((height, index) => (
      <div
        key={index}
        className="rounded-[10px] p-2 flex flex-col gap-2"
        style={{ width: '28%', height: `${height}%`, background: 'var(--surface)', border: '1px solid var(--divider)' }}
      >
        <Bar w="60%" tone={index === 1 ? 'accent' : 'mid'} h={5} />
        <div className="flex-1 flex items-end gap-1">
          {[40, 65, 50, 80, 60, 90].map((barHeight, barIndex) => (
            <span
              key={barIndex}
              className="flex-1 rounded-sm"
              style={{
                height: `${barHeight}%`,
                background: index === 1 && barIndex === 5 ? 'var(--accent)' : 'rgba(21,17,10,0.18)',
              }}
            />
          ))}
        </div>
        <Bar w="80%" tone="soft" h={4} />
      </div>
    ))}
  </div>
)

export const WeatherDashboard = () => (
  <div className="w-full h-full p-[9%] flex flex-col gap-[6%]" style={{ background: 'var(--surface)' }}>
    <div className="flex items-start justify-between">
      <div className="flex flex-col gap-2">
        <span className="text-[9px] uppercase tracking-[0.14em] text-muted">Bengaluru</span>
        <Bar w="70px" h={12} />
      </div>
      <div className="rounded-md" style={{ width: '34%', height: 46, background: 'var(--surface-alt)' }} />
    </div>
    <div className="flex-1 flex items-end gap-[3%]">
      {[30, 45, 38, 62, 55, 74, 60, 48].map((height, index) => (
        <span
          key={index}
          className="flex-1 rounded-t-sm"
          style={{ height: `${height}%`, background: index === 5 ? 'var(--accent)' : 'rgba(21,17,10,0.16)' }}
        />
      ))}
    </div>
    <div className="flex justify-between">
      {['06', '09', '12', '15', '18', '21'].map((hour) => (
        <span key={hour} className="text-[8px] tabular text-muted">{hour}</span>
      ))}
    </div>
  </div>
)
