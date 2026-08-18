
const NavBar = () => {
  return (
    <div className="flex-shrink-0 p-3" style={{ width: "280px" }}>
      {" "}
      <ul className="list-unstyled ps-0">
        {" "}
        <li className="mb-1">
          {" "}
          <button
            className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#home-collapse"
            aria-expanded="true"
          >
            Tasks
          </button>{" "}
          <div className="collapse show" id="home-collapse">
            {" "}
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              {" "}
              <li>
                <a
                  href="#"
                  className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                >
                  All
                </a>
              </li>{" "}
              <li>
                <a
                  href="#"
                  className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                >
                  Updates
                </a>
              </li>{" "}
              <li>
                <a
                  href="#"
                  className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                >
                  Reports
                </a>
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </li>{" "}
      </ul>
    </div>
  )
};

export default NavBar;