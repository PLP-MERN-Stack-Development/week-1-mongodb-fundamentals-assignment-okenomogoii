

// 1. Find all books


// 2. Find books by a specific author (example: George Orwell)
db.books.find({ author: "George Orwell" })

// 3. Find books published after 1950
db.books.find({ published_year: { $gt: 1950 } })

// 4. Find books in a specific genre (example: Fiction)
db.books.find({ genre: "Fiction" })

// 5. Find in-stock books
db.books.find({ in_stock: true })

// 6. Example of projection: Show only title and author for all books
db.books.find({}, { title: 1, author: 1, _id: 0 })

// 7. Example of sorting: Sort books by published_year descending
db.books.find().sort({ published_year: -1 })

// 8. Example aggregation pipeline: Group books by genre and count
db.books.aggregate([
  { $group: { _id: "$genre", count: { $sum: 1 } } }
])

// 9. Create an index on the author field for performance
db.books.createIndex({ author: 1 })