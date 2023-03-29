class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name
        this.releaseDate = releaseDate
        this.pagesCount = pagesCount
        this._state = 100
        this.type = null
    }

    set state(state) {
        if(state <= 0 ) {
            this._state = 0
        }
        if(state >= 100){
            this._state = 100
        }
        this._state = state
    }

    get state() {
        return this._state
    }

    fix() {
        if(this._state >= 100 || this._state === 0) {
            return
        }
        let res = this._state * 1.5
        return  res >= 100 ? this._state = 100 : this._state = res
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.type = "magazine"
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.author = author
        this.type = "book"
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = "novel"
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = "fantastic"
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = "detective"
    }
}


class Library {
    constructor(name){
        this.name = name
        this.books = []
    }

    addBook(book) {
        if (book._state >= 30) {
            this.books.push(book)
        }
    }

    findBookBy(type, value){
        let book = this.books.find(book => (type in book && Object.values(book).includes(value))) 
        return book === undefined ? null : book
    }

    giveBookByName(bookName){
        let book = this.books.find(book => book.name === bookName)
        if (book === undefined) {
            return null
        }
        this.books.splice(this.books.indexOf(book), 1)
        return book
    }
}

class Student {
    constructor(name){
        this.name = name
        this.marks = {}
    }

    addMark(mark, subject) {
        if(mark <= 0 || mark > 5) {
            return
        }
        if([subject] in this.marks) {
            return this.marks[subject].push(mark)
        }
        return this.marks[subject] = [mark]
    }

    getAverageBySubject(subject) {
        if([subject] in this.marks){
            return this.marks[subject].reduce((acc, num, ind, arr) => {
                acc += num
                if(ind === arr.length - 1) {
                    return acc / arr.length
                }
                return acc
            }, 0)
        }
        return 0
    }

    getAverage() {
        let keys = Object.keys(this.marks)
        if(keys.length === 0) {
            return 0
        }
        let sum = 0
        for( let i in keys){
            sum += this.getAverageBySubject(keys[i])
        }
        return sum / keys.length
    }
}