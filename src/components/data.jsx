class EducationObject{
    constructor(school,year,degree){
        this.school = school;
        this.year = year;
        this.degree = degree;
        this.id = crypto.randomUUID();
    }
}

export {EducationObject};