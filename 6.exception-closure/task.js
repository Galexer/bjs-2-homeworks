"use strict"

function parseCount(input) {
    let res = Number.parseFloat(input)
    if (isNaN(res)) {
        throw new Error("Невалидное значение")
    }
    return res
}

function validateCount(input) {
    try{
        return parseCount(input)
    } catch(error) {
        return error 
    }
}

class Triangle {
    constructor(a, b, c) {
        if( a + b <= c || a + c <= b || b + c <= a) {
            throw new Error("Треугольник с такими сторонами не существует")
        }
        this.a = a
        this.b = b
        this.c = c
    }

    get perimeter() {
        return this._perimeter = this.a + this.b + this.c
    }

    get area() {
        let p = this._perimeter / 2
        this._area = Number.parseFloat(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3))
        return this._area
    }
}

function getTriangle(a, b, c) {
    try{
        return new Triangle(a, b, c)   
    }catch (error) {
        return {
            get perimeter() {
                return "Ошибка! Треугольник не существует"
            },
            get area() {
                return "Ошибка! Треугольник не существует"
            }
        }
    }    
}