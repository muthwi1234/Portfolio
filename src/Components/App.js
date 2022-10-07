import "./App.css";
import NavBar from "./Navbar";
import Home from "./Home";
import About from "./About";
import ProjectList from "./Projectlist";

function App() {
  fetch("http://localhost:3000/user")
  .then(r=>r.json())
  .then(res=>console.log(res))
  fetch("http://localhost:3000/projects")
  .then(r=>r.json())
  .then(res=>console.log(res))

  const user = {
    name: "Peter",
    city:  "Nairobi",
    links: { github: "https://github.com/muthwi1234", linkedin: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" },
    bio: "I made this!",
    projects:[{id:1,name:"Transfer market app",about:"An app for transfer of players",technologies:["Javasript"]}],
  
  };
  return (
    <div className="App">
      <p></p>
      <NavBar />
      <Home username={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} links={user.links} />
      <ProjectList projects={user.projects} />
    </div>
  );
}

export default App;
