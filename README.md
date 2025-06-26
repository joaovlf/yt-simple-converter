🎥 YouTube to MP4 Downloader com Next.js

Este é um projeto simples que permite baixar vídeos do YouTube em formato MP4 diretamente do navegador, utilizando o framework Next.js no backend e a biblioteca youtube-dl-exec para manipulação dos downloads.
🚀 Funcionalidades

    ✅ Conversão de vídeos do YouTube para MP4

    ✅ Backend com API em Next.js (App Router)

    ✅ Download direto do navegador

    ✅ Tratamento de erros básicos

📦 Tecnologias Utilizadas

    Next.js

    TypeScript

    youtube-dl-exec

    Node.js

🛠️ Instalação

    Clone o repositório:

git clone https://github.com/seu-usuario/yt-simple-converter.git
cd super-yt-converter

    Instale as dependências:

npm install

    Execute o servidor de desenvolvimento:

npm run dev

🧠 Como funciona

    O usuário insere a URL de um vídeo do YouTube no frontend.

    A URL é enviada para uma API /api/download criada com o Next.js App Router.

    O backend chama o youtube-dl-exec e inicia o download do vídeo como um stream.

    O vídeo é enviado de volta para o cliente, que inicia automaticamente o download no navegador.

📁 Estrutura do Projeto

.
├── app/
│ ├── page.tsx # Interface do usuário
│ └── api/
│ └── download/
│ └── route.ts # API de download
├── functions/
│ └── getYoutubeVideoDownload.ts # Função que executa o youtube-dl
├── public/
├── styles/
├── package.json
└── tsconfig.json

⚠️ Aviso Legal

Este projeto é apenas para fins educacionais. Baixar conteúdo do YouTube pode violar os termos de serviço da plataforma. Use com responsabilidade e apenas com vídeos que você tem permissão legal para baixar.
🧑‍💻 Autor

Se curtir o projeto, não esquece de deixar uma ⭐ no repositório!
