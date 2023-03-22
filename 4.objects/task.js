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
    if (!('excluded' in this)) {
        this.marks.push(...marks)
    }
}

Student.prototype.getAverage = function () {
    if (!('excluded' in this)) {
        return this.marks.reduce((acc, num, ind, arr) => {
            acc += num
            if(ind === arr.length - 1) {
                return acc / arr.length
            }
            return acc
        }, 0)
    }
    return 0
}

Student.prototype.exclude = function (reason) {
    this.excluded = reason
    delete this.marks
    delete this.subject
}