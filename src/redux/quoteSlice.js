import { createSlice } from "@reduxjs/toolkit"
import quotes from "../data/quotes.json"

const getRandomQuote = () => {
  const random = Math.floor(Math.random() * quotes.length)
  const quote = quotes[random]
  return {
    text: quote.quoteText,
    author: quote.quoteAuthor,
  }
}

const quoteSlice = createSlice({
  name: "quote",
  initialState: getRandomQuote(),
  reducers: {
    newQuote: () => getRandomQuote(),
  },
})

export const { newQuote } = quoteSlice.actions

export default quoteSlice.reducer
