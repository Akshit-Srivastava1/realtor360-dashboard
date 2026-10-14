
import './App.css'

const stats = [
  { icon: '⌂', title: 'Active Listing', value: '23', change: '-12% ↘', down: true },
  { icon: '♟', title: 'Active Leads', value: '120', change: '+12% ↗' },
  { icon: '🤝', title: 'Total Closed', value: '42', change: '+12% ↗' },
  { icon: '◉', title: 'Total Revenue', value: 'Rs.22Cr.', change: '+12% ↗' },
]

const stages = [
  { name: 'Interested', a: 3, b: 2.5, c: 2.5 },
  { name: 'Site Visit Done', a: 3.7, b: 3.3, c: 3 },
  { name: 'Unit Shortlisted', a: 3.4, b: 3.2, c: 2.8 },
  { name: 'Contract Signed', a: 3.7, b: 3.3, c: 3 },
  { name: 'Offer Initiated', a: 3.2, b: 2.8, c: 2.5 },
  { name: 'Offer Accepted', a: 3.7, b: 3.3, c: 3 },
]

const properties = [
  { name: 'Maplewood House', type: 'House', units: '12', price: 'Rs.85L', views: '125', status: '8/12 Occupied', image: '🏘️', tone: 'green' },
  { name: 'Serenity Villa', type: 'Villa', units: '9300', price: 'Rs.2.8Cr', views: '930', status: 'Available', image: '🏡', tone: 'green' },
  { name: 'Rosehill Cottage', type: 'House', units: '25', price: 'Rs.1.1Cr', views: '355', status: 'Available', image: '🏠', tone: 'green' },
  { name: 'Skyline Edge', type: 'Apartment', units: '17', price: 'Rs.75L', views: '425', status: 'Sold Out', image: '🏢', tone: 'red' },
]

const contacts = [
  { name: 'John Doe', place: 'New York', initials: 'JD', color: '#a0b59b' },
  { name: 'Jessica Chen', place: 'California, LA', initials: 'JC', color: '#d7b4a2' },
  { name: 'Evan Chris', place: 'New York', initials: 'EC', color: '#a2b7c7' },
  { name: 'Jack B.', place: 'Ohio, Columbus', initials: 'JB', color: '#c6b3a0' },
  { name: 'Emily Paris', place: 'California, LA', initials: 'EP', color: '#a6c6bd' },
]

const reminders = [
  { title: 'Follow-Ups', description: '15 leads need to be followed up.', color: 'beige' },
  { title: 'Submit Final Offer- Villa Deal', description: 'Finalize and send offer documents.', color: '' },
  { title: 'Review Contract with Legal', description: 'Ensure attorney reviews apartment deal contract today.', color: '' },
  { title: 'Call Jessica Chen – Follow-up', description: 'Discuss her feedback after site visit to Angel Plaza.', color: '' },
]

const schedule = [
  { title: 'Visit Client- Angel Plaza', detail: 'Sector 45, Gurugram, Haryana', color: 'mint' },
  { title: 'Visit Client – Site Walkthrough', detail: 'Whitefield Road, Bengaluru, Karnataka', color: 'mint' },
  { title: 'Follow Up – Jessica Chen', detail: 'jessica.chen@email.com', color: 'pink' },
  { title: 'Follow Up – Roger Bouchard', detail: 'roger.bouchard@clientmail.com', color: 'pink' },
  { title: 'Submit Final Offer – Villa Deal', detail: 'Finalize and send offer documents.', color: 'yellow' },
  { title: 'Submit Internal Review – Apartment', detail: 'Update CRM with latest market rates.', color: 'yellow' },
]

function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <section className={`card ${className}`}>{children}</section>
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="section-title">{children}</h2>
}

function DonutChart() {
  return (
    <div className="donut-area">
      <div className="donut-label label-web">Website<br /><span>10 (24.83%)</span></div>
      <div className="donut-label label-call">Inbound Call<br /><span>9 (37.87%)</span></div>
      <div className="donut-label label-facebook">Facebook<br /><span>1 (6.78%)</span></div>
      <div className="donut-label label-ref">Reference<br /><span>1 (30.6%)</span></div>
      <div className="donut"><div /></div>
      <svg className="donut-arrows" viewBox="0 0 460 280" aria-hidden="true">
        <path d="M128 61 Q95 44 65 61 L74 47 M65 61 L82 68" />
        <path d="M290 54 Q319 31 342 39 L333 28 M342 39 L331 49" />
        <path d="M123 197 Q94 225 64 214 L75 202 M64 214 L79 221" />
        <path d="M279 220 Q321 236 353 219 L342 211 M353 219 L341 230" />
      </svg>
    </div>
  )
}

