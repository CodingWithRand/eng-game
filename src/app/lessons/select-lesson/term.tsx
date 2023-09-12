export default function Term() {
  return(
<div className="term-container">
  <div className="term-nester">
    <h1 className="term-header">
    Term of uses & Condition
  </h1>
  <ol className="term-ol">
    <li>
      <p>When you sign up by clicking the blue button on the homepage, it means youre browsing this website as a "Guest" user, and youre allowing us create and modify your caches data in the form of "Cookies"</p>
    </li>
    <li>
      <p>The purpose of cookies is only for storing the user data while browsing the webpage</p>
    </li>
    <li>
      <p>After you finish filling this form session, youre allowed to access the full content of this webpage for 30 minutes. When your access permission session expire, youll be signed out automatically</p>
    </li>
    <li>
      <p>Here are the list of your data we will collect in the form of "Cookies"</p>
      <hr className="term-hr"></hr>
      <ul className="term-ul">
        <li>
          <p>Your custom name</p>
        </li>
        <li>
          <p>The lessons you would like to take on</p>
        </li>
        <li>
          <p>Your learning progress, in form of completed staged, levels, and experiences</p>
        </li>
      </ul>
      <hr className="term-hr"></hr>
    </li>
    <li>
      <p>Some of the mentioned data may be also collected to database, such as experiences which is a part of leaderboard system</p>
    </li>
  </ol>
  </div>
</div>
  )
}