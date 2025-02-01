# MongoDB Aggregation Pipeline Bug
This repository demonstrates a common error in MongoDB aggregation pipelines where applying the `$limit` stage after `$sort` can lead to unexpected results.  The issue arises because the pipeline limits the result set *before* the final sorting operation is applied, leading to an incompletely sorted top 10.

## Bug Description
The provided JavaScript code contains an aggregation pipeline designed to retrieve the top 10 most frequent values of a specific field. However, due to the order of the `$sort` and `$limit` stages, the results are not always the actual top 10. If the data is not uniformly distributed, the `$limit` stage restricts the document set before the data is properly sorted.

## Solution
To fix this issue, simply reorder the `$sort` and `$limit` stages in the aggregation pipeline. This ensures the data is fully sorted before the top 10 is selected, guaranteeing accurate results.