function StageChart() {
  return (
    <div className="stage-chart">
      <div className="y-label">Record Count</div>
      <div className="plot">
        {[10, 7.5, 5, 2.5, 0].map((n) => (
          <div className="grid-line" key={n}>
            <span>{n}</span><i />
          </div>
        ))}
        <div className="stage-bars">
          {stages.map((stage) => (
            <div className="stage-column" key={stage.name}>
              <div className="stack" style={{ height: `${(stage.a + stage.b + stage.c) * 15}px` }}>
                <i className="bar-a" style={{ height: `${stage.a / (stage.a + stage.b + stage.c) * 100}%` }} />
                <i className="bar-b" style={{ height: `${stage.b / (stage.a + stage.b + stage.c) * 100}%` }} />
                <i className="bar-c" style={{ height: `${stage.c / (stage.a + stage.b + stage.c) * 100}%` }} />
              </div>
              <span>{stage.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="x-label">Stage</div>
    </div>
  )
}

function SalesChart() {
  return (
    <div className="sales-chart">
      <div className="sales-y">Deal Owner</div>
      <div className="sales-plot">
        {[0, 2.5, 5, 7.5, 10, 12.5, 15, 17.5, 20].map((n) => (
          <div className="sales-tick" key={n} style={{ left: `${n * 5}%` }}>
            <i /><span>{n}</span>
          </div>
        ))}
        <div className="sales-row">
          <i style={{ width: '25%' }} /><i style={{ width: '32.5%' }} /><i style={{ width: '35%' }} />
        </div>
        <div className="sales-row">
          <i style={{ width: '12.5%' }} /><i style={{ width: '27.5%' }} /><i style={{ width: '22.5%' }} />
        </div>
      </div>
    </div>
  )
}

function CalendarPanel() {
  const [month, setMonth] = React.useState(new Date(2025, 6, 1))
  const year = month.getFullYear()
  const monthIndex = month.getMonth()
  const firstDay = new Date(year, monthIndex, 1).getDay()
  const days = new Date(year, monthIndex + 1, 0).getDate()
  const cells = [...Array(firstDay).fill(null), ...Array.from({ length: days }, (_, i) => i + 1)]

  return (
    <Card className="calendar-card">
      <div className="calendar-heading">
        <h2>{month.toLocaleString('en-US', { month: 'long' })} {year}</h2>
        <button aria-label="Previous month" onClick={() => setMonth(new Date(year, monthIndex - 1, 1))}>‹</button>
        <button aria-label="Next month" onClick={() => setMonth(new Date(year, monthIndex + 1, 1))}>›</button>
      </div>
      <div className="calendar-grid">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => <span className="weekday" key={`${d}${i}`}>{d}</span>)}
        {cells.map((day, i) => (
          <span className={`calendar-day ${day === 8 && monthIndex === 6 && year === 2025 ? 'selected' : ''} ${[10, 11, 14].includes(day ?? 0) && monthIndex === 6 && year === 2025 ? `event event-${day}` : ''}`} key={`${day}-${i}`}>
            {day}
          </span>
        ))}
      </div>
      <div className="schedule">
        <h3>My Schedule</h3>
        {schedule.map((item) => (
          <div className={`schedule-item ${item.color}`} key={item.title}>
            <strong>{item.title}</strong>
            <span>{item.detail}</span>
          </div>
        ))}
      </div>
    </Card>
  )
}

import React from 'react'

function App() {
  const [activeNav, setActiveNav] = React.useState('Home')
  const [search, setSearch] = React.useState('')
  const [status, setStatus] = React.useState('All')

  const navItems = ['Home', 'Developments', 'Buildings', 'Units', 'Leads', 'Companies', 'Contacts', 'Deals', 'Activities', 'Attorney Firms', 'Reports']

  const filteredProperties = properties.filter((property) => {
    const matchesSearch = property.name.toLowerCase().includes(search.toLowerCase())
    const matchesStatus = status === 'All' || property.status === status
    return matchesSearch && matchesStatus
  })

  return (
    <div className="dashboard">
      <header className="navbar">
        <a className="brand" href="#home">
          <span className="brand-mark">ϟ</span><strong>REALTOR360</strong>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          {navItems.map((item) => (
            <button key={item} className={activeNav === item ? 'active' : ''} onClick={() => setActiveNav(item)}>{item}</button>
          ))}
          <button aria-label="More navigation">•••</button>
        </nav>
        <label className="search-box">
          <input placeholder="Search properties..." value={search} onChange={(e) => setSearch(e.target.value)} />
          <span>⌕</span>
        </label>
        <button className="profile" aria-label="User profile">AS⌄</button>
      </header>

      <main className="dashboard-layout">
        <div className="main-content">
          <div className="stats-grid">
            {stats.map((stat) => (
              <Card className="stat-card" key={stat.title}>
                <div className="stat-top">
                  <span className="stat-icon">{stat.icon}</span><h2>{stat.title}</h2>
                </div>
                <div className="stat-bottom">
                  <strong>{stat.value}</strong>
                  <span className={`trend ${stat.down ? 'down' : ''}`}>{stat.change}</span>
                </div>
              </Card>
            ))}
          </div>

          <div className="analytics-grid">
            <Card className="donut-card">
              <SectionTitle>Deals by Lead Source</SectionTitle>
              <DonutChart />
            </Card>
            <Card className="stage-card">
              <SectionTitle>Deals by Stages by Development</SectionTitle>
              <StageChart />
              <div className="legend">
                <span><i className="gold" />Angel Plaza</span><span><i className="sand" />Angel Garden</span><span><i className="cream" />None</span>
              </div>
            </Card>
            <Card className="sales-card">
              <SectionTitle>Deals by Sales People by Development</SectionTitle>
              <SalesChart />
              <div className="legend"><span><i className="gold" />Angel Plaza</span><span><i className="sand" />Angel Garden</span><span><i className="cream" />None</span></div>
            </Card>
            <Card className="pipeline-card">
              <SectionTitle>Deals in Pipeline by Development</SectionTitle>
              <table>
                <thead><tr><th>Development Name</th><th>Record Count</th></tr></thead>
                <tbody>
                  <tr><td>None</td><td>14</td></tr>
                  <tr><td>Angel Plaza</td><td>3</td></tr>
                  <tr><td>Angel Garden</td><td>1</td></tr>
                </tbody>
              </table>
            </Card>
            <Card className="closed-card">
              <SectionTitle>Total Deals Closed</SectionTitle>
              <div className="progress-track"><div /></div>
              <div className="progress-labels"><span><strong>42</strong> Closed Deals</span><span><strong>132</strong> On Progress</span></div>
            </Card>
          </div>

          <div className="bottom-grid">
            <Card className="listings-card">
              <SectionTitle>Active Listing</SectionTitle>
              <div className="table-scroll">
                <table>
                  <thead><tr><th>Property</th><th>Type</th><th>Units</th><th>Price</th><th>Active Leads</th><th>Views</th><th>Status</th></tr></thead>
                  <tbody>
                    {filteredProperties.map((p) => (
                      <tr key={p.name}>
                        <td><span className="property-name"><i>{p.image}</i>{p.name}</span></td>
                        <td>{p.type}</td><td>{p.units}</td><td>{p.price}</td>
                        <td><span className="avatars"><i>AS</i><i>JD</i><b>+35</b></span></td>
                        <td>{p.views}</td><td><span className={`status ${p.tone}`}>{p.status}</span></td>
                      </tr>
                    ))}
                    {filteredProperties.length === 0 && <tr><td colSpan={7}>No matching properties found.</td></tr>}
                  </tbody>
                </table>
              </div>
              <label className="status-filter">Filter status
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                  <option>All</option><option>Available</option><option>Sold Out</option><option>8/12 Occupied</option>
                </select>
              </label>
            </Card>
            <Card className="contacts-card">
              <div className="contacts-heading"><SectionTitle>Leads Contacts</SectionTitle><button aria-label="View all contacts">↗</button></div>
              {contacts.map((contact) => (
                <div className="contact-row" key={contact.name}>
                  <span className="contact-avatar" style={{ background: contact.color }}>{contact.initials}</span>
                  <div><strong>{contact.name}</strong><span>{contact.place}</span></div>
                  <button aria-label={`Call ${contact.name}`} onClick={() => window.location.href = 'tel:'}>☎</button>
                </div>
              ))}
            </Card>
          </div>
        </div>

        <aside className="sidebar">
          <Card className="reminders-card">
            <SectionTitle>Reminder</SectionTitle>
            {reminders.map((item, index) => (
              <div className={`reminder-item ${item.color}`} key={item.title}>
                <strong>{item.title}</strong><span>{item.description}</span>
                {index === 0 && <div className="mini-avatars"><i>AS</i><i>JD</i><i>JC</i><b>+11</b></div>}
              </div>
            ))}
          </Card>
          <CalendarPanel />
        </aside>
      </main>
    </div>
  )
}

export default App
