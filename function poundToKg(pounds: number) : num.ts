function poundToKg(pounds: number) : number
{
    let Kg = pounds * 0.45359237;
    return Kg;
    
};
console.log(poundToKg(2));

function incheToCent(inches: number) : number
{
    let cent = inches * 2.54;
    return cent;
}
console.log(incheToCent(2));

function fatoCel(far: number) : number
{
    let cel = (far - 32) * 5/9;
    return cel; 
}
console.log(fatoCel(100));

function feetToMeters(feet : number) :number
{
    let meter = feet / 3.281;
    return meter;
}
console.log(feetToMeters(1))

function check(num: number) : void{
    if(num%2 == 0)
    {
        console.log("Even")
    }
    else
    {
        console.log("Odd")
    }
}
check(3);

function fizzBuzz(num : number) : void
{
    if((num % 3  == 0) && (num % 5 == 0) ){
    
        console.log("Fizz-Buzz")
    }
    else 
        if(num % 3 == 0)
        {
            console.log("Fizz");
        }
        else
            if(num % 5 == 0)
            {
            console.log("Buzz");
            }
            else
            {
                console.log(num);
            }
}

fizzBuzz(15)

function fizzBuzz2(num : number) : void{
    switch(true)
    {
        case(num%3==0 && num%5==0):
            console.log("Fizz-buzz");
            break;
        
            case(num % 3==0):
                console.log("Fizz");
                break;

                case(num%5==0):
                    console.log("Buzz");
                    break;

                    default:
                        console.log(num);
                        break;
    }
}
 fizzBuzz2(8)

 function fizzBuzz3(num)
 {
    console.log((num % 3 == 0 && num % 5 == 0) ? "Fizz Buzz"
    :(num % 3 == 0)? "Fizz" : (num % 5 == 0) ? "Buzz" : num)
 }
 fizzBuzz3(3)


 function fab(num : number) : void
 {
    let first = 0;
    let second = 1;
    for(let i = 0; i < num; i++)
    {
        console.log(first)
        let next = first + second;
        first = second;
        second = next;
    }
 }
 fab(15)

 function reverse(num: number[]) : void{
    let end = num.length-1;
    let start = 0;
    while(start < end)
    {
        let temp = num[end];
        num[end] = num[start];
        num[start] = temp;
        start++;
        end--;

    }
    console.log(num)
 }
 reverse([1,2,3,4,5]);

 function Rev(num: number[]) : void{
    for(let i = num.length-1; i >= 0; i--)
    {
        console.log(num[i])
    }
 }

 Rev([1,2,3,4,5,])

 function remove(num : number[], index : number)
 {
     for(let i = index; i < num.length; i++)
     {
        num[i] =num[i+1];
     }

     console.log(num);
 }
 remove([1,2,3,4], 2)

