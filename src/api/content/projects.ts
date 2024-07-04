import { getCollection, z, type CollectionEntry } from 'astro:content'

export type ProjectEntry = CollectionEntry<'projects'>

export interface Language {
  kind: string
  color: [light: string, dark: string]
  name: string
  ext: string
}

export const languages: Record<z.infer<typeof language>, Language> = {
  typescript: {
    kind: 'typescript',
    name: 'TypeScript',
    ext: '.ts',
    color: ['#3178c6', '#4c83bd']
  },
  rust: {
    kind: 'rust',
    name: 'Rust',
    ext: '.rs',
    color: ['#a9643d', '#dea584']
  },
  haskell: {
    kind: 'haskell',
    name: 'Haskell',
    ext: '.hs',
    color: ['#5e5086', '#8576ad']
  },
  fsharp: {
    kind: 'fsharp',
    name: 'F#',
    ext: '.fs',
    color: ['#b845fc', '#b845fc']
  },
  python: {
    kind: 'python',
    name: 'Python',
    ext: '.py',
    color: ['#5e5086', '#8576ad']
  },
  java: {
    kind: 'java',
    name: 'Java',
    ext: '.java',
    color: ['#5e5086', '#8576ad']
  },
  javascript: {
    kind: 'javascript',
    name: 'Javascript',
    ext: '.js',
    color: ['#5e5086', '#8576ad']
  },
  cpp: {
    kind: 'cpp',
    name: 'C++',
    ext: '.cpp',
    color: ['#5e5086', '#8576ad']
  },
}

const language = z.union([
  z.literal('typescript'),
  z.literal('rust'),
  z.literal('haskell'),
  z.literal('fsharp'),
  z.literal('python'),
  z.literal('java'),
  z.literal('javascript'),
  z.literal('cpp')
])

export const projectsSchema = z.object({
  order: z.number().optional().default(-1),
  name: z.string(),
  description: z.string(),
  url: z.string().url(),
  language: language.transform((lang) => languages[lang]),
  wip: z.boolean().optional().default(false)
})

export async function loadProjects(): Promise<Array<ProjectEntry>> {
  return (await getCollection('projects')).sort((prev, next) => prev.data.order - next.data.order)
}
