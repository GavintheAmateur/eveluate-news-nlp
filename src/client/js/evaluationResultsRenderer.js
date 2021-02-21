const polarities = {
    "P+": "strong positive",
    "P": "positive",
    "NEU": "neutral",
    "N": "negative",
    "N+": "strong negative",
    "NONE": "without sentiment"
}

const renderResult = data => {
    console.log(`rendering result from data ${JSON.stringify(data)}`)
    let evaluationSummary = `
<div class="evaluation-summary">
<div class="evaluation-summary-polarity">${polarities[data.score_tag]}</div>
<div class="evaluation-summary-confidence">${data.confidence}}</div>
<div class="evaluation-summary-irony">${data.irony}}</div>
</div>
`

    let evaluationLedgers = data.sentence_list.reduce(
        d => 
            `
<div class="evaluation-ledger">
    <div class="evaluation-ledger-text">${d.text}</div>
    <div class="evaluation-ledger-polarity">${d.score_tag}</div>
    <div class="evaluation-ledger-confidence">${d.confidence}</div>
    <div class="evaluation-ledger-agreement">${d.agreement}</div>
    <div class="evaluation-ledger-irony">${d.irony}</div>
</div>
`
    )

    let eleEvaluationDetails = document.createElement('div');
    eleEvaluationDetails.className = "evaluation-details"
    eleEvaluationDetails.innerHTML = evaluationLedgers


    let eleResults = document.getElementById("results")
    eleResults.innerHTML = ''
    eleResults.insertAdjacentHTML('afterbegin', evaluationSummary)
    eleResults.insertAdjacentElement('beforeend', eleEvaluationDetails)
}

export {renderResult}
