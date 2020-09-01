Feature('Forms');

Scenario('Login Valido com sucesso', (I) => {
  I.amOnPage('login');
  I.fillField('Email', 'teste123@teste.com.br');
  I.fillField('Password', '1234');  
  I.click('Entrar');
  I.see('Bem vindo');
  I.dontSeeInCurrentUrl('login');  
});

Scenario('Login Invalido com sucesso', (I) => {
  I.amOnPage('login');
  I.fillField('Email', 'teste123@teste.com.br');
  I.fillField('Password', '12345678');
  I.click('Entrar');
  I.see('Problemas com o login do usuário');
});

Scenario('Consultar lista de contas', (I) => {
  I.amOnPage('login');
  I.fillField('Email', 'teste123@teste.com.br');
  I.fillField('Password', '1234');
  I.click('Entrar');
  I.click('Contas');
  I.click('Listar');
  I.see('Conta');
});