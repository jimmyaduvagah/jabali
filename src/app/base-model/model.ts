export class BaseModel {
    constructor(public id: number, public modified_on: Date, public created_on: Date,
        public modified_by: string,  public created_by: string) {
    }
}


export class Student extends BaseModel {
    constructor(
        public id: number, public modified_on: Date, public created_on: Date,
        public modified_by: string,  public created_by: string,
        public firstName: string, public lastName: string,
        public otherName: string, public gender: string,
        public student_admission_no: string) 
        {
            super(id, modified_on,  created_on, modified_by,   created_by);
        }
       
}


export class Teacher extends BaseModel{
    constructor(
        public id: number, public modified_on: Date, public created_on: Date,
        public modified_by: string,  public created_by: string,
        public firstName: string, public lastName: string,
        public otherName: string, public gender: string, public teacher_number: string) 
        {
            super(id, modified_on,  created_on, modified_by,   created_by);
        }
}


export class Subject extends BaseModel{
    constructor(
        public id: number, public modified_on: Date, public created_on: Date,
        public modified_by: string,  public created_by: string,
        public name: string, public description: string) 
        {
            super(id, modified_on,  created_on, modified_by,   created_by);
        }
}


export class ClassStream extends BaseModel{

    constructor(
        public id: number, public modified_on: Date, public created_on: Date,
        public modified_by: string,  public created_by: string,
        public className: string, public classGrade: string, 
        public description: string, public students?: any) 
        {
            super(id, modified_on,  created_on, modified_by,   created_by);
        }
}


export class Score extends BaseModel{

    constructor(
        public id: number, public modified_on: Date, public created_on: Date,
        public modified_by: string,  public created_by: string,
        public term: string, public year: string, public subject: Subject,
        public className: ClassStream, public student: Student) 
        {
            super(id, modified_on,  created_on, modified_by,   created_by);
        }
}
