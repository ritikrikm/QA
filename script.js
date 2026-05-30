const tokens = {
  kw: (text) => `<span class="kw">${text}</span>`,
  type: (text) => `<span class="type">${text}</span>`,
  string: (text) => `<span class="string">${text}</span>`,
  comment: (text) => `<span class="comment">${text}</span>`,
  annotation: (text) => `<span class="annotation">${text}</span>`,
  method: (text) => `<span class="method">${text}</span>`,
  constant: (text) => `<span class="const">${text}</span>`,
  xmlTag: (text) => `<span class="xml-tag">${text}</span>`,
  xmlAttr: (text) => `<span class="xml-attr">${text}</span>`
};

const fileSystem = {
  name: "QA-Automation-Portfolio",
  type: "project",
  icon: "project",
  children: [
    {
      name: "src",
      type: "folder",
      children: [
        {
          name: "base",
          type: "folder",
          children: [
            {
              name: "BasePage.java",
              type: "file",
              icon: "java",
              language: "java",
              content: [
                `${tokens.kw("package")} base;`,
                "",
                `${tokens.kw("import")} pages.*;`,
                `${tokens.kw("import")} utils.*;`,
                "",
                `${tokens.kw("public")} ${tokens.kw("class")} BasePage {`,
                `    ${tokens.kw("private")} ${tokens.kw("final")} ${tokens.type("String")} name = ${tokens.string("\"Ritik Mehta\"")};`,
                `    ${tokens.kw("private")} ${tokens.kw("final")} ${tokens.type("String")} title = ${tokens.string("\"Quality Engineering Developer\"")};`,
                `    ${tokens.kw("private")} ${tokens.kw("final")} ${tokens.type("String")} location = ${tokens.string("\"Toronto, ON, Canada\"")};`,
                `    ${tokens.kw("private")} ${tokens.kw("final")} ${tokens.type("String")} email = ${tokens.string("\"dev-server1@hotmail.com\"")};`,
                `    ${tokens.kw("private")} ${tokens.kw("final")} ${tokens.type("String")} phone = ${tokens.string("\"(226) 961-3847\"")};`,
                "",
                `    ${tokens.kw("public")} ${tokens.type("String")} ${tokens.method("summary")}() {`,
                `        ${tokens.kw("return")} ${tokens.string(
                  "\"Quality-focused developer with Java UI automation, API testing, and SQL validation expertise.\""
                )};`,
                "    }",
                "",
                `    ${tokens.kw("public")} ${tokens.kw("void")} ${tokens.method("openPortfolio")}() {`,
                `        System.out.println(${tokens.string(
                  "\"Welcome to the Eclipse-style QA Automation Portfolio.\""
                )});`,
                "    }",
                "}"
              ],
              runOutput: [
                "> Initializing BasePage.java...",
                "> Name: Ritik Mehta",
                "> Title: Quality Engineering Developer",
                "> Focus: Java automation, API testing, SQL validation",
                "> Status: READY"
              ]
            }
          ]
        },
        {
          name: "pages",
          type: "folder",
          children: [
            {
              name: "WorkPage.java",
              type: "file",
              icon: "java",
              language: "java",
              content: [
                `${tokens.kw("package")} pages;`,
                "",
                `${tokens.kw("import")} base.BasePage;`,
                "",
                `${tokens.kw("public")} ${tokens.kw("class")} WorkPage ${tokens.kw("extends")} BasePage {`,
                `    ${tokens.kw("private")} ${tokens.kw("final")} ${tokens.type("String")} focus = ${tokens.string(
                  "\"Quality Engineering: Automation, API, Data Validation\""
                )};`,
                `    ${tokens.kw("private")} ${tokens.kw("final")} ${tokens.type("String")} availability = ${tokens.string(
                  "\"Open to QA Automation / SDET roles\""
                )};`,
                `    ${tokens.kw("private")} ${tokens.kw("final")} ${tokens.type("String")} stack = ${tokens.string(
                  "\"Java, Selenium, TestNG, Rest Assured, SQL\""
                )};`,
                "",
                `    ${tokens.kw("public")} ${tokens.kw("void")} ${tokens.method("mission")}() {`,
                `        System.out.println(${tokens.string(
                  "\"Deliver stable automation frameworks with fast, reliable feedback loops.\""
                )});`,
                "    }",
                "}"
              ],
              runOutput: [
                "> Executing WorkPage.java...",
                "> Focus: Quality Engineering (Automation, API, Data Validation)",
                "> Availability: Open to QA Automation / SDET roles",
                "> Stack: Java, Selenium, TestNG, Rest Assured, SQL",
                "> Status: ACTIVE"
              ]
            },
            {
              name: "ExperiencePage.java",
              type: "file",
              icon: "java",
              language: "java",
              content: [
                `${tokens.kw("package")} pages;`,
                "",
                `${tokens.kw("import")} base.BasePage;`,
                "",
                `${tokens.kw("public")} ${tokens.kw("class")} ExperiencePage ${tokens.kw("extends")} BasePage {`,
                `    ${tokens.kw("private")} ${tokens.kw("final")} ${tokens.type("String")} company = ${tokens.string(
                  "\"Royal Bank of Canada\""
                )};`,
                `    ${tokens.kw("private")} ${tokens.kw("final")} ${tokens.type("String")} role = ${tokens.string(
                  "\"Developer Co-op (Quality Engineering Focus)\""
                )};`,
                `    ${tokens.kw("private")} ${tokens.kw("final")} ${tokens.type("String")} timeline = ${tokens.string(
                  "\"Jan 2024 - Aug 2024 | Toronto, Canada\""
                )};`,
                "",
                `    ${tokens.kw("private")} ${tokens.kw("final")} ${tokens.type("String")}[] achievements = {`,
                `        ${tokens.string("\"Migrated Spring Boot apps from PCF to OCP4\"")},`,
                `        ${tokens.string("\"Integrated Kafka across AD environments\"")},`,
                `        ${tokens.string("\"Built Jenkins CI/CD pipelines for regression feedback\"")},`,
                `        ${tokens.string("\"Automated Selenium WebDriver workflows with cross-browser validation\"")},`,
                `        ${tokens.string("\"Validated 20+ REST APIs using Postman, Swagger, Rest Assured\"")},`,
                `        ${tokens.string("\"Improved feedback time ~30-40% with CI/CD enablement\"")},`,
                `        ${tokens.string("\"Translated 15+ user stories into acceptance-ready test scenarios\"")}`,
                "    };",
                "",
                `    ${tokens.kw("public")} ${tokens.kw("void")} ${tokens.method("printHighlights")}() {`,
                `        System.out.println(${tokens.string("\"Experience loaded successfully.\"")});`,
                "    }",
                "}"
              ],
              runOutput: [
                "> Executing ExperiencePage.java...",
                ">",
                "> Company: Royal Bank of Canada",
                "> Role: Developer Co-op (Quality Engineering Focus)",
                ">",
                "> Achievements:",
                "> ✓ Migrated Spring Boot applications from PCF to OCP4",
                "> ✓ Integrated Kafka across AD environments",
                "> ✓ Built Jenkins CI/CD pipelines",
                "> ✓ Automated Selenium WebDriver workflows (cross-browser)",
                "> ✓ Validated 20+ REST APIs using Postman & Rest Assured",
                "> ✓ Improved feedback time by ~30-40%",
                "> ✓ Delivered 15+ user-story test scenarios",
                ">",
                "> Status: PASSED"
              ]
            },
            {
              name: "ProjectsPage.java",
              type: "file",
              icon: "java",
              language: "java",
              content: [
                `${tokens.kw("package")} pages;`,
                "",
                `${tokens.kw("import")} base.BasePage;`,
                "",
                `${tokens.kw("public")} ${tokens.kw("class")} ProjectsPage ${tokens.kw("extends")} BasePage {`,
                `    ${tokens.kw("private")} ${tokens.kw("final")} ${tokens.type("String")} project = ${tokens.string(
                  "\"Data Validation & API Quality Testing\""
                )};`,
                `    ${tokens.kw("private")} ${tokens.kw("final")} ${tokens.type("String")} role = ${tokens.string(
                  "\"Freelance QA Engineer\""
                )};`,
                `    ${tokens.kw("private")} ${tokens.kw("final")} ${tokens.type("String")} timeline = ${tokens.string(
                  "\"Dec 2025 - Jan 2026\""
                )};`,
                "",
                `    ${tokens.kw("private")} ${tokens.kw("final")} ${tokens.type("String")}[] deliverables = {`,
                `        ${tokens.string("\"Validated ETL pipelines with pre/post-load checks\"")},`,
                `        ${tokens.string("\"Executed SQL joins, counts, and mapping verification\"")},`,
                `        ${tokens.string("\"Tested REST APIs with Postman and Rest Assured\"")},`,
                `        ${tokens.string("\"Verified transformation logic and null handling\"")}`,
                "    };",
                "",
                `    ${tokens.kw("public")} ${tokens.kw("void")} ${tokens.method("showcase")}() {`,
                `        System.out.println(${tokens.string("\"Project portfolio ready.\"")});`,
                "    }",
                "}"
              ],
              runOutput: [
                "> Executing ProjectsPage.java...",
                ">",
                "> Project: Data Validation & API Quality Testing",
                "> Role: Freelance QA Engineer",
                "> Timeline: Dec 2025 - Jan 2026",
                "> Highlights:",
                "> ✓ Validated ETL pipelines with pre/post-load checks",
                "> ✓ Executed SQL queries (SELECT, COUNT, JOIN, GROUP BY)",
                "> ✓ Tested REST APIs with Postman and Rest Assured",
                "> ✓ Verified transformation logic, null handling, duplicate checks",
                ">",
                "> Status: PASSED"
              ]
            },
            {
              name: "SkillsPage.java",
              type: "file",
              icon: "java",
              language: "java",
              content: [
                `${tokens.kw("package")} pages;`,
                "",
                `${tokens.kw("import")} java.util.Map;`,
                `${tokens.kw("import")} java.util.List;`,
                "",
                `${tokens.kw("public")} ${tokens.kw("class")} SkillsPage {`,
                `    ${tokens.kw("private")} ${tokens.kw("final")} ${tokens.type("Map")}&lt;${tokens.type("String")}, ${tokens.type(
                  "List"
                )}&lt;${tokens.type("String")}>> skills = Map.of(`,
                `        ${tokens.string("\"Programming & Query\"")}, List.of(${tokens.string("\"Java\"")}, ${tokens.string(
                  "\"SQL\""
                )}),`,
                `        ${tokens.string("\"UI Automation\"")}, List.of(${tokens.string("\"Selenium WebDriver\"")}, ${tokens.string(
                  "\"TestNG\""
                )}, ${tokens.string("\"JUnit\"")}),`,
                `        ${tokens.string("\"API Automation\"")}, List.of(${tokens.string("\"Rest Assured\"")}, ${tokens.string(
                  "\"Postman\""
                )}),`,
                `        ${tokens.string("\"Build & CI/CD\"")}, List.of(${tokens.string("\"Maven\"")}, ${tokens.string(
                  "\"Jenkins\""
                )}),`,
                `        ${tokens.string("\"Testing Expertise\"")}, List.of(${tokens.string("\"Regression\"")}, ${tokens.string(
                  "\"Smoke\""
                )}, ${tokens.string("\"API\"")}, ${tokens.string("\"Integration\"")}),`,
                `        ${tokens.string("\"Frameworks & Patterns\"")}, List.of(${tokens.string("\"Hybrid Framework\"")}, ${tokens.string(
                  "\"Page Object Model\""
                )}),`,
                `        ${tokens.string("\"Tools & Platforms\"")}, List.of(${tokens.string("\"Git\"")}, ${tokens.string(
                  "\"GitHub\""
                )}, ${tokens.string("\"Eclipse\"")}),`,
                `        ${tokens.string("\"Methodologies\"")}, List.of(${tokens.string("\"Agile (Scrum)\"")}, ${tokens.string(
                  "\"SDLC\""
                )}, ${tokens.string("\"STLC\"")})`,
                "    );",
                "",
                `    ${tokens.kw("public")} ${tokens.kw("void")} ${tokens.method("printMatrix")}() {`,
                `        System.out.println(${tokens.string("\"Skill matrix loaded.\"")});`,
                "    }",
                "}"
              ],
              runOutput: [
                "> Executing SkillsPage.java...",
                ">",
                "> Programming & Query: Java, SQL",
                "> UI Automation: Selenium WebDriver, TestNG, JUnit",
                "> API Automation: Rest Assured, Postman",
                "> Build & CI/CD: Maven, Jenkins",
                "> Testing Expertise: Functional, Regression, Smoke, API, Integration",
                "> Frameworks & Patterns: Hybrid Framework, Page Object Model",
                "> Tools & Platforms: Git, GitHub, Eclipse",
                "> Methodologies: Agile (Scrum), SDLC, STLC",
                ">",
                "> Status: PASSED"
              ]
            },
            {
              name: "ContactPage.java",
              type: "file",
              icon: "java",
              language: "java",
              content: [
                `${tokens.kw("package")} pages;`,
                "",
                `${tokens.kw("import")} base.BasePage;`,
                "",
                `${tokens.kw("public")} ${tokens.kw("class")} ContactPage ${tokens.kw("extends")} BasePage {`,
                `    ${tokens.kw("private")} ${tokens.kw("final")} ${tokens.type("String")} email = ${tokens.string(
                  "\"dev-server1@hotmail.com\""
                )};`,
                `    ${tokens.kw("private")} ${tokens.kw("final")} ${tokens.type("String")} phone = ${tokens.string(
                  "\"(226) 961-3847\""
                )};`,
                `    ${tokens.kw("private")} ${tokens.kw("final")} ${tokens.type("String")} linkedIn = ${tokens.string(
                  "\"linkedin.com/in/-ritikmehta-\""
                )};`,
                `    ${tokens.kw("private")} ${tokens.kw("final")} ${tokens.type("String")} location = ${tokens.string(
                  "\"Toronto, ON, Canada\""
                )};`,
                "",
                `    ${tokens.kw("public")} ${tokens.kw("void")} ${tokens.method("connect")}() {`,
                `        System.out.println(${tokens.string("\"Let’s build quality together.\""")});`,
                "    }",
                "}"
              ],
              runOutput: [
                "> Executing ContactPage.java...",
                "> Email: dev-server1@hotmail.com",
                "> Phone: (226) 961-3847",
                "> LinkedIn: linkedin.com/in/-ritikmehta-",
                "> Location: Toronto, ON, Canada",
                ">",
                "> Status: AVAILABLE"
              ]
            }
          ]
        },
        {
          name: "utils",
          type: "folder",
          children: [
            {
              name: "DriverFactory.java",
              type: "file",
              icon: "java",
              language: "java",
              content: [
                `${tokens.kw("package")} utils;`,
                "",
                `${tokens.kw("public")} ${tokens.kw("class")} DriverFactory {`,
                `    ${tokens.comment("// Selenium WebDriver configuration and browser management")}
                `,
                `    ${tokens.kw("public")} ${tokens.type("WebDriver")} ${tokens.method("createDriver")}(${tokens.type(
                  "String"
                )} browser) {`,
                `        ${tokens.kw("return")} new ${tokens.type("RemoteWebDriver")}(${tokens.string(
                  "\"/selenium/grid\""
                )});`,
                "    }",
                "}"
              ],
              runOutput: [
                "> Executing DriverFactory.java...",
                "> Provisioning Selenium WebDriver grid",
                "> Browsers: Chrome, Edge, Firefox",
                "> Status: READY"
              ]
            },
            {
              name: "WaitUtils.java",
              type: "file",
              icon: "java",
              language: "java",
              content: [
                `${tokens.kw("package")} utils;`,
                "",
                `${tokens.kw("public")} ${tokens.kw("class")} WaitUtils {`,
                `    ${tokens.comment("// Explicit waits, fluent waits, and smart polling")}
                `,
                `    ${tokens.kw("public")} ${tokens.kw("void")} ${tokens.method("waitForReadyState")}() {`,
                `        ${tokens.comment("// Synchronization expertise")}
                `,
                "    }",
                "}"
              ],
              runOutput: [
                "> Executing WaitUtils.java...",
                "> Applying explicit + fluent waits",
                "> Status: SYNCHRONIZED"
              ]
            },
            {
              name: "ScreenshotUtils.java",
              type: "file",
              icon: "java",
              language: "java",
              content: [
                `${tokens.kw("package")} utils;`,
                "",
                `${tokens.kw("public")} ${tokens.kw("class")} ScreenshotUtils {`,
                `    ${tokens.comment("// Reporting and debugging snapshots")}
                `,
                `    ${tokens.kw("public")} ${tokens.type("String")} ${tokens.method("capture")}() {`,
                `        ${tokens.kw("return")} ${tokens.string("\"/reports/screenshots/latest.png\"")};`,
                "    }",
                "}"
              ],
              runOutput: [
                "> Executing ScreenshotUtils.java...",
                "> Capturing evidence for reporting",
                "> Status: STORED"
              ]
            },
            {
              name: "ConfigReader.java",
              type: "file",
              icon: "java",
              language: "java",
              content: [
                `${tokens.kw("package")} utils;`,
                "",
                `${tokens.kw("public")} ${tokens.kw("class")} ConfigReader {`,
                `    ${tokens.comment("// Framework configuration & environment strategy")}
                `,
                `    ${tokens.kw("public")} ${tokens.type("String")} ${tokens.method("getEnv")}() {`,
                `        ${tokens.kw("return")} ${tokens.string("\"staging\"")};`,
                "    }",
                "}"
              ],
              runOutput: [
                "> Executing ConfigReader.java...",
                "> Loading framework configuration",
                "> Status: CONFIGURED"
              ]
            },
            {
              name: "DatabaseUtils.java",
              type: "file",
              icon: "java",
              language: "java",
              content: [
                `${tokens.kw("package")} utils;`,
                "",
                `${tokens.kw("public")} ${tokens.kw("class")} DatabaseUtils {`,
                `    ${tokens.comment("// SQL validation for backend and data pipelines")}
                `,
                `    ${tokens.kw("public")} ${tokens.type("int")} ${tokens.method("rowCount")}(${tokens.type(
                  "String"
                )} table) {`,
                `        ${tokens.kw("return")} ${tokens.constant("42")};`,
                "    }",
                "}"
              ],
              runOutput: [
                "> Executing DatabaseUtils.java...",
                "> Validating SQL row counts and mappings",
                "> Status: VERIFIED"
              ]
            }
          ]
        },
        {
          name: "tests",
          type: "folder",
          children: [
            {
              name: "SmokeTest.java",
              type: "file",
              icon: "java",
              language: "java",
              content: [
                `${tokens.kw("package")} tests;`,
                "",
                `${tokens.annotation("@Test")} ${tokens.kw("public")} ${tokens.kw("class")} SmokeTest {`,
                `    ${tokens.comment("// Project: Logistics Website")}
                `,
                `    ${tokens.kw("public")} ${tokens.kw("void")} ${tokens.method("validateShipments")}() {`,
                `        ${tokens.comment("// Login, create shipment, verify tracking, confirm delivery")}
                `,
                "    }",
                "}"
              ],
              runOutput: [
                "> Running SmokeTest.java...",
                "> Project: Logistics Website",
                "> Scenario: Create shipment → Track → Deliver",
                "> Result: PASSED"
              ]
            },
            {
              name: "RegressionTest.java",
              type: "file",
              icon: "java",
              language: "java",
              content: [
                `${tokens.kw("package")} tests;`,
                "",
                `${tokens.annotation("@Test")} ${tokens.kw("public")} ${tokens.kw("class")} RegressionTest {`,
                `    ${tokens.comment("// Project: AI Chatbot")}
                `,
                `    ${tokens.kw("public")} ${tokens.kw("void")} ${tokens.method("validateResponses")}() {`,
                `        ${tokens.comment("// NLU intents, context memory, fallback accuracy")}
                `,
                "    }",
                "}"
              ],
              runOutput: [
                "> Running RegressionTest.java...",
                "> Project: AI Chatbot",
                "> Scenario: Intent accuracy + context memory",
                "> Result: PASSED"
              ]
            },
            {
              name: "FrameworkTest.java",
              type: "file",
              icon: "java",
              language: "java",
              content: [
                `${tokens.kw("package")} tests;`,
                "",
                `${tokens.annotation("@Test")} ${tokens.kw("public")} ${tokens.kw("class")} FrameworkTest {`,
                `    ${tokens.comment("// Project: Selenium Automation Framework")}
                `,
                `    ${tokens.kw("public")} ${tokens.kw("void")} ${tokens.method("validateFramework")}() {`,
                `        ${tokens.comment("// Reporting, parallel runs, data-driven suites")}
                `,
                "    }",
                "}"
              ],
              runOutput: [
                "> Running FrameworkTest.java...",
                "> Project: Selenium Automation Framework",
                "> Scenario: Parallel suite execution + reporting",
                "> Result: PASSED"
              ]
            }
          ]
        }
      ]
    },
    {
      name: "pom.xml",
      type: "file",
      icon: "xml",
      language: "xml",
      content: [
        `${tokens.xmlTag("&lt;project&gt;")}`,
        `  ${tokens.xmlTag("&lt;modelVersion&gt;")}${tokens.string("4.0.0")}${tokens.xmlTag("&lt;/modelVersion&gt;")}`,
        `  ${tokens.xmlTag("&lt;groupId&gt;")}${tokens.string("com.ritik.qa")}${tokens.xmlTag("&lt;/groupId&gt;")}`,
        `  ${tokens.xmlTag("&lt;artifactId&gt;")}${tokens.string("qa-automation-portfolio")}${tokens.xmlTag(
          "&lt;/artifactId&gt;"
        )}`,
        `  ${tokens.xmlTag("&lt;dependencies&gt;")}`,
        `    ${tokens.xmlTag("&lt;dependency&gt;")}`,
        `      ${tokens.xmlTag("&lt;groupId&gt;")}${tokens.string("org.seleniumhq.selenium")}${tokens.xmlTag(
          "&lt;/groupId&gt;"
        )}`,
        `      ${tokens.xmlTag("&lt;artifactId&gt;")}${tokens.string("selenium-java")}${tokens.xmlTag(
          "&lt;/artifactId&gt;"
        )}`,
        `    ${tokens.xmlTag("&lt;/dependency&gt;")}`,
        `    ${tokens.xmlTag("&lt;dependency&gt;")}`,
        `      ${tokens.xmlTag("&lt;groupId&gt;")}${tokens.string("org.testng")}${tokens.xmlTag(
          "&lt;/groupId&gt;"
        )}`,
        `      ${tokens.xmlTag("&lt;artifactId&gt;")}${tokens.string("testng")}${tokens.xmlTag("&lt;/artifactId&gt;")}`,
        `    ${tokens.xmlTag("&lt;/dependency&gt;")}`,
        `    ${tokens.xmlTag("&lt;dependency&gt;")}`,
        `      ${tokens.xmlTag("&lt;groupId&gt;")}${tokens.string("io.rest-assured")}${tokens.xmlTag(
          "&lt;/groupId&gt;"
        )}`,
        `      ${tokens.xmlTag("&lt;artifactId&gt;")}${tokens.string("rest-assured")}${tokens.xmlTag(
          "&lt;/artifactId&gt;"
        )}`,
        `    ${tokens.xmlTag("&lt;/dependency&gt;")}`,
        `    ${tokens.xmlTag("&lt;dependency&gt;")}`,
        `      ${tokens.xmlTag("&lt;groupId&gt;")}${tokens.string("org.springframework.boot")}${tokens.xmlTag(
          "&lt;/groupId&gt;"
        )}`,
        `      ${tokens.xmlTag("&lt;artifactId&gt;")}${tokens.string("spring-boot-starter")}${tokens.xmlTag(
          "&lt;/artifactId&gt;"
        )}`,
        `    ${tokens.xmlTag("&lt;/dependency&gt;")}`,
        `    ${tokens.xmlTag("&lt;dependency&gt;")}`,
        `      ${tokens.xmlTag("&lt;groupId&gt;")}${tokens.string("org.postgresql")}${tokens.xmlTag(
          "&lt;/groupId&gt;"
        )}`,
        `      ${tokens.xmlTag("&lt;artifactId&gt;")}${tokens.string("postgresql")}${tokens.xmlTag(
          "&lt;/artifactId&gt;"
        )}`,
        `    ${tokens.xmlTag("&lt;/dependency&gt;")}`,
        `  ${tokens.xmlTag("&lt;/dependencies&gt;")}`,
        `  ${tokens.xmlTag("&lt;properties&gt;")}`,
        `    ${tokens.xmlTag("&lt;java.version&gt;")}${tokens.string("17")}${tokens.xmlTag("&lt;/java.version&gt;")}`,
        `    ${tokens.xmlTag("&lt;tools&gt;")}${tokens.string(
          "Selenium, TestNG, Jenkins, SQL, Postman, Docker, Git, Spring Boot, React, Angular, Node.js"
        )}${tokens.xmlTag("&lt;/tools&gt;")}`,
        `  ${tokens.xmlTag("&lt;/properties&gt;")}`,
        `${tokens.xmlTag("&lt;/project&gt;")}`
      ],
      runOutput: [
        "> Executing pom.xml...",
        "> Dependencies: Java, Selenium, TestNG, Jenkins, SQL, Postman, Docker, Git",
        "> Frameworks: Spring Boot, React, Angular, Node.js",
        "> Status: RESOLVED"
      ]
    },
    {
      name: "testng.xml",
      type: "file",
      icon: "xml",
      language: "xml",
      content: [
        `${tokens.xmlTag("&lt;suite")}${tokens.xmlAttr(" name=")}${tokens.string("\"QA-Automation-Suite\"")}${tokens.xmlTag(
          "&gt;"
        )}`,
        `  ${tokens.xmlTag("&lt;test")}${tokens.xmlAttr(" name=")}${tokens.string("\"Smoke Testing\"")}${tokens.xmlTag(
          "&gt;"
        )}`,
        `    ${tokens.xmlTag("&lt;classes&gt;")}${tokens.xmlTag("&lt;/classes&gt;")}`,
        `  ${tokens.xmlTag("&lt;/test&gt;")}`,
        `  ${tokens.xmlTag("&lt;test")}${tokens.xmlAttr(" name=")}${tokens.string("\"Regression Testing\"")}${tokens.xmlTag(
          "&gt;"
        )}`,
        `    ${tokens.xmlTag("&lt;classes&gt;")}${tokens.xmlTag("&lt;/classes&gt;")}`,
        `  ${tokens.xmlTag("&lt;/test&gt;")}`,
        `  ${tokens.xmlTag("&lt;test")}${tokens.xmlAttr(" name=")}${tokens.string("\"Sanity Testing\"")}${tokens.xmlTag(
          "&gt;"
        )}`,
        `    ${tokens.xmlTag("&lt;classes&gt;")}${tokens.xmlTag("&lt;/classes&gt;")}`,
        `  ${tokens.xmlTag("&lt;/test&gt;")}`,
        `  ${tokens.xmlTag("&lt;test")}${tokens.xmlAttr(" name=")}${tokens.string("\"API Testing\"")}${tokens.xmlTag(
          "&gt;"
        )}`,
        `    ${tokens.xmlTag("&lt;classes&gt;")}${tokens.xmlTag("&lt;/classes&gt;")}`,
        `  ${tokens.xmlTag("&lt;/test&gt;")}`,
        `  ${tokens.xmlTag("&lt;test")}${tokens.xmlAttr(" name=")}${tokens.string("\"Database Testing\"")}${tokens.xmlTag(
          "&gt;"
        )}`,
        `    ${tokens.xmlTag("&lt;classes&gt;")}${tokens.xmlTag("&lt;/classes&gt;")}`,
        `  ${tokens.xmlTag("&lt;/test&gt;")}`,
        `  ${tokens.xmlTag("&lt;test")}${tokens.xmlAttr(" name=")}${tokens.string("\"Cross Browser Testing\"")}${tokens.xmlTag(
          "&gt;"
        )}`,
        `    ${tokens.xmlTag("&lt;classes&gt;")}${tokens.xmlTag("&lt;/classes&gt;")}`,
        `  ${tokens.xmlTag("&lt;/test&gt;")}`,
        `${tokens.xmlTag("&lt;/suite&gt;")}`
      ],
      runOutput: [
        "> Executing testng.xml...",
        "> Suites: Smoke, Regression, Sanity, API, Database, Cross Browser",
        "> Status: CONFIGURED"
      ]
    }
  ]
};

