const developer = 'me'

const softwareEngineer = {
  me: {
    name: 'Héctor Poblete',
    alias: 'hepoblet',
    company: `Papa John's International`,
    country: 'Chile',
    role: 'Mobile Developer',
    get hello() {
      const { alias, name, role, company, country } = this
      return `Howdy!\nMy name is ${name} aka ${alias}. I'm ${role} on ${company} from ${country} `
    }
  }
}

console.log(softwareEngineer[developer].hello)