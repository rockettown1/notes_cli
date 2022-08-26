# Notes CLI

## Setup Instructions

- Fork the repository to your own account
- Clone the code (from your forked version) to your own machine
- run ```npm i``` to get the dependencies
- create an ```.env``` file, add an environment variable called MONGO_URI and store a connection string to a MongoDB database (this is exactly the same as the other apps you've done already) Remember to add/change the name of your database in the connection string.
- run the app using the command ```npm run app```

**If you have any problems getting the app running initially please reach out to Dan.**

## Take some time to understand how this app is working

This app uses the Inquirer npm package. You should take a bit of time reading and trying to understand the code that is already there so you can start to add your own features. Code comprehension (reading code you didn't write yourself) is EXTREMELY important as an engineer, and you should practice it at every opportunity. You should also check out the Inquirer documentation found here: [Inquirer Docs](https://github.com/SBoudrias/Inquirer.js#readme).

# Tasks

## Add more options
This app currently has two options, "add" and "exit". Please implement new functionality to:


### 1. List all the notes currently in the database
Add a "list" option, which when selected will retrieve all the notes in your database and list them in the following way:

```
1. Walk the dog.
2. Buy some milk.
3. Wash the car.
```

! Think about how you will pull out just the note (not all the other stuff stored in the MongoDB collection). And also think how you could use the array indicies to number them.

### 2. Delete a note by it's number
Add a "delete" option which requires you to type a number, and will then remove that note from the database.

! Remember to think how you will handle error cases. What happens if a user enters number that doesn't exist in the list? Or types a letter instead of a number?

## Change the design
Even though its a CLI we still want it to have a good user experience.


### 3. Change the font used by Figlet.
The notes on Figlet can be found here: [Figlet](https://www.npmjs.com/package/figlet).
And here's a link to ASCII fonts: [ASCII fonts](https://patorjk.com/software/taag/#p=display&f=Graffiti&t=Type%20Something%20).


### 4. Add some colour!!
This app already uses the Chalk npm package. Play around with it to add some colour. Here's some documentation: [Chalk](https://www.npmjs.com/package/chalk)


## Make it your own
It's always good while you're learning to try and think of your own features and implement them. Playing around with the code will help you understand everything it's doing.

### 5. Can you think of any more features to add?
How about storing more information? An expiry date? Or how about changing the Mongoose model so it has a "done" boolean? How would you implement that feature into the application?


Bonus: Can you answer this question...

Why can you run this app by typing ```npm run app``` rather than typing ```node src/app.js``` like you have before?

If you've done all this, send Dan your repo so he can marvel at your greatness.