const fileIndex = new Map();

const indexFiles = (node, parentPath = "") => {
  const currentPath = parentPath ? `${parentPath}/${node.name}` : node.name;
  node.path = currentPath;
  if (node.type === "file") {
    fileIndex.set(currentPath, node);
  }
  if (node.children) {
    node.children.forEach((child) => indexFiles(child, currentPath));
  }
};

indexFiles(fileSystem);

class ConsolePanel {
  constructor(outputEl) {
    this.outputEl = outputEl;
    this.timers = [];
  }

  clear() {
    this.outputEl.textContent = "";
    this.timers.forEach((timer) => clearTimeout(timer));
    this.timers = [];
  }

  writeLine(line) {
    this.outputEl.textContent += `${line}\n`;
    this.outputEl.scrollTop = this.outputEl.scrollHeight;
  }

  writeLines(lines, delay = 180) {
    lines.forEach((line, index) => {
      const timer = setTimeout(() => {
        this.writeLine(line);
      }, delay * index);
      this.timers.push(timer);
    });
  }
}

class StatusBar {
  constructor(leftEl) {
    this.leftEl = leftEl;
  }

  set(message) {
    this.leftEl.textContent = message;
  }
}

class ActivityIndicator {
  constructor(container, labelEl) {
    this.container = container;
    this.labelEl = labelEl;
  }

