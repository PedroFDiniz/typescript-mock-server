import { Response } from "express";
import { ExemploRequisicao } from "./middleware.js";

const HTTP_OK_CODE = 200;

/**
 * A função aqui pode conter qualquer coisa, mas está recebendo uma requisição
 * e retornará uma resposta. Caso não seja retornada uma resposta, o remetente
 * entenderá que algum erro ocorreu na requisição.
 *
 * @param request Uma requisição http vinda de uma outra aplicação.
 * @param response Um objeto de resposta providenciado pelo Express onde será
 * devolvida uma resposta.
 * @returns É uma função assíncrona, então sempre retorna uma promessa
 * (Promise). Para poder trabalhar com o resultado, use a keyword 'await'.
 */
export async function test(request: ExemploRequisicao, response: Response): Promise<Response> {
    const { nome, senha } = request.body;
    // const { exemplo } = request.params;
    // const { exemplo } = request.headers;

    /* Esse será o objeto retornado ao front no corpo da resposta. */
    const result = {
        message: "Logado!",
        token: "Um JSON Web Token (JWT) é uma string criptografada e secreta que tem ao menos 256 bits de comprimento e será usada para autenticar o usuário no backend. Geralmente é armazenada no front como um cookie.",
    };

    return response.status(HTTP_OK_CODE).send(result);
}
