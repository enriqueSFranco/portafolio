export const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .normalize('NFD') // Elimina acentos
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-') // Espacios por guiones
    .replace(/[^\w-]+/g, '') // Elimina caracteres no válidos
    .replace(/--+/g, '-'); // Elimina guiones dobles
};