  show(label) {
    this.labelEl.textContent = label;
    this.container.classList.add("active");
  }

  hide() {
    this.container.classList.remove("active");
  }
}

class TabManager {
  constructor(container, onSelect) {
    this.container = container;
    this.onSelect = onSelect;
    this.tabs = new Map();
    this.activePath = null;

    this.container.addEventListener("click", (event) => {
      const tabEl = event.target.closest(".tab");
      if (!tabEl) {
        return;
      }
      const path = tabEl.dataset.path;
      if (event.target.classList.contains("close")) {
        this.closeTab(path);
        return;
      }
      this.setActive(path);
    });
  }

  openTab(file) {
    if (this.tabs.has(file.path)) {
      this.setActive(file.path);
      return;
    }

    const tab = document.createElement("div");
    tab.className = "tab";
    tab.dataset.path = file.path;
    tab.innerHTML = `
      <span>${file.name}</span>
      <span class="close">✕</span>
    `;

    this.container.appendChild(tab);
    this.tabs.set(file.path, tab);
    this.setActive(file.path);
  }

  closeTab(path) {
    const tab = this.tabs.get(path);
    if (!tab) return;

    tab.remove();
    this.tabs.delete(path);

    if (this.activePath === path) {
      const remaining = Array.from(this.tabs.keys());
      this.activePath = null;
      if (remaining.length) {
        this.setActive(remaining[remaining.length - 1]);
      } else {
        this.onSelect(null);
      }
    }
  }

