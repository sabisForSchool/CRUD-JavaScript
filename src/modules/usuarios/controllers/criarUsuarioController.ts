import { UsuarioDTO } from "../dtos/usuarioDTO";
import { CriarUsuarioServices } from "../services/criarUsuarioService"; //só tipa
import { Request, Response } from "express";
import { UsuarioMappingPrisma } from "../mapping/usuariosMappingPrisma";

export class CriarUsuarioController {
  constructor(private readonly service: CriarUsuarioServices) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const usuario = <UsuarioDTO>req.body;
    await this.service.execute(usuario);
    return res.status(200).send({ message: "Usuário criado" });
  }
}
