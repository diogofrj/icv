# Instituto Carla Veiga

Bem-vindo ao repositório do Instituto Carla Veiga, um projeto desenvolvido com React, TypeScript e Tailwind CSS. Este projeto visa fornecer uma plataforma moderna e responsiva para apresentar os serviços de saúde, estética e bem-estar oferecidos pelo instituto.


## Tecnologias Utilizadas
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Tailwind CSS**: Framework CSS para estilização rápida e responsiva.
- **Lucide React**: Conjunto de ícones para uma interface mais rica.
- **EmailJS**: Serviço para envio de e-mails diretamente do frontend.

## Funcionalidades
- **Página Inicial**: Apresenta uma visão geral dos serviços oferecidos.
- **Serviços**: Seção dedicada a descrever cada serviço, como fisioterapia, quiropraxia, pilates, estética, entre outros.
- **Sobre**: Informações sobre o Instituto Carla Veiga e sua missão.
- **Contato**: Formulário que permite aos usuários enviar mensagens diretamente para o instituto. Utiliza o EmailJS para enviar e-mails sem a necessidade de um backend, garantindo que as mensagens sejam entregues de forma rápida e eficiente.


## Estrutura do Projeto

```
icv/
├── src/
│   ├── components/        # Componentes React
│   ├── App.tsx            # Componente principal da aplicação
│   ├── index.css          # Estilos globais
│   └── main.tsx           # Ponto de entrada da aplicação
├── public/
│   └── index.html         # HTML principal
├── package.json            # Dependências do projeto
└── README.md               # Documentação do projeto
```

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/icv.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd icv
   ```  
3. Instale as dependências:
   ```bash
   npm install
   ```  
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
5. Acesse a aplicação no navegador:
   ```bash
   http://localhost:5173
   ```
6. Em caso de erros de versão do npm, execute o comando:
   ```bash
   nvm install 18.20.3
   nvm use 18.20.3
   npm install -g npm@10.2.3
   node -v
   npm -v
   ```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorar o projeto.

1. Faça um fork do repositório.
2. Crie uma branch para sua feature: `git checkout -b minha-feature`.
3. Commit suas mudanças: `git commit -m 'Adiciona nova funcionalidade'`.
4. Push para a branch: `git push origin minha-feature`.
5. Abra um pull request.

## Licença

Este projeto é licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.

---
