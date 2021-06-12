const developer = 'me'

const softwareEngineer = {
  me: {
    alias: 'hepoblet',
    name: 'Héctor Poblete',
    role: 'Mobile Developer',
    company: `Papa John's Chile`,
    country: 'Chile',
    get hello() {
      const { alias, name, role, company, country } = this
      return `Howdy!\nMy name is ${name} aka ${alias}. I'm ${role} on ${company} from ${country} `
    }
  }
}

console.log(softwareEngineer[developer].hello)