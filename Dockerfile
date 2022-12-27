#Base imagine taken from:https://github.com/cypress-io/cypress-docker-images
FROM cypress/browsers:node18.12.0-chrome106-ff106
#Create the folder where our project will be stored
RUN mkdir /bakersoftautomation
#We make it our workdirectory
WORKDIR /BakerSoftAutomation
#Let's copy the essential files that we Must us to run our scripts.
COPY ./package.json .
COPY ./cypress ./cypress
#Install the cypress dependencies in the work dirctory
RUN npm install
#Excutable commands the container will use [Exec Form]
ENTRYPOINT ["npx", "cypress", "run"]
#With CMD in this case, w can spcify more parameteers to th last entrypoint.
CMD [""]