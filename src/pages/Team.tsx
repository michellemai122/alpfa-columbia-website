import { Icon } from '../components/Icon'
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
    <article className="member" tabIndex={0}>
      <Photo src={member.photo ?? `/images/team/${slug(member.name)}.jpg`} alt={member.name} />
      <div className="member__info" aria-hidden="true">
        <h3>{member.name}</h3>
        <p>{member.role}</p>
      </div>
      <div className="member__overlay">
        <h3>{member.name}</h3>
        <p>{member.role}</p>
        {(member.major || member.classYear) && (
          <p className="member__meta">
            {member.major}
            {member.classYear && ` • Class of ${member.classYear}`}
          </p>
        )}
        {member.linkedin && (
          <a href={member.linkedin} target="_blank" rel="noreferrer">
            Connect on LinkedIn <Icon name="linkedin" size={16} />
          </a>
        )}
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
        <h1 className="display display--lg">Meet the people behind ALPFAmilia.</h1>
        <p className="lede">Our E-Board and OCM are here to support you, collaborate with you, and grow with you.</p>
      </section>
      <div className="container team">
        <TeamGroup title="Co-Presidents" members={coPresidents} />
        <TeamGroup title="Executive Board" members={executiveBoard} />
        <TeamGroup title="OCM" subtitle="Supporting our programs, events, and ALPFAMILIA community." members={ocm} large />
      </div>
    </>
  )
}
