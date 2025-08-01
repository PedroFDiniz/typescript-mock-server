import { Request, Response, NextFunction } from "express";

/* A interface aqui é meramente ilustrativa, para padronizar os dados recebidos */
export interface ExemploRequisicao extends Request {
    body: {
        nome: string;
        senha: string;
    }
}

const HTTP_NOT_FOUND_CODE = 400;

/**
 * Um middleware é geralmente uma função que checa se a requisição está de
 * acordo com os padrões, para não quebrar a aplicação.
 *
 * @param request Uma requisição http.
 * @param response Uma resposta que será enviada de volta ao remetente.
 * @param next A função que será chamada caso tudo esteja ok.
 * @returns Responde com um erro de algum tipo, ou chama a próxima função.
 */
export async function middleware(request: ExemploRequisicao, response: Response, next: NextFunction): Promise<Response | void> {
    const { nome, senha } = request.body;

    if (!nome) return response.status(HTTP_NOT_FOUND_CODE).send("Usuário não pode ser vazio!");
    if (!senha) return response.status(HTTP_NOT_FOUND_CODE).send("Senha não pode ser vazia!");

    return next();
}