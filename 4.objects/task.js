function Student(name, gender, age) {
    this.name = name
    this.gender = gender
    this.age = age
    this.marks = []
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName
}

Student.prototype.addMarks = function (...marks) {
    if (!this.wasExcl) {
        for (let mark of marks) {
        parseInt(mark)
        this.marks.push(mark)
        }
    }
}

Student.prototype.getAverage = function () {
    if (this.wasExcl) {
        return 0
    } else {
        return this.marks.reduce((acc, num, ind, arr) => {
            acc += num
            if(ind === arr.length - 1) {
                return acc / arr.length
            }
            return acc
        }, 0)
    }
}

Student.prototype.exclude = function (reason) {
    this.excluded = reason
    this.wasExcl = true
    delete this.marks
    delete this.subject
}