  setActive(path) {
    if (!this.tabs.has(path)) return;

    this.tabs.forEach((tab) => tab.classList.remove("active"));
    const tab = this.tabs.get(path);
    tab.classList.add("active");
    this.activePath = path;
    this.onSelect(path);
  }

  getActivePath() {
    return this.activePath;
  }
}

class Explorer {
  constructor(container, treeData, onOpen, onRun) {
    this.container = container;
    this.treeData = treeData;
    this.onOpen = onOpen;
    this.onRun = onRun;
    this.nodeMap = new Map();
    this.render();
    this.bindEvents();
  }

  render() {
    this.container.innerHTML = "";
    const rootList = document.createElement("ul");
    rootList.className = "tree-root";
    rootList.appendChild(this.renderNode(this.treeData));
    this.container.appendChild(rootList);
  }

  renderNode(node) {
    const li = document.createElement("li");
    li.className = "tree-node";
    li.dataset.path = node.path;
    li.dataset.type = node.type;

    const row = document.createElement("div");
    row.className = "node-row";
    row.dataset.path = node.path;

    const arrow = document.createElement("span");
    arrow.className = "arrow";
    arrow.textContent = node.type === "file" ? "" : "▾";

    const icon = document.createElement("span");
    const iconType = node.icon || (node.type === "file" ? "java" : "folder");
    icon.className = `icon ${iconType}`;

    const label = document.createElement("span");
    label.className = "label";
    label.textContent = node.name;

    row.appendChild(arrow);
    row.appendChild(icon);
    row.appendChild(label);

    if (node.type === "file") {
      const runButton = document.createElement("button");
      runButton.className = "mini-run";
      runButton.textContent = "▶";
      runButton.dataset.action = "run-file";
      row.appendChild(runButton);
    }

    li.appendChild(row);
    this.nodeMap.set(node.path, row);

    if (node.children && node.children.length) {
      const children = document.createElement("ul");
      children.className = "tree-children";
      node.children.forEach((child) => children.appendChild(this.renderNode(child)));
      li.appendChild(children);
    }

    return li;
  }

