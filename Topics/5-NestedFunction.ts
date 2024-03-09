let func1 = () : void => {
    console.log("Function 1");
}

let func2 = () : void => {
    return func1();
}

func2();

//-----------------------------------------

