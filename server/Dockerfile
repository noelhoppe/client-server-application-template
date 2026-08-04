ARG JAVA_BUILDER_IMAGE=eclipse-temurin:25-alpine
ARG JAVA_RUNTIME_IMAGE=gcr.io/distroless/java25-debian13:nonroot
FROM ${JAVA_BUILDER_IMAGE} AS builder
WORKDIR /app/server
COPY .mvn ./.mvn
COPY mvnw pom.xml ./
RUN ./mvnw dependency:go-offline
COPY src ./src
RUN ./mvnw package



FROM ${JAVA_RUNTIME_IMAGE}
ARG SPRING_PROFILES_ACTIVE=prod
ENV SPRING_PROFILES_ACTIVE=${SPRING_PROFILES_ACTIVE}
LABEL maintainer="noelhoppe" \
    version="0.0.1" \
    environment=${SPRING_PROFILES_ACTIVE} \
    description="Runtime docker image for the server application."
WORKDIR /app
COPY --from=builder /app/server/target/*.jar ./app.jar
USER nonroot:nonroot
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "./app.jar"]
