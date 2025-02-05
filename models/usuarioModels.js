// modulo bcrypt para criptografar senhas
import bcrypt from "bcrypt";
 
// (em cenario real seria com banco de dados)
let usuarios = [
  {
    id: 1,
    nome: "Lucas ranye",
    email: "ranye@gmail.com",
    senha: bcrypt.hashSync("senha321", 10),
  },
];
 
// função para obter todos os usuarios
export const getAllUsuarios = () => usuarios;
 
//função para encontrar um usuario pelo e-mail
export const getUsuarioByEmail = (email) => {
  return usuarios.find((usuarios) => usuarios.email === email);
};
 
//função para criar um novo usuario
export const createUsuario = (novoUsuario) => {
  const novoId = usuarios.length + 1;
 
  //criar o novo usuario com dados fornecidos e senha criptografada
  const usuario = {
    ...novoUsuario,
    id: novoId,
    senha: bcrypt.hashSync(novoUsuario.senha, 10),
  };
 
  //adiciona o usuario
  usuarios.push(usuario);
 
  //retorna o usuario criado
  return usuario;
};
 
export const upadateusuario = (id, dadosatualizados) => {
    const usuarioindex = usuarios.findIndex((usuario) => usuario.id == id);

    if (usuarioindex === -1) return null;

    usuarios[usuarioindex] = { ...usuarios[usuarioindex], ... dadosatualizados };

    return usuarios[usuarioindex];
};

export const deleteusuario = (id) => {
    const usuarioindex = usuarios.findindex((usuario) => usuario.id === id);

    if (usuarioindex === -1) return null;

    const [usuarioremovido] = usuarios.splice(usuarioindex, 1);

    return usuarioremovido;
};

