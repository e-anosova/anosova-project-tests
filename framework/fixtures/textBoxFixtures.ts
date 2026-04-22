import { test as base } from "@playwright/test";
import { faker } from "@faker-js/faker";

type TextBoxFixtures = {
  fullName: string;
  email: string;
  currentAddress: string;
  permanentAddress: string;
  invalidEmail: string;
};

export const test = base.extend<TextBoxFixtures>({
  fullName: async ({}, use) => {
    await use(faker.person.fullName());
  },
  email: async ({}, use) => {
    await use(faker.internet.email());
  },
  currentAddress: async ({}, use) => {
    await use(faker.location.streetAddress());
  },
  permanentAddress: async ({}, use) => {
    await use(faker.location.streetAddress());
  },
  invalidEmail: async ({}, use) => {
    const randomText = Math.random().toString(36).substring(2, 15);
    await use(randomText);
  },
});
