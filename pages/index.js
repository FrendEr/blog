export default () => {
  return (
    <div>
      <div className="infos">
        <div className="avatar">
          <img src="/static/avatar.png" width="200" height="200" />
          <div className="links">
            <div>
              <h3>Hi, I'm an Front End Developer.</h3>
            </div>
            <div>
              <label>Skill: </label>
              <div className="skill-list">
                <span>React</span>
                <span>Redux</span>
                <span>Webpack</span>
                <span>Node.js</span>
                <span>jQuery</span>
                <span>Modular</span>
                etc.
              </div>
            </div>
            <div>
              <label>Github: </label>
              <a href="https://github.com/FrendEr" target="_blank">https://github.com/FrendEr</a>
            </div>
            <div>
              <label>Location: </label>
              <span>Shenzhen</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        body {
          font-family: monospace;
        }
        a {
          color: #007bff;
        }
        .infos {
          padding: 30px 50px;
        }
        .avatar img {
          float: left;
        }
        .links {
          margin-left: 250px;
        }
        .links > div {
          padding: 5px 0;
        }
        .links label {
          display: inline-block;
          font-weight: bold;
          width: 80px;
          text-align: right;
          padding-right: 10px;
        }
        .skill-list {
          display: inline-block;
        }
        .skill-list span {
          padding: 0 6px;
          margin-right: 10px;
          background-color: #cce5ff;
          color: #004085;
        }
      `}</style>
    </div>
  );
}
