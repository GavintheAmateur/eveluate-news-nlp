const glossary = {
    "P+": "strong positive",
    "P": "positive",
    "NEU": "neutral",
    "N": "negative",
    "N+": "strong negative",
    "NONE": "without sentiment",
    "AGREEMENT":"agreement",
    "DISAGREEMENT":"disagreement",
    "IRONIC":"ironic",
    "NONIRONIC":" on-ironic"
}

const renderResult = data => {


    console.log(`rendering result from data ${JSON.stringify(data)}`)
    let evaluationSummary = `
    <strong>Evaluation Report</strong>
<table class="evaluation-summary">
<caption>Overvall Evaluation</caption>
<thead>
<tr>
<th>Polarity</th>
<th>Confidence</th>
<th>Irony</th>
</tr>
</thead>
<tbody>
<tr>
<td class="evaluation-summary-polarity">${glossary[data.score_tag]}</td>
<td class="evaluation-summary-confidence">${data.confidence}</td>
<td class="evaluation-summary-irony">${glossary[data.irony]}</td>
</tr>
<tbody>
</table>
`

    let evaluationLedgers = data.sentence_list.map(
        d =>
            `

<tr class="evaluation-ledger">
    <td class="evaluation-ledger-text">${d.text}</td>
    <td class="evaluation-ledger-polarity">${glossary[d.score_tag]}</td>
    <td class="evaluation-ledger-confidence">${d.confidence}</td>
    <td class="evaluation-ledger-agreement">${glossary[d.agreement]}</td>
</tr>
`
    ).join("")

    let eleEvaluationDetails = document.createElement('table');
    eleEvaluationDetails.className = "evaluation-details"
    eleEvaluationDetails.innerHTML = `
<caption>Sentence-by-Sentence</caption>
<thead>
<tr>
<th>Text</th>
<th>Polarity</th>
<th>Confidence</th>
<th>Agreement</th>
</tr>
</thead>
    `
    eleEvaluationDetails.insertAdjacentHTML('beforeend', evaluationLedgers)
    let eleResults = document.getElementById("results")
    eleResults.innerHTML = ''
    eleResults.insertAdjacentHTML('afterbegin', evaluationSummary)
    eleResults.insertAdjacentElement('beforeend', eleEvaluationDetails)

    document.getElementById("submit").setAttribute("value", "Analyze");
}

export { renderResult }
