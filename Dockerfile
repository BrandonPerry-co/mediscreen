FROM openjdk:17
ADD target/mediscreen.jar mediscreen.jar
ENTRYPOINT ["java","-jar","/mediscreen.jar"]