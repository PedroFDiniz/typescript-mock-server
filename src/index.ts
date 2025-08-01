import server from "./server.js";

/* Recomenda-se usar uma porta entre 1024-49151 */
const PORT = 1025;
try {
    server.listen(PORT);
    console.log(`Servidor rodando na porta ${PORT}.`);
} catch (error: unknown) {
    if (error instanceof Error) console.log(`Erro: ${error.stack}`);
}