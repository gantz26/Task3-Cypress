import { faker } from '@faker-js/faker'

export function getUser() {
    const randomFirstName = faker.person.firstName()
    const randomLastName = faker.person.lastName()
    const randomUsername = faker.internet.userName({ firstName: randomFirstName, lastName: randomLastName })
    const randomEmail = faker.internet.email({ firstName: randomFirstName, lastName: randomLastName })
    const randomPassword = faker.internet.password({ length: 8 })
    return { username: randomUsername, email: randomEmail, password: randomPassword }
}