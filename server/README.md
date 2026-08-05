# Client-Server-Application Web Client Documentation

This directory contains a [Spring Boot](https://spring.io/projects/spring-boot) project bootstrapped
with [spring initializer](https://start.spring.io/).

## What's Inside?

This module is the backend api service for the client-server-application. The `server` module contains the backend API
implementation, including REST controllers, services, and persistence layers (Three-tier architecture). It follows a
feature-based structure, where each feature has its own directory containing the relevant components.

## Technology Stack

- Java
- Spring Boot
- Maven

> Refer to the `./pom.xml` file for the complete list of dependencies.

## Responsibilities

Handles data storage, management and access. Moreover, it handles backend data processing and data or performance heavy
computations.

- **Web Layer / API Layer:** Manages communication. Handles requests and produces responses.
    - Responsible for web communication
    - Ensures valid requests and responses
    - Can talk to service layer
    - Translates request data transfer objects to domain models.
    - Translates domain models to response data transfer objects.
- **Business Layer / Service Layer:** Contains business logic and application-specific rules.
    - Has no knowledge about web context
    - Responsible for valid domain state and logic
    - Can talk to persistence layer
- **Persistence Layer / Repository Layer / Data Access Layer:** Manages database interactions and provides an
  abstraction over the data store.

## Package Structure conventions

```
/app
/features
    /<feature-name>
        /api
            /rest
                /requests
                /responses
                <FeatureName>RestController.java
        /services
        /dtos
        /persistence
            /entities
            /repositories 
```

## Quick Start

### Prerequisites

- [SDKMAN!](https://sdkman.io/) and java=25.0.3-tem

### Installation

#### on Linux or macOS

```bash
./mvnw clean install
```

#### on Windows

```bash
./mvnw.cmd clean install
```

### Development

Start the Spring Boot application:

#### on Linux or macOS

```bash
./mvnw spring-boot:run
```

#### on Windows

```bash
./mvnw.cmd spring-boot:run
```

This will start the application at [http://localhost:8080](http://localhost:3000)

### Build for Production

#### on Linux or macOS

```bash
./mvnw clean package
```

#### on Windows

```bash
./mvnw.cmd clean package
```

Builds to `target` directory. The `*.jar` file can be run with:

```bash
java -jar target/*.jar
```

## Project Structure

```
/server/
├── .mvn/                                      # Maven Wrapper configuration
├── src/                                       # Application source code
│   ├── main/
│   │   ├── java/                              # Java application source files
│   │   └── resources/                         # Application resources
│   │       ├── application.yaml               # Spring Boot configuration
│   │       └── static/                        # Static resources (if required)
│   └── test/
│       └── java/                              # Automated tests
├── target/                                    # Build output directory (generated)
├── .gitattributes                             # Git attribute configuration
├── .gitignore                                 # Files ignored by Git
├── .sdkmanrc                                  # SDKMAN Java version configuration
├── AGENTS.md                                  # Instructions for AI agents working on this module
├── Dockerfile                                 # Docker image definition for the backend service
├── CLAUDE.md                                  # Symlink to AGENTS.md
├── GEMINI.md                                  # Symlink to AGENTS.md
├── mvnw                                       # Maven Wrapper script for Linux/macOS
├── mvnw.cmd                                   # Maven Wrapper script for Windows
├── pom.xml                                    # Maven project configuration and dependencies
└── README.md                                  # Module documentation - you are here
```

## Scripts Reference

| Command                       | Description                                                                                                                                                                                           |
|-------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `./mvnw clean install`        | Installs the dependencies on Linux / macOS                                                                                                                                                            |
| `./mvnw.cmd clean install`    | Installs the dependencies on Windows                                                                                                                                                                  |
| `./mvnw spring-boot:run`      | Runs the Spring Boot application on Linux / macOS                                                                                                                                                     |
| `./mvnw.cmd spring-boot:run`  | Runs the Spring Boot application on Windows                                                                                                                                                           |
| `./mvnw checkstyle:check`     | Performs Checkstyle analysis and outputs violations or a count of violations to the console, potentially failing the build on Linux / macOS. It can also be configured to re-use an earlier analysis. |
| `./mvnw.cmd checkstyle:check` | Performs Checkstyle analysis and outputs violations or a count of violations to the console, potentially failing the build on windows. It can also be configured to re-use an earlier analysis.       |
| `./mvnw clean package`        | Builds the application on Linux / macOS                                                                                                                                                               |
| `./mvnw.cmd clean package`    | Builds the application on Windows                                                                                                                                                                     |
| `java -jar target/*.jar`      | Executes the application that was build previously                                                                                                                                                    |

## Dependency and SDK Updates

Update the [pom.xm](./pom.xml) or [.sdkmanrc](./.sdkmanrc) file to update dependencies or SDK versions. After updating,
run the following command to apply the changes:

```bash
./mvnw clean install
```

## Need help or learn more?

### Reference Documentation

For further reference, please consider the following sections:

* [Official Apache Maven documentation](https://maven.apache.org/guides/index.html)
* [Spring Boot Maven Plugin Reference Guide](https://docs.spring.io/spring-boot/4.1.0/maven-plugin)
* [Create an OCI image](https://docs.spring.io/spring-boot/4.1.0/maven-plugin/build-image.html)

### Maven Parent overrides

Due to Maven's design, elements are inherited from the parent POM to the project POM. While most of the inheritance is
fine, it also inherits unwanted elements like `<license>` and `<developers>` from the parent. To prevent this, the
project POM contains empty overrides for these elements. If you manually switch to a different parent and actually want
the inheritance, you need to remove those overrides.