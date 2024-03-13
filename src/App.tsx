function App() {
  return (
    <>
      <div className="Home font flex flex-col items-center bg-white text-lg text-blue-950">
        <header className="my-8 flex w-full items-center">
          <img className="m-auto" src="./images/logo.svg" alt="" />
          <nav>
            <ul className="flex gap-5">
              <li>
                <p>Home</p>
              </li>
              <li>Pricing</li>
              <li>Products</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Community</li>
            </ul>
          </nav>
          <button className="m-auto rounded-full bg-orange-600 px-8 py-3 text-sm text-white">
            Get Started
          </button>
        </header>
        <div className="flex w-3/4">
          <div className="m-auto flex w-1/3 flex-col gap-y-5 text-left">
            <h1 className="text-5xl font-bold">
              Bring everyone together to build better products.
            </h1>
            <p className="text-gray-400">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <button className="self-start rounded-full bg-orange-600 px-4 py-2 font-bold text-white">
              Get Started
            </button>
          </div>
          <img className="" src="./images/illustration-intro.svg" alt="" />
        </div>
        <div className="mt-20 flex w-3/4 gap-[15%]">
          <div className="">
            <h1 className=" text-4xl font-bold">
              What’s different about Manage?
            </h1>
            <p className="text-gray-400">
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex items-start gap-10">
              <p className="rounded-full bg-orange-600 px-6 py-1 text-white">
                01
              </p>
              <div>
                <h1 className="pb-4 font-bold">Track company-wide progress</h1>
                <p className="text-gray-400">
                  See how your day-to-day tasks fit into the wider vision. Go
                  from tracking progress at the milestone level all the way done
                  to the smallest of details. Never lose sight of the bigger
                  picture again.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <p className="mr-8 rounded-full bg-orange-600 px-6 py-1 text-white">
                02
              </p>
              <div>
                <h1 className="pb-4 font-bold">Advanced built-in reports</h1>
                <p className="text-gray-400">
                  Set internal delivery estimates and track progress toward
                  company goals. Our customisable dashboard helps you build out
                  the reports you need to keep key stakeholders informed.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <p className="mr-8 rounded-full bg-orange-600 px-6 py-1 text-white">
                03
              </p>
              <div>
                <h1 className="pb-4 font-bold">
                  Everything you need in one place
                </h1>
                <p className="text-gray-400">
                  Stop jumping from one service to another to communicate, store
                  files, track tasks and share documents. Manage offers an
                  all-in-one team productivity solution.
                </p>
              </div>
            </div>
          </div>
        </div>
        <h1 className="my-28 text-5xl font-bold">What they’ve said</h1>
        <div className="mb-14 flex">
          <div className="flex flex-col items-center gap-5 bg-gray-200">
            <img src="./images/avatar-anisha.png" alt="" />
            <p>Anisha Li</p>
            <p className="text-gray-400">
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
          <div className="flex flex-col items-center gap-5 bg-gray-200">
            <img src="./images/avatar-ali.png" alt="" />
            <p>Ali Bravo</p>
            <p className="text-gray-400">
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>
          <div className="flex flex-col items-center gap-5 bg-gray-200">
            <img src="./images/avatar-richard.png" alt="" />
            <p>Richard Watts</p>
            <p className="text-gray-400">
              “Manage allows us to provide structure and process. It keeps us
              organized and focused. I can’t stop recommending them to everyone
              I talk to!”
            </p>
          </div>
          <div className="flex flex-col items-center gap-5 bg-gray-200">
            <img src="./images/avatar-shanai.png" alt="" />
            <p>Shanai Gough</p>
            <p className="text-gray-400">
              “Their software allows us to track, manage and collaborate on our
              projects from anywhere. It keeps the whole team in-sync without
              being intrusive.”
            </p>
          </div>
        </div>
        <button className="rounded-full bg-orange-600 px-4 py-2 font-bold text-white">
          Get Started
        </button>
        <div className="mt-40 flex w-full bg-orange-600 py-10">
          <p className="m-auto text-3xl font-bold text-white">
            Simplify how your team works today.
          </p>
          <button className="m-auto rounded-full bg-white px-4 py-2 font-bold  text-orange-600">
            Get Started
          </button>
        </div>
        <footer className="flex w-full items-center bg-gray-800 p-14 text-gray-400">
          <div className="m-auto my-0">
            <img
              className="mb-10 fill-white text-white"
              src="./images/logo-white.svg"
              alt=""
            />
            <div className="flex">
              <img src="./images/icon-facebook.svg" alt="" />
              <img src="./images/icon-youtube.svg" alt="" />
              <img src="./images/icon-twitter.svg" alt="" />
              <img src="./images/icon-pinterest.svg" alt="" />
              <img src="./images/icon-instagram.svg" alt="" />
            </div>
          </div>
          <ul className="grid grid-flow-col grid-rows-4 gap-10">
            <li>
              <h1>Home</h1>
            </li>
            <li>
              <h1>Pricing</h1>
            </li>
            <li>
              <h1>Products</h1>
            </li>
            <li>
              <h1>About Us</h1>
            </li>
            <li>
              <h1>Careers</h1>
            </li>
            <li>
              <h1>Community</h1>
            </li>
            <li>
              <h1>Privacy Policy</h1>
            </li>
          </ul>
          <div className="m-auto my-0">
            <div className="m-auto flex">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Updates in your inbox…"
                className="rounded-full text-center"
              />

              <button className="rounded-full bg-orange-600 px-5 py-1 font-bold text-white">
                Go
              </button>
            </div>
            <p className="mt-20">Copyright 2020. All Rights Reserved</p>
          </div>
        </footer>
        <div className="attribution flex w-full justify-center bg-gray-800 text-white">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Arthur Longue</a>.
        </div>
      </div>
    </>
  );
}

export default App;