  bindEvents() {
    this.container.addEventListener("click", (event) => {
      const runButton = event.target.closest(".mini-run");
      if (runButton) {
        const row = runButton.closest(".node-row");
        const file = fileIndex.get(row.dataset.path);
        if (file) {
          this.onRun(file);
        }
        return;
      }

      const row = event.target.closest(".node-row");
      if (!row) return;
      const path = row.dataset.path;
      const node = fileIndex.get(path);
      if (node) {
        this.onOpen(node);
        return;
      }

      const li = row.parentElement;
      if (li && li.classList.contains("tree-node")) {
        li.classList.toggle("collapsed");
        const arrow = row.querySelector(".arrow");
        if (arrow) {
          arrow.textContent = li.classList.contains("collapsed") ? "▸" : "▾";
        }
      }
    });
  }

  setActive(path) {
    this.nodeMap.forEach((row) => row.classList.remove("active"));
    const row = this.nodeMap.get(path);
    if (row) {
      row.classList.add("active");
    }
  }

  filter(query) {
    const term = query.trim().toLowerCase();

    const matches = new Set();
    const evaluate = (node) => {
      const nameMatch = node.name.toLowerCase().includes(term);
      let childMatch = false;
      if (node.children) {
        childMatch = node.children.some(evaluate);
      }
      const isMatch = term.length === 0 || nameMatch || childMatch;
      if (isMatch) {
        matches.add(node.path);
      }
      return nameMatch || childMatch;
    };

    evaluate(this.treeData);

    this.nodeMap.forEach((row, path) => {
      const node = row.parentElement;
      if (!node) return;
      node.classList.toggle("hidden", term.length > 0 && !matches.has(path));
    });
  }
}

