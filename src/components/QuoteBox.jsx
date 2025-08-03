import { React, useEffect } from "react"
import $ from "jquery"
import { useDispatch, useSelector } from "react-redux"
import { newQuote } from "../redux/quoteSlice"
import { Tooltip } from "bootstrap"

const QuoteBox = () => {
  const quote = useSelector((state) => state.quote)
  const dispatch = useDispatch()

  const handleNewQuote = () => {
    $("#text, #author").fadeOut(200, () => {
      dispatch(newQuote())
      $("#text, #author").fadeIn(200)
    })
  }

  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    )
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new Tooltip(tooltipTriggerEl)
    })
  }, [])

  return (
    <div id="quote-box" className="text-center p-4">
      <p id="text">{quote.text}</p>
      <p id="author">{quote.author}</p>
      <div className="buttons d-flex justify-content-between mt-4">
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text="${quote.text}" - ${quote.author}`}
          target="_blank"
          rel="noreferrer"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-custom-class="tooltip-natural"
          title="Condividi su Twitter"
        >
          <i className="bi bi-twitter"></i>
        </a>

        <button
          id="new-quote"
          onClick={handleNewQuote}
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-custom-class="tooltip-natural"
          title="Nuova citazione"
        >
          <i className="bi bi-arrow-repeat"></i>
        </button>
      </div>
    </div>
  )
}

export default QuoteBox
