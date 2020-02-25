import User from './user';

const u = new User(33, 'qdqdqwdqwd');
const r = () => {
  console.log(u);
};
console.log(u);

document.querySelector('body').addEventListener('click', () => {
  r();
});