class Runner {
  constructor(consolePanel, statusBar, activity) {
    this.consolePanel = consolePanel;
    this.statusBar = statusBar;
    this.activity = activity;
  }

  run(file, action) {
    if (!file && action === "run") {
      this.statusBar.set("Select a file to run.");
      return;
    }

    const label = action === "run" ? "Run" : action.charAt(0).toUpperCase() + action.slice(1);
    const targetName = file ? file.name : "QA-Automation-Portfolio";
    this.statusBar.set(`${label} started for ${targetName}`);
    this.activity.show(`${label} in progress...`);
    this.consolePanel.clear();

    const header = [
      `> ${label} initiated...`,
      "> [INFO] Initializing workspace",
      `> [INFO] Compiling ${targetName}`,
      "> [INFO] Resolving dependencies",
      ">"
    ];

    let body = [];
    if (action === "clean") {
      body = [
        "> Cleaning project workspace...",
        "> Clearing temporary artifacts",
        "> Workspace clean complete",
        ">",
        "> Status: CLEAN"
      ];
    } else if (action === "build") {
      body = [
        "> Packaging QA-Automation-Portfolio",
        "> Maven lifecycle: validate → compile → test → package",
        "> BUILD SUCCESS",
        ">",
        "> Status: SUCCESS"
      ];
    } else if (action === "debug") {
      body = [
        `> Debug session attached to ${targetName}`,
        "> Breakpoints: loaded",
        "> Step-through mode: enabled",
        ">",
        ...(file?.runOutput || ["> Status: READY"]),
        ">",
        "> Status: DEBUG COMPLETE"
      ];
    } else {
      body = [...(file?.runOutput || ["> Status: READY"]), ">", "> Status: PASSED"];
    }

    this.consolePanel.writeLines([...header, ...body]);

    setTimeout(() => {
      this.activity.hide();
      this.statusBar.set(`${label} finished for ${targetName}`);
    }, 180 * (header.length + body.length + 2));
  }
}

