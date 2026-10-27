export type TeamMember = {
  name: string
  role: string
  major?: string
  classYear?: number
  linkedin?: string
  photo?: string
}

export const coPresidents: TeamMember[] = [
  { name: 'Kimberly Villalta', role: 'Co-President' },
  { name: 'Michelle Mai', role: 'Co-President' },
]

export const executiveBoard: TeamMember[] = [
  { name: 'Hector Villanueva', role: 'Secretary' },
  { name: 'Jade Amaya', role: 'Co-Treasurer' },
  { name: 'Alberto Ochoa Jr', role: 'Co-Treasurer' },
  { name: 'Valeria Gil Lopera', role: 'Professional Development in Finance' },
  { name: 'Elijah Espinal', role: 'Co-Professional Development in Tech' },
  { name: 'Andrew Bonilla', role: 'Co-Professional Development in Tech' },
  { name: 'Ashley Nataren', role: 'Marketing Chair' },
  {
    name: 'Emily Alvarez',
    role: 'Website Designer',
    major: 'Mechanical Engineering',
    classYear: 2029,
  },
  { name: 'Justin Martinez-Posadas', role: 'External Engagement Chair' },
  { name: 'Santiago Castano-Medina', role: 'Community Liaison Chair' },
  { name: 'Leilani June Hernandez', role: 'Freshman Representative' },
  { name: 'Rodrigo Jaime', role: 'Freshman Representative' },
]

export const ocm: TeamMember[] = [
  { name: 'Isaac Guzman', role: 'Marketing' },
  { name: 'Cristian Sicha-Maldonado', role: 'Website and Design' },
  {
    name: 'Niomy Munoz',
    role: 'Tech Professional Development',
    major: 'Mechanical Engineering',
    classYear: 2029,
  },
  { name: 'Leonardo Moreno', role: 'Finance Professional Development' },
  { name: 'Janira Martinez', role: 'Finance Professional Development' },
  { name: 'Keysy Lopez Diaz', role: 'Marketing' },
  { name: 'Sofia Taboda', role: 'Marketing' },
  { name: 'Emily Ramirez Garcia', role: 'Marketing' },
  { name: 'Ashley Castillo Mendez', role: 'External Engagement' },
  { name: 'Laleigh Piñeiro', role: 'OCM Member' },
]
