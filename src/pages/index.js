import * as React from "react"



// data
const personalInfo = {
  name: "Bakhtiyar",
  title: "Software Engineer",
  description: "This is my first Gatsby project for testing. It looks freakn awesome :)",
  links: {
    github: "https://github.com/Bakhtiyar-Garashov",
    twitter: "https://twitter.com/GarashovB",
    linkedin: "https://www.linkedin.com/in/bakhtiyar-garashov/",
    email: "mailto:bakhtiyar.garashov@ut.ee",

  },
};
// markup
const IndexPage = () => {
  return (
    <main >
      <title>Home Page</title>
      <h1 >
        {personalInfo.name}
        <br />
        {personalInfo.title}
        <br/>
        {personalInfo.description}
      </h1>
      <ul >
        <h2>How to find me ?</h2>
        <li >
          <a href={personalInfo.links.github} >Github</a>
        </li>
        <li >
          <a href={personalInfo.links.twitter} >Twitter</a>
        </li>
        <li >
          <a href={personalInfo.links.linkedin} >LinkedIn</a>
        </li>
        <li >
          <a href={personalInfo.links.email}>Email</a>
        </li>
      </ul>
    </main>
  )
}

export default IndexPage
