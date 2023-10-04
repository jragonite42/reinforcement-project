# SpellSmith

<div>
    <img src="https://i.imgur.com/drZFBvo.png">
</div>
<hr>

## Background

We live in a world of autocorrect and predictive text. Over time, spelling skills have been on the decline.

Our solution is a spelling app to help people practice their spelling (think Duolingo but for complicated English words!).

## Setup

- Fork and clone the repo to your local machine.
- Create a .env file and declare a variable `MONGO_URL` with the assigned value of your MONGODB connection string.
  In your terminal, run the following:
  `npm install`
  `npm run build`
  `npm start`
- To run some tests, run `npm run test`

You will then see SpellSmith locally hosted at port 3000.

## Technical Challenges

- We handled two API calls, one to retrieve a random word and one to generate a text-to-speech file of the random word. Integrating both calls into frontend components with interconnected functionality was challenging.
- Managing the flow of state and data in Redux alongside the asynchronicity of API and database operations required the use of thunks. It required a great deal of research into Redux Documentation.

## Stretch Features

- Implementing timer functionality
- Implementing feedback on user guesses
- Extending functionality to support multiple languages
- Supporting different difficulty levels in words you spell
- Adding a Forgot Password feature

## Additional Info

This app harnesses the power of Redux. Logo was created using elements from Canva.

## Contributors

**Chris Le** | [LinkedIn](https://www.linkedin.com/in/chrisle96/) | [GitHub](https://github.com/dragblas)
**Daniel (Jung Tae) Lee** | [LinkedIn](https://www.linkedin.com/in/jungtaelee/) | [GitHub](https://github.com/jungtaelee0128)
**Tiffany Wong** | [LinkedIn](https://www.linkedin.com/in/tiffanywong149/) | [GitHub](https://github.com/twong-cs)
**Woobae Kim** | [LinkedIn](https://www.linkedin.com/in/woobaekim/) | [GitHub](https://github.com/woobaekim)
