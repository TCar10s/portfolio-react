export interface Developer {
  name: string
  description: string
  image: string
  email: string
  phone: string
  role: string
}

export interface Skill {
  name: string
  level: string
}

export interface Experience {
  company: string
  position: string
  time: string
  description: string
  logo: string
}

export interface Hobbie {
  name: string
  description: string
  image: string
}

export interface ProjectProps {
  name: string
  technologies: string
  description: string
  image: string
  demo: string
  code: string
  showCode?: boolean
}

export interface Sidebar {
  skills: Skill[]
  hobbies: Hobbie[]
}

export interface IFilterProject {
  termFilter?: string,
  setTermFilter: (term: string) => void,
  totalProjects: number,
}