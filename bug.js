```javascript
//Incorrect aggregation pipeline causing unexpected results
db.collection.aggregate([
  {
    $match: { /*some filter*/ }
  },
  {
    $group: {
      _id: "$fieldName",
      count: { $sum: 1 }
    }
  },
  {
    $sort: {count: -1}
  },
  {
    $limit: 10 } // Limiting to 10 documents after sorting may lead to unexpected results depending on the data distribution
]);
```