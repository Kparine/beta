# pull official base image
FROM node:current-slim
# working directory
WORKDIR /Users/kevinparine/ScratchPad/kevin-parine/
COPY package*.json /Users/kevinparine/ScratchPad/kevin-parine/

RUN npm install

# add app
COPY . /Users/kevinparine/ScratchPad/kevin-parine/

EXPOSE 3001

# start app
CMD ["npm", "start"]

