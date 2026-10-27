import { Photo } from '../components/Photo'
import { coPresidents, executiveBoard, ocm, type TeamMember } from '../data/team'

function slug(name: string) {
  return name
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="member">
      <Photo
        className="member__photo"
        src={member.photo ?? `/images/team/${slug(member.name)}.jpg`}
        alt={member.name}
        placeholder="?"
      />
      <div className="member__info">
        <h3>{member.name}</h3>
        <p>{member.role}</p>
      </div>
    </article>
  )
}

function TeamGroup({ title, subtitle, members, large }: { title: string; subtitle?: string; members: TeamMember[]; large?: boolean }) {
  return (
    <section className="team-group">
      <h2 className={large ? 'team-group__title team-group__title--large' : 'team-group__title'}>{title}</h2>
      {subtitle && <p className="team-group__subtitle">{subtitle}</p>}
      <div className="team-grid">
        {members.map((m) => (
          <MemberCard key={m.name} member={m} />
        ))}
      </div>
    </section>
  )
}

export function Team() {
  return (
    <>
      <section className="container section-head">
        <p className="eyebrow eyebrow--red">Our team</p>
        <h1 className="display display--lg">Meet the people behind ALPFA Columbia.</h1>
        <p className="lede">Our E-Board and OCM are here to support you, collaborate with you, and grow with you.</p>
      </section>
      <div className="container team">
        <TeamGroup title="Co-Presidents" members={coPresidents} />
        <TeamGroup title="Executive Board" members={executiveBoard} />
        <TeamGroup title="Operational Committee Members" subtitle="Supporting our programs, events, and ALPFAMILIA community." members={ocm} large />
      </div>
    </>
  )
}
