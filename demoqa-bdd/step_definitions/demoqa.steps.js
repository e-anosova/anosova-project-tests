const { I } = inject();

Given('я нахожусь в разделе Elements в подразделе Text Box', async () => {
  I.amOnPage('/');
  I.click('Elements');
  I.click('Text Box');
});

When('я ввожу данные пользователя', () => {
  I.fillField('#userName', 'Иван Иванов');
  I.fillField('#userEmail', 'ivan@test.com');
  I.fillField('#currentAddress', 'Москва, ул. Тестовая, д. 1');
  I.fillField('#permanentAddress', 'Москва, ул. Постоянная, д. 10');
});

When('нажимаю Submit', () => {
  I.click('#submit');
});

Then('отображается поле вывода с данными, которые соответствуют введённым', () => {
  I.seeElement('#output');
  I.see('Name:Иван Иванов', '#output');
  I.see('Email:ivan@test.com', '#output');
});