const buildCodeView = (file) => {
  const container = document.createElement("div");
  container.className = "editor-content";
  const list = document.createElement("ol");
  list.className = "code-lines";
  file.content.forEach((line) => {
    const item = document.createElement("li");
    const span = document.createElement("span");
    span.className = "code-line";
    span.innerHTML = line;
    item.appendChild(span);
    list.appendChild(item);
  });
  container.appendChild(list);
  requestAnimationFrame(() => container.classList.add("open"));
  return container;
};

const init = () => {
  const treeContainer = document.getElementById("file-tree");
  const tabsContainer = document.getElementById("tabs");
  const editor = document.getElementById("editor");
  const activeFileLabel = document.getElementById("active-file-label");
  const consoleOutput = document.getElementById("console-output");
  const statusLeft = document.getElementById("status-left");
  const activityIndicator = document.getElementById("activity-indicator");
  const activityLabel = document.getElementById("activity-label");
  const treeSearch = document.getElementById("tree-search");
  const runActiveButton = document.getElementById("run-active");

  const consolePanel = new ConsolePanel(consoleOutput);
  const statusBar = new StatusBar(statusLeft);
  const activity = new ActivityIndicator(activityIndicator, activityLabel);

  const tabManager = new TabManager(tabsContainer, (path) => {
    editor.innerHTML = "";
    if (!path) {
      editor.innerHTML = '<div class="editor-placeholder">Open a file from the Package Explorer to explore the framework.</div>';
      activeFileLabel.textContent = "QA-Automation-Portfolio";
      explorer.setActive(null);
      return;
    }
    const file = fileIndex.get(path);
    if (!file) return;
    editor.appendChild(buildCodeView(file));
    activeFileLabel.textContent = file.path;
    explorer.setActive(path);
  });

  const runner = new Runner(consolePanel, statusBar, activity);

  const explorer = new Explorer(
    treeContainer,
    fileSystem,
    (file) => {
      tabManager.openTab(file);
      statusBar.set(`${file.name} opened`);
    },
    (file) => {
      tabManager.openTab(file);
      runner.run(file, "run");
    }
  );

  treeSearch.addEventListener("input", (event) => {
    explorer.filter(event.target.value);
  });

  document.querySelectorAll(".tool-button[data-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.action;
      const activePath = tabManager.getActivePath();
      const file = activePath ? fileIndex.get(activePath) : null;
      runner.run(file, action);
    });
  });

  runActiveButton.addEventListener("click", () => {
    const activePath = tabManager.getActivePath();
    const file = activePath ? fileIndex.get(activePath) : null;
    runner.run(file, "run");
  });

  document.getElementById("clear-console").addEventListener("click", () => {
    consolePanel.clear();
    statusBar.set("Console cleared");
  });
};

document.addEventListener("DOMContentLoaded", init);
