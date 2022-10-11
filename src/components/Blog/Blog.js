import React from "react";

const Blog = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <p className=" text-gray-700 text-4xl">Q/A Blog</p>
        </div>
      </div>
      <div className="max-w-screen-xl sm:mx-auto">
        <div className="grid grid-cols-3 gap-5">
          <div>
            <p className="mb-4 text-xl font-medium">
              What is the purpose of React Router?
            </p>
            <p className="text-gray-700">
              React Router uses dynamic routing to ensure that routing is
              achieved as it is requested by the user. This also means that all
              the required components are also rendered without any flashes of
              white screen or page reload.
              <br />
              It is mainly used for developing Single Page Web Applications.
              React Router is used to define multiple routes in the application.
              When a user types a specific URL into the browser, and if this URL
              path matches any 'route' inside the router file, the user will be
              redirected to that particular route.
            </p>
          </div>
          <div>
            <p className="mb-4 text-xl font-medium">
              How does context api works?
            </p>
            <p className="text-gray-700">
              React Context provides a way to pass data through the component
              tree without having to pass props down manually at every level. In
              some sense, it simulates “Global” data in React component Tree.
              <br />
              It returns a consumer and a provider. Provider is a component that
              as it's names suggests provides the state to its children. It will
              hold the "store" and be the parent of all the components that
              might need that store. Consumer as it so happens is a component
              that consumes and uses the state.
            </p>
          </div>
          <div>
            <p className="mb-4 text-xl font-medium">What is useRef in react?</p>
            <p className="text-gray-700">
              The useRef hook returns a mutable ref object. This object has a
              property called .current. The value is persisted in the
              refContainer.current property. These values are accessed from the
              current property of the returned object. The .current property
              could be initialised to the passed argument initialValue e.g.
              useRef(initialValue). The object can persist a value for a full
              lifetime of the component.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
