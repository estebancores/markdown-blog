export type Categories = 'sveltekit' | 'svelte'

export type Post = {
    title: string
    slug: string
    description: string
    date: string
    categories: Categories[]
    published: boolean
}


export type Technologies = {
    logo: string
    name: string
}

export type Experience = {
    start: string
    end: string
    company: string
    role: string
    tasks: string[]
    technologies: Technologies[]
}