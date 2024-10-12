/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_API_URL: string; // URL da API
    VITE_PORT: number; // Porta do servidor
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
