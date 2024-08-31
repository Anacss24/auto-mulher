import { Usuario } from "../entities/usuario.entity";

export class UsuarioValidator {
    public static ERROR_EMAIL_INVALID = 'Email inválido'
    public static ERROR_EMAIL_ALREADY_IN_USE = 'E-mail já cadastrado ';

    static verifyEmail(email: string): void {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          throw new Error(this.ERROR_EMAIL_INVALID);
        }
      }

      static checkEmailAlreadyInUse(usuario: Usuario[], email: string): boolean {
        if (usuario.some((usuario) => usuario.email === email)) {
          throw new Error(this.ERROR_EMAIL_ALREADY_IN_USE);
        }
    
        return true;
      }
}