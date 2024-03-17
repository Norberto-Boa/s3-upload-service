FROM node:20-alpine

#Create a app directory
WORKDIR /app

#Install the dependencies
COPY package*.json ./

ENV AWS_SECRET_ACCESS_KEY_ID="G/FHEEYfelZCXLco07VKepdv9Y+KtZ7FvRjU3FFX"
ENV AWS_ACCESS_KEY_ID="AKIA3FLDYLMTPAIEGHBP"
ENV S3_REGION="eu-west-2"
ENV S3_BUCKET="anytechfirstbucket"

#Run npm install
RUN npm install

#Bundle the app source
COPY . .

EXPOSE 4444

CMD [ "npm", "run", "dev" ]