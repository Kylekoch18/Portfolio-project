export default function(state) {
return `
<nav>
<ul>
  <li><a href="#">Home</a></li>
  <li><a href="./About/index.html">About</a></li>
  <li><a href="./Contact/index.html">Contact</a></li>
  <li class="dropdown">
    Portfolio
    <ul>
      <li><a href="">Project 1</a></li>
      <li><a href="">Project 2</a></li>
      <li><a href="">Project 3</a></li>
    </ul>
  </li>
</ul>
</nav>
`;
}