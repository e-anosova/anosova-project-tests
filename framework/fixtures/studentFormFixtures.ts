import { test as base } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { text } from "node:stream/consumers";

type StudentFormFixtures = {
    firstName: string;
    lastName: string;
    email: string;
    mobileNumber: string;
    subjects: string;
    currentAddress: string;
    invalidEmail: string;
    invalidMobileNumber: string;
};

export const test = base.extend<StudentFormFixtures>({
  firstName: async ({}, use) => {
    await use(faker.person.firstName());
  },
  lastName: async ({}, use) => {
    await use(faker.person.lastName());
  },
  email: async ({}, use) => {
    await use(faker.internet.email());
  },
  mobileNumber: async ({}, use) => {
    const mobileRaw = faker.phone.number({ style: 'national' });
    const mobile = mobileRaw.replace(/\D/g, '').slice(-10);
    await use(mobile);
  },
  subjects: async({}, use) => {
    const subject = faker.lorem.word();
    await use(subject);
  },
  currentAddress: async ({}, use) => {
    await use(faker.location.streetAddress());
  },
  invalidEmail: async ({}, use) => {
    const randomText = Math.random().toString(36).substring(2, 15);
    await use(randomText);
  },
  invalidMobileNumber: async ({}, use) => {
    const invalidNumber = Math.random().toString(36).substring(2, 10);
    await use(invalidNumber);
  },
});