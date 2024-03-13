function App() {
  return (
    <>
      <div className="Home font flex flex-col items-center gap-14 bg-white text-lg text-blue-950">
        <header className="my-8 flex hidden w-full items-center">
          <img
            className="m-auto hover:cursor-pointer"
            src="./images/logo.svg"
            alt=""
          />
          <nav>
            <ul className="flex gap-5">
              <li className="hover:cursor-pointer">Home</li>
              <li className="hover:cursor-pointer">Pricing</li>
              <li className="hover:cursor-pointer">Products</li>
              <li className="hover:cursor-pointer">About Us</li>
              <li className="hover:cursor-pointer">Careers</li>
              <li className="hover:cursor-pointer">Community</li>
            </ul>
          </nav>
          <button className="m-auto rounded-full bg-orange-600 px-8 py-3 text-sm text-white drop-shadow-lg hover:opacity-50">
            Get Started
          </button>
        </header>
        <div className="flex flex-col-reverse place-content-center lg:flex-row">
          <div className="flex max-w-[600px] flex-col gap-y-5 p-10 text-left">
            <h1 className="text-5xl font-bold">
              Bring everyone together to build better products.
            </h1>
            <p className="text-gray-400">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <button className="self-center rounded-full bg-orange-600 px-8 py-3 text-sm text-white drop-shadow-lg hover:opacity-50 xl:self-start">
              Get Started
            </button>
          </div>
          <img
            className="object-scale-down"
            src="./images/illustration-intro.svg"
            alt=""
          />
        </div>
        <div className="flex flex-col place-content-center gap-10 lg:flex-row">
          <div className="flex max-w-[540px] flex-col gap-5 p-10">
            <h1 className=" text-4xl font-bold">
              What’s different about Manage?
            </h1>
            <p className="text-gray-400">
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>

          <div className="flex max-w-[600px] flex-col gap-10 self-center p-4">
            <div className="flex items-start gap-4">
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
            <div className="flex items-start gap-4">
              <p className="rounded-full bg-orange-600 px-6 py-1 text-white">
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
            <div className="flex items-start gap-4">
              <p className="rounded-full bg-orange-600 px-6 py-1 text-white">
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
        <h1 className="my-28 text-center text-3xl font-bold md:text-5xl">
          What they’ve said
        </h1>
        <div className="mb-14 flex hidden">
          <div className="relative flex flex-col items-center gap-5 bg-gray-100 px-6 pb-10">
            <img
              className="absolute -top-20 pb-10"
              src="./images/avatar-anisha.png"
              alt=""
            />
            <p className="pt-[22%] font-bold">Anisha Li</p>
            <p className="text-gray-400">
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
          <div className="relative flex flex-col items-center gap-5 bg-gray-100 px-6 pb-10">
            <img
              className="absolute -top-20 pb-10"
              src="./images/avatar-ali.png"
              alt=""
            />
            <p className="pt-[22%] font-bold">Ali Bravo</p>
            <p className="text-gray-400">
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>
          <div className="relative flex flex-col items-center gap-5 bg-gray-100 px-6 pb-10">
            <img
              className="absolute -top-20 pb-10"
              src="./images/avatar-richard.png"
              alt=""
            />
            <p className="pt-[22%] font-bold">Richard Watts</p>
            <p className="text-gray-400">
              “Manage allows us to provide structure and process. It keeps us
              organized and focused. I can’t stop recommending them to everyone
              I talk to!”
            </p>
          </div>
          <div className="relative flex flex-col items-center gap-5 bg-gray-100 px-6 pb-10">
            <img
              className="absolute -top-20 pb-10"
              src="./images/avatar-shanai.png"
              alt=""
            />
            <p className="pt-[22%] font-bold">Shanai Gough</p>
            <p className="text-gray-400">
              “Their software allows us to track, manage and collaborate on our
              projects from anywhere. It keeps the whole team in-sync without
              being intrusive.”
            </p>
          </div>
        </div>
        <button className="rounded-full bg-orange-600 px-8 py-3 text-sm text-white drop-shadow-lg hover:opacity-50">
          Get Started
        </button>
        <div className="flex w-full flex-col bg-orange-600 px-4 py-14 text-center md:flex-row">
          <p className="m-auto pb-5 text-center text-3xl font-bold text-white">
            Simplify how your team works today.
          </p>
          <button className="m-auto rounded-full bg-white px-8 py-3 font-bold  text-orange-600 drop-shadow-lg hover:opacity-80">
            Get Started
          </button>
        </div>
        <footer className="flex hidden w-full items-center bg-gray-800 p-14 text-gray-400">
          <div className="m-auto my-0">
            <img
              className="mb-10 fill-white text-white"
              src="./images/logo-white.svg"
              alt=""
            />
            <div className="flex">
              <img
                className="hover:cursor-pointer"
                src="./images/icon-facebook.svg"
                alt=""
              />
              <img
                className="hover:cursor-pointer"
                src="./images/icon-youtube.svg"
                alt=""
              />
              <img
                className="hover:cursor-pointer"
                src="./images/icon-twitter.svg"
                alt=""
              />
              <img
                className="hover:cursor-pointer"
                src="./images/icon-pinterest.svg"
                alt=""
              />
              <img
                className="hover:cursor-pointer"
                src="./images/icon-instagram.svg"
                alt=""
              />
            </div>
          </div>
          <ul className="grid grid-flow-col grid-rows-4 gap-10">
            <li className="hover:cursor-pointer hover:text-orange-600">
              <h1>Home</h1>
            </li>
            <li className="hover:cursor-pointer hover:text-orange-600">
              <h1>Pricing</h1>
            </li>
            <li className="hover:cursor-pointer hover:text-orange-600">
              <h1>Products</h1>
            </li>
            <li className="hover:cursor-pointer hover:text-orange-600">
              <h1>About Us</h1>
            </li>
            <li className="hover:cursor-pointer hover:text-orange-600">
              <h1>Careers</h1>
            </li>
            <li className="hover:cursor-pointer hover:text-orange-600">
              <h1>Community</h1>
            </li>
            <li className="hover:cursor-pointer hover:text-orange-600">
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
            <p className="">Copyright 2020. All Rights Reserved</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
