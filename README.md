# Gerenciador de Preços de Combustíveis

Este projeto é um gerenciador de preços de combustíveis desenvolvido com React, TypeScript e Vite. Ele permite que os usuários obtenham preços de combustíveis e façam upload de arquivos CSV com dados de preços.

## Tecnologias Utilizadas

-   **React**: Biblioteca para construção de interfaces de usuário.
-   **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
-   **Vite**: Ferramenta de construção e desenvolvimento rápido.
-   **Tailwind CSS**: Framework CSS para estilização.
-   **Axios**: Biblioteca para fazer requisições HTTP.

## Instalação

Para instalar e executar o projeto, siga os passos abaixo:

1. Clone o repositório:

2. Instale as dependências:

    ```bash
    pnpm install
    ```

3. Crie um arquivo `.env` na raiz do projeto e adicione as variáveis de ambiente necessárias:

    ```
    VITE_API_URL=https://api.example.com
    VITE_PORT=3000
    ```

4. Inicie o servidor de desenvolvimento:
    ```bash
    pnpm run dev
    ```

Agora você pode acessar a aplicação em `http://localhost:3000`.

## Estrutura do Projeto

-   `src/`: Contém o código-fonte da aplicação.
    -   `App.tsx`: Componente principal da aplicação.
    -   `components/`: Contém componentes reutilizáveis.
    -   `lib/`: Contém funções utilitárias e configuração da API.
    -   `global.css`: Estilos globais da aplicação.
-   `vite.config.ts`: Configuração do Vite.
-   `package.json`: Dependências e scripts do projeto.

## Scripts

-   `npm run dev`: Inicia o servidor de desenvolvimento.
-   `npm run build`: Compila a aplicação para produção.
-   `npm run lint`: Executa o linter para verificar a qualidade do código.
-   `npm run preview`: Visualiza a aplicação em modo de produção.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.