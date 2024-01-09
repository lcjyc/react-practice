import React from "react";

const Page3 = () => {
  return (
    <>
      <main id="main" class="site-main main">
        <section class="section">
          <div class="container">
            <div class="row">
              <section class="section pt-3 mt-md-0">
                <div id="the-guide" class="container">
                  <div class="row justify-content-between pb-0 pb-lg-2">
                    <div class="col-lg-9 mb-4 mb-lg-0 order-lg-2">
                      <h1 class="display-2 text-bold mb-3">The Guide</h1>
                      <p class="lead text-black">
                        This guide will help you get started with a Bootstrap
                        Theme, including how to run, customize, update, and
                        integrate your theme!
                      </p>
                      <hr class="mt-5 mb-0" />

                      <h1 id="running-your-theme">Run your theme</h1>
                      <to>
                        So you’ve downloaded your theme’s <code>.zip</code>{" "}
                        file, unpacked it, and you’re ready to start building!
                        To view your theme, you’ll need to run your theme’s
                        "build process" to compile source files and create a
                        local server to preview pages.<p></p>
                        <div class="alert alert-warning">
                          <strong>Note:</strong> Some themes come with a
                          directory of already compiled files for your
                          convenience, but you’ll still want to run your theme’s
                          build tool to serve the compiled files and avoid your
                          local filesystem’s limitations.{" "}
                        </div>
                        <h2 id="setting-up-local-development">
                          Setting up local development
                        </h2>
                        <p>
                          We allow each theme creator to select their own
                          tooling and commands since each theme has different
                          needs, so{" "}
                          <strong>
                            <em>
                              always to refer to your theme’s documentation for
                              the actual commands and installation instructions.
                            </em>
                          </strong>
                          That said, the basic process of setting up local
                          development is roughly the same in every theme:
                        </p>
                        <ol>
                          <li>
                            Install a theme’s dependencies from your command
                            line via npm. (i.e. <code>npm install</code>)
                          </li>
                          <li>
                            Run a "watch" or "build" command powered by Gulp,
                            Grunt, or Webpack build tools. (i.e.{" "}
                            <code>npm start</code> or <code>gulp</code>)
                          </li>
                          <li>
                            Open your browser to your local server’s address
                            (i.e. open Chrome to <code>localhost:3000</code>)
                          </li>
                          <li>
                            Edit source files and preview changes instantly with
                            live reload
                          </li>
                        </ol>
                        <p>
                          If the list above sounds like a foreign language to
                          you, that’s okay! Let’s break it down:{" "}
                        </p>
                        <ul>
                          <li>
                            <code>npm</code>{" "}
                            <strong>stands for node package manager.</strong>{" "}
                            Npm is a tool to automate the process of installing
                            and upgrading packages of code required to properly
                            run your theme locally – that’s why they’re called
                            dependencies! If you don’t have Node installed
                            (which now contains npm), you’ll need to{" "}
                            <a href="https://nodejs.org/en/download/">
                              download and install it
                            </a>
                            .{" "}
                          </li>
                          <li>
                            <strong>
                              <a href="https://gulpjs.com/" target="_blank">
                                Gulp
                              </a>
                              ,{" "}
                              <a href="https://gruntjs.com/" target="_blank">
                                Grunt
                              </a>
                              , and{" "}
                              <a href="https://webpack.js.org/" target="_blank">
                                Webpack
                              </a>{" "}
                              (build tools)
                            </strong>{" "}
                            are JavaScript libraries used to compile a theme’s
                            source files and create a local server. Each library
                            has different syntax and capabilities and it’s up to
                            each author which library they prefer to use. They
                            all achieve the same result end result: allow us to
                            compile source files and view those changes
                            immediately in a browser.{" "}
                          </li>
                          <li>
                            <strong>A local server</strong> is a temporary
                            server environment on your computer generated by
                            your theme’s build tool. This avoids browser
                            limitations of serving files directly from your
                            computer’s filesystem (i.e.{" "}
                            <a
                              href="https://developer.mozilla.org/en-US/docs/Glossary/CORS"
                              target="_blank"
                            >
                              CORS
                            </a>{" "}
                            limitations).{" "}
                          </li>
                          <li>
                            <strong>Live reload</strong> is a convenience
                            functionality that many themes will include as part
                            of their build tooling. It simply means that when
                            you edit source files, after they are recompiled,
                            your browser will magically refresh and display the
                            changes without a manual refresh.{" "}
                          </li>
                        </ul>
                        <h2 id="what-are-source-compiled-and-static-files-">
                          What are source, compiled and static files?
                        </h2>
                        <p>
                          These terms are can mean different things in different
                          contexts, but for the purposes of a Bootstrap Theme:
                        </p>
                        <ul>
                          <li>
                            <strong>Source files</strong> are files that are
                            meant to be processed by a theme’s build tools.
                          </li>
                          <li>
                            <strong>Compiled files</strong> are generated as a
                            result of running a compiling process (also called a
                            "build process") on the source files.
                          </li>
                          <li>
                            <strong>Static files</strong> are ones that aren’t
                            processed or generated.
                          </li>
                        </ul>
                        <p>
                          Here are a few real world examples of each type of
                          file:
                        </p>
                        <ul>
                          <li>
                            <strong>SCSS files are always source files</strong>{" "}
                            because they <em>must be compiled</em> by your
                            theme’s build tool to generate a CSS file that a
                            browser can understand.
                          </li>
                          <li>
                            <strong>
                              HTML files with any non-standard syntax are source
                              files.
                            </strong>{" "}
                            Some themes make use of libraries to create
                            "includes" for elements shared across multiple
                            pages. These includes <em>must be compiled</em> by
                            your theme’s build tool to generate standard HTML.{" "}
                          </li>
                          <li>
                            <strong>
                              The output of both the above examples are compiled
                              files.
                            </strong>{" "}
                            The CSS files are <em>generated</em> by processing
                            the source SCSS. The HTML files are{" "}
                            <em>generated</em> by processing the pseudo-HTML
                            source. Both were generated from source files and{" "}
                            <em>
                              will be overwritten if source is compiled again.
                            </em>
                          </li>
                          <li>
                            <strong>
                              Fonts, images, and standard HTML are static files.
                            </strong>{" "}
                            These don’t require any processing to be used and
                            aren’t generated from any other source. That said,
                            some themes <em>may</em> process images to optimize
                            their size, in which case they would then be source
                            files. Get it?
                          </li>
                        </ul>
                        <h2 id="the-build-process-visualized">
                          The build process visualized
                        </h2>
                        <p>
                          Here’s what the whole build process looks like at a
                          high level starting from source files and ending with
                          a rendered theme page in your browser!
                        </p>
                        <div class="d-flex justify-content-between align-items-center has-border">
                          <ul
                            class="nav sub-nav sub-nav--has-border"
                            role="tablist"
                          >
                            <li class="nav-item">
                              <a
                                class="nav-link sub-nav-link active"
                                data-toggle="tab"
                                href="#static-html-tab"
                                role="tab"
                                aria-expanded="false"
                              >
                                Static HTML
                              </a>
                            </li>
                            <li class="nav-item">
                              <a
                                class="nav-link sub-nav-link"
                                data-toggle="tab"
                                href="#dynamic-html-tab"
                                role="tab"
                                aria-expanded="true"
                              >
                                Compiled HTML
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="tab-content">
                          <div
                            class="tab-pane fade show active"
                            id="static-html-tab"
                            role="tabpanel"
                          >
                            <img
                              src="https://themes.getbootstrap.com/wp-content/themes/bootstrap-marketplace/assets/images/guide/static-html.jpg"
                              alt=""
                            />
                          </div>
                          <div
                            class="tab-pane fade"
                            id="dynamic-html-tab"
                            role="tabpanel"
                          >
                            <img
                              src="https://themes.getbootstrap.com/wp-content/themes/bootstrap-marketplace/assets/images/guide/dynamic-html.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <h2 id="how-do-i-know-which-files-are-source-compiled-or-static-">
                          How do I know which files are source, compiled or
                          static?
                        </h2>
                        <p>
                          Since each theme is organized slightly differently,
                          there’s no single answer, but it’s usually not too
                          tough to sort it out.{" "}
                        </p>
                        <p>
                          First, the documentation of your theme may have a
                          breakdown of the theme’s directories with clear
                          explanations of each.{" "}
                        </p>
                        <p>
                          Second, source files are commonly in folders named{" "}
                          <code>src/</code> or <code>app/</code>, while compiled
                          files are often found in <code>/dist</code>,{" "}
                          <code>public/</code>, or <code>build/</code> folders.
                        </p>
                        <p>
                          If neither of the above are helpful, you can always
                          pop open your theme’s build tooling code and review
                          the functions/tasks where source files are processed.
                          Even if you’re not familiar with Gulp, Grunt, or
                          Webpack syntax, you can usually tell what’s happening
                          at a high level. Just look for the file paths of
                          what’s being processed and where it’s outputting. The
                          inputs are source files and the outputs are compiled
                          files.
                        </p>
                        <p>
                          As always, if things aren’t clear to you, we encourage
                          you to reach out to the theme creator for
                          clarification!
                        </p>
                        <hr class="mt-5 mb-0" />
                        <h1 id="customizing-your-theme">
                          Customize your theme
                        </h1>
                        <p>
                          Now that you’ve got your theme running and understand
                          the compiling process, let’s discuss the proper ways
                          to edit and customize your theme. There are two
                          primary strategies for working with your theme.
                        </p>
                        <h2 id="strategy-1-working-with-source-files">
                          Strategy 1: Working with source files
                        </h2>
                        <p>
                          Working with source files showcases how powerful
                          Bootstrap themes can be and the underlying design
                          systems. It allows you to use powerful features like
                          SCSS variables to change a theme’s entire color scheme
                          or type system by swapping a few variable values. If
                          you’re comfortable with using build tools and are
                          familiar with SCSS syntax, this is probably the way to
                          go 😉{" "}
                        </p>
                        <p>
                          While you <em>can</em> edit a theme’s source files
                          directly, we suggest adding additional SCSS or JS
                          files to extend and override the theme’s source files
                          with your own custom ones. The major benefit of
                          keeping a theme’s source files separate from your own
                          additions is a simpler upgrade path when your theme is
                          updated. This is discussed further in the Updating
                          your theme section of this guide.{" "}
                        </p>
                        <p>
                          Using SCSS source files as an example, a simplified
                          "top level" SCSS file might look something like this:{" "}
                        </p>
                        <pre class="code-snippet">
                          <code>
                            // Import your custom SCSS variables
                            <span class="hljs-comment">
                              // (Can contain custom variables, theme variable
                              overrides, and Bootstrap core variable overrides)
                            </span>
                            <span class="hljs-meta">@import</span>{" "}
                            <span class="hljs-string">
                              'custom-variables.scss'
                            </span>
                            ;
                            <span class="hljs-comment">
                              // Import your theme's SCSS variables
                            </span>
                            <span class="hljs-comment">
                              // (Typically both custom variables and ones that
                              override Bootstrap core variables)
                            </span>
                            <span class="hljs-meta">@import</span>{" "}
                            <span class="hljs-string">
                              'theme/variables.scss'
                            </span>
                            ;
                            <span class="hljs-comment">
                              // Import the Bootstrap core{" "}
                            </span>
                            <span class="hljs-comment">
                              // (This file imports all Bootstrap core's
                              variables and components from the Bootstrap core
                              package installed via npm)
                            </span>
                            <span class="hljs-meta">@import</span>{" "}
                            <span class="hljs-string">
                              '../../../node_modules/bootstrap/scss/bootstrap.scss'
                            </span>
                            ;
                            <span class="hljs-comment">
                              // Import your theme's core SCSS
                            </span>
                            <span class="hljs-comment">
                              // (This file would import a bunch of component
                              SCSS files)
                            </span>
                            <span class="hljs-meta">@import</span>{" "}
                            <span class="hljs-string">'theme/theme.scss'</span>;
                            <span class="hljs-comment">
                              // Import your custom components/styles
                            </span>
                            <span class="hljs-comment">
                              // (This file could import separate files or be a
                              single SCSS file)
                            </span>
                            <span class="hljs-meta">@import</span>{" "}
                            <span class="hljs-string">'custom.scss'</span>;
                          </code>
                        </pre>
                        <p class="caption mb-4">
                          Wondering why custom variables come before theme
                          variables, which are before Bootstrap core variables?
                          Bootstrap core and most themes makes use of SCSS’s{" "}
                          <code>!default</code> flag when setting variable
                          values, which basically says "only set this variable
                          value if it isn’t already defined". When used on all
                          variables in these files, it means custom-variables
                          actually has the highest priority in defining
                          variables. There are benefits to this strategy, but
                          it’s beyond the scope of this guide.
                        </p>
                        <p>
                          Each theme will have its own setup for SCSS imports,
                          so you’ll have to follow the documentation and review
                          the organization, but the above illustrates the
                          correct overall approach to customizing your theme by
                          working with source files.
                        </p>
                        <div class="alert alert-warning">
                          <strong>Note:</strong> Some themes will even provide a
                          placeholder SCSS files for custom styles that are
                          already imported into the main SCSS file and compiled
                          automatically. They’re typically named{" "}
                          <code>custom.scss</code> &amp;{" "}
                          <code>custom-vars.scss</code>...<code>user.scss</code>{" "}
                          &amp; <code>user-vars.scss</code>...or something
                          similar.
                        </div>
                        <h2 id="strategy-2-working-with-compiled-files">
                          Strategy 2: Working with compiled files
                        </h2>
                        <p>
                          Working with the compiled files generated from running
                          your theme’s build tools is the simplest, fastest way
                          to get started with a theme. Simply attach the
                          compiled CSS and JS files to an HTML page, or use an
                          HTML page already provided in your theme. No build
                          tools or local servers necessary.
                        </p>
                        <p>
                          If you’ve ever worked with Bootstrap by simply
                          "attaching the CSS and JS", this is the same idea.{" "}
                        </p>
                        <p>
                          For similar reasons outlined above in "Strategy 1:
                          Working with source files", you’ll want to add
                          additional CSS/JS files instead of editing your
                          theme’s CSS/JS files to make updating your theme
                          easier in the future. Simply create a new CSS/JS file
                          and link it <em>after</em> the theme’s compiled CSS/JS
                          in your HTML pages.
                        </p>
                        <div class="alert alert-danger">
                          <strong>
                            Recompiling will overwrite your changes!
                          </strong>{" "}
                          If you ignore the suggestion above and <em>do</em>{" "}
                          edit your theme’s compiled CSS/JS/HTML files directly,
                          be careful to not ever run your theme’s build tool
                          again. It will unforgivingly overwrite edits you made
                          in the compiled files.
                        </div>
                        <h2 id="deciding-which-strategy-makes-sense-for-you-">
                          Deciding on a strategy
                        </h2>
                        <p>
                          Now that we’ve outlined the two strategies of editing
                          a theme, let’s discuss when it makes sense to use
                          each. It comes down to{" "}
                          <strong>
                            <em>customization</em>
                          </strong>{" "}
                          and{" "}
                          <strong>
                            <em>control</em>
                          </strong>
                          .
                        </p>
                        <p>
                          <strong>If you want to deeply customize</strong> a
                          theme’s design with large, systemic style changes,
                          you’ll want to edit source files and compile them. You{" "}
                          <em>can</em> achieve the same degree of customization
                          with additional CSS and JS to supplement the compiled
                          files, but for large changes, the source files will
                          provide greater power, flexibility, consistency, and
                          efficiency.
                        </p>
                        <p>
                          <strong>If you want to control</strong> how files are
                          being processed, which source files are being
                          included, or want to use a framework’s build process
                          (Rails Asset Pipeline, Laravel Mix, etc.), you’ll need
                          to use source files and compile them.{" "}
                        </p>
                        <p>
                          Let’s consider a few examples and our suggested
                          strategy for each:{" "}
                        </p>
                        <ul>
                          <li>
                            "
                            <strong>
                              I need to ship a site for my company/app and just
                              want it to look great and work well".
                            </strong>{" "}
                            Use the compiled CSS and JS. It’s easier to get
                            started, easy to deploy, and if you need to
                            customize a handful of things, you can add some
                            extra CSS <em>after</em> the compiled CSS to
                            overwrite or extend it. Easy peasy. Should you ever
                            need to make more significant changes, you can
                            reevaluate and start using the source files without
                            much overhead.{" "}
                          </li>
                          <li>
                            <strong>
                              "I want to heavily customize the theme’s design to
                              match my product’s brand and use it as a design
                              system for my new company".
                            </strong>{" "}
                            Use the source files.{" "}
                            <em>Themes were built for this</em>! Richer
                            customization like systemically changing color
                            schemes or changing type styles benefit greatly from
                            using a theme’s SCSS variables. Instead of
                            overriding colors and type settings across dozens of
                            components and pages, you can replace a single
                            variable’s value and watch that propagate throughout
                            the entire theme instantly.
                          </li>
                          <li>
                            <strong>"I need to customize just a</strong>{" "}
                            <strong>
                              <em>few</em>
                            </strong>{" "}
                            <strong>
                              things to start and maybe a little in the future.
                              "
                            </strong>{" "}
                            This one could go either way. We’d encourage you to
                            ask yourself if the "few things" feel like{" "}
                            <em>systemic</em> design changes, meaning do they
                            effect a multitude of components and pages. For
                            example, changing a color scheme effects{" "}
                            <em>most</em> components, so you’ll want to use the
                            SCSS color variables in the theme’s source, compile,
                            then use the resulting CSS to get started. If the
                            changes are less pervasive, like changing the height
                            of the nav or the spacing between elements, you
                            should be just fine using the compiled files and
                            including some additional CSS/JS overrides to make
                            adjustments.
                          </li>
                        </ul>
                        <hr class="mt-5 mb-0" />
                        <h1 id="updating-your-theme">Update your theme</h1>
                        <p>
                          When a theme is updated, you will be notified by the
                          Bootstrap Themes platform with a link to download the
                          latest version. Depending on how you decided to
                          customize your theme and how extensive your
                          customization is, there are different strategies for
                          updating.{" "}
                        </p>
                        <h2 id="updating-compiled-vs-source">
                          Updating compiled vs. source
                        </h2>
                        <p>
                          <strong>
                            It’s always smart to start by reviewing the
                            changelog for the update.
                          </strong>{" "}
                          This is the best way to get a high level snapshot of
                          the changes to inform your update strategy.
                        </p>
                        <p>
                          <strong>
                            If you’re working with the compiled files
                          </strong>
                          , your update should begin with replacing the old
                          compiled CSS and JS with the newer versions. Continue
                          by reviewing to see if there are any changes to HTML
                          structure or the classes used in the CSS or JS that
                          you need to account for. If you run into issues, using
                          a diff tool to review changes between the previous and
                          latest versions of a file can help pinpoint the change
                          causing issues.{" "}
                        </p>
                        <p>
                          <strong>If you’re working with source files,</strong>{" "}
                          your update process really depends on <em>how</em> you
                          customized your theme. If you added additional SCSS
                          and JS files to override the source ones, then your
                          update is similar to updating with compiled files.
                          More or less you can "replace the old source with the
                          new" followed by spot checks in components and pages
                          that are explicitly noted as updated in the changelog.
                          If you directly edited the theme’s source files,
                          you’re in a bit of a tougher situation and will have
                          to "cherry pick" the changes you made to reintegrate
                          them with the updated files. A diffing tool is your
                          best friend here. If you run into this debacle, we
                          suggest also investing in extracting all your custom
                          SCSS and JS into their own files to avoid this in the
                          future.{" "}
                        </p>
                        <p>
                          We’re working to make upgrades easier by starting to
                          enforce more detailed changelogs and encouraging
                          "migration guides" for larger scale updates. For now,
                          if you’re really struggling with an update, don’t
                          hesitate to reach out to the theme’s creator for
                          support or questions about the process.
                        </p>
                        <hr class="mt-5 mb-0" />
                        <h1 id="integrating-with-frameworks">
                          Integrate with frameworks
                        </h1>
                        <p>
                          One of the most common questions our support and
                          sellers receive is "does your theme work with Rails?
                          React? Laravel? Angular? Django? Vue? WordPress?"{" "}
                        </p>
                        <p>
                          <strong>
                            The short answer to all of these is ✨YES!✨
                          </strong>{" "}
                        </p>
                        <p>
                          <strong>The longer answer is yes</strong>,{" "}
                          <strong>but there are varying degrees of work</strong>{" "}
                          depending on <em>how</em> you want to integrate a
                          theme (compiled vs. source) and <em>which</em>{" "}
                          framework you’re integrating with.{" "}
                        </p>
                        <h2 id="integrating-compiled-vs-source">
                          Integrating compiled vs. source
                        </h2>
                        <p>
                          As discussed above, there are two primary ways of
                          customizing a Bootstrap Theme. Integrating a theme
                          into your preferred framework poses the same choice
                          between working with compiled or source files, and
                          essentially the same tradeoffs of customization and
                          control described above. That said, there is an
                          additional consideration when working in the context
                          of a framework:{" "}
                        </p>
                        <p>
                          <strong>
                            If you want to work with source files, do you want
                            to use a framework-specific solution to compile
                            instead of the provided tooling?
                          </strong>
                          Some frameworks include tools intended to accomplish
                          the same tasks as your theme’s provided build tools,
                          including compiling source files. For example, Rails
                          has the Asset Pipeline and Laravel has Mix. Both these
                          can handle compiling SCSS → CSS and concatenating JS
                          files. There can be added features and benefits of
                          using a framework’s solution for these tasks, but also
                          consider that there can also be unexpected
                          complexities by taking over the build process (i.e.
                          requiring transpiling of ES6 JS to ES5 for maximum
                          browser support). If you’re well versed in your
                          framework’s preferred tooling and can match the
                          necessary steps of your theme’s build tools, go for
                          it! If you're uncertain, we suggest starting with
                          compiled files so you can ignore the added complexity
                          of source files and build files (Gulp, Grunt,
                          Webpack).
                        </p>
                        <h2 id="compatibility-issues-with-js-frameworks">
                          Compatibility issues with JS frameworks
                        </h2>
                        <p>
                          Frameworks like React, Angular, and Vue have a
                          preferred way of handling JS, especially with regards
                          to manipulating the DOM and handling events. This
                          means a theme’s JS, custom components and 3rd party
                          plugins, likely won’t work out of the box. You have a
                          few techniques to resolve this:{" "}
                        </p>
                        <ul>
                          <li>
                            Replace vanilla JS or jQuery plugins with framework
                            specific alternatives{" "}
                          </li>
                          <li>
                            Hand-translate small bits of custom JS to your
                            framework’s preferred methods
                          </li>
                          <li>
                            Remove any JS or plugins you don’t intend on using
                            anyway to minimize the workload
                          </li>
                        </ul>
                        <h2 id="do-you-provide-integration-support-">
                          Do you provide integration support?
                        </h2>
                        <p>
                          Bootstrap Themes doesn’t officially support
                          integrating themes into 3rd party frameworks. There
                          are quite a few reasons for this, but the primary one
                          is that expecting every Bootstrap Theme creator to be
                          an experienced professional in upwards of a 10+
                          popular frameworks across a host of different
                          languages isn’t reasonable. Theme creators should be
                          focused on designing and building flexible and
                          beautiful component-centric themes.{" "}
                        </p>
                        <p>
                          That said, most theme creators have been asked "how to
                          integrate their theme into framework X" 100’s of
                          times, so it doesn’t hurt to ask since they may have
                          helpful advice in addition to this guide and their
                          documentation.{" "}
                        </p>
                        <h2 id="what-about-bootstrap-themes-with-the-react-tag-">
                          What about Bootstrap Themes with the [React] tag?
                        </h2>
                        <p>
                          While the vast majority of Bootstrap Themes are
                          primarily simple HTML/CSS/JS, some themes have been
                          adapted into full-fledged React themes. They are built
                          from custom React components. Most React themes make
                          use of the unaffiliated React Bootstrap library for
                          Bootstrap’s core components.{" "}
                        </p>
                        <p>
                          More and more themes are being translated to true
                          React themes over time, so if you find a theme you
                          love that doesn’t have a React version yet, it could
                          be worth contracting the seller to see if they’re
                          planning on releasing one.{" "}
                        </p>
                        <h2 id="framework-integration-guides">
                          Framework integration guides
                        </h2>
                        <guides>
                          We’re working on drafting detailed integration guides
                          for each framework, but none are ready quite yet. If
                          you’re experienced with the framework you plan on
                          using, we believe the broad direction provided in this
                          guide can get you most of the way. Guides for the
                          following frameworks are in the works: <p></p>
                          <ul>
                            <li>Rails</li>
                            <li>React</li>
                            <li>Laravel</li>
                            <li>Angular</li>
                            <li>Django</li>
                            <li>Vue</li>
                          </ul>
                          <div class="alert alert-warning">
                            Note: Wondering why WordPress isn’t on this list?
                            Integrating a Bootstrap Theme into WordPress theme
                            is a massive undertaking, no different than building
                            any new WordPress theme. If you’re a WordPress theme
                            developer, then you’ll be just fine since a
                            Bootstrap Theme is a collection files you’re already
                            familiar with. If not, we’d advise you to research
                            the complexities of building a WordPress theme
                            before attempting to adapt a Bootstrap Theme into
                            one.
                          </div>
                        </guides>
                      </to>
                    </div>

                    <div class="col-lg-3 order-lg-1 d-none d-lg-block">
                      <ul class="nav flex-column guide-nav">
                        <li class="nav-item nav-item-heading">
                          <a class="nav-link" href="#running-your-theme">
                            Run your theme
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            href="#setting-up-local-development"
                          >
                            Development setup
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            href="#what-are-source-compiled-and-static-files-"
                          >
                            Source, compiled, and static files
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            href="#the-build-process-visualized"
                          >
                            The build process
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            href="#how-do-i-know-which-files-are-source-compiled-or-static-"
                          >
                            Identifying types of files
                          </a>
                        </li>
                        <li class="nav-item nav-item-heading">
                          <a class="nav-link" href="#customizing-your-theme">
                            Customize your theme
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            href="#strategy-1-working-with-source-files"
                          >
                            Working with source files
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            href="#strategy-2-working-with-compiled-files"
                          >
                            Working with compiled files
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            href="#deciding-which-strategy-makes-sense-for-you-"
                          >
                            Deciding on a strategy
                          </a>
                        </li>
                        <li class="nav-item nav-item-heading">
                          <a class="nav-link" href="#updating-your-theme">
                            Update your theme
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            href="#updating-compiled-vs-source"
                          >
                            Updating compiled vs. source
                          </a>
                        </li>
                        <li class="nav-item nav-item-heading">
                          <a
                            class="nav-link"
                            href="#integrating-with-frameworks"
                          >
                            Integrate with frameworks
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            href="#integrating-compiled-vs-source"
                          >
                            Integrating compiled vs. source
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            href="#compatibility-issues-with-js-frameworks"
                          >
                            Issues with JS frameworks
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            href="#do-you-provide-integration-support-"
                          >
                            Integration support
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            href="#what-about-bootstrap-themes-with-the-react-tag-"
                          >
                            "React" Bootstrap Themes
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            href="#framework-integration-guides"
                          >
                            Framework specific guides
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page3;
