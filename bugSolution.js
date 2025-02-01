```javascript
//Corrected aggregation pipeline
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
    $limit: 10 } // Applying $limit after sorting ensures accurate top 10
]);
```