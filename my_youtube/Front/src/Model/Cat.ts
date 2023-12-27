class Cat {
     private categoryName: string[]=[];

addCat = (newcategoryName:string)=>{
    this.categoryName.push(newcategoryName)
};
allCat = () => {
    return this.categoryName;
};
}

let cat =new Cat();
cat.addCat("General");

export default cat;