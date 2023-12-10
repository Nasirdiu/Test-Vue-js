const fname='john';
const lname='doe';

const es6={
    fname,
    lname,
    introduce(){
        console.log(`Hi I am ${this.fname} ${this.lname}`);
    }
}

console.log(es6);

es6.introduce();