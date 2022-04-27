//interacting with html elements (dom)
console.log("DOM elements..")
document.write(document.getElementById("ff").innerHTML="forms");
document.write(document.getElementById('user').value="ganga");//value is assigned

const elem=document.getElementsByClassName("para")[1];
console.log(elem);
const element = document.getElementsByTagName("p")[0];
console.log(element);

var btn= document.querySelector("#submit");
btn.onclick = () => alert("hello world ");

var btn = document.querySelector(".clear");
btn.addEventListener('click', () => {
    alert("bye world");
});

const x= document.querySelectorAll("p.para");
console.log(x);

//js forms and buttons
console.log("form validations..\n")

function validate()
{
    var username= document.getElementById("user");
    var password = document.getElementById("pw");
    //blanks are removed by trim  () method
    if(username.value.trim() == "" || password.value.trim() == "")
    {
        alert("No blank values allowed");
        return false;
    }
    else{
        if(password.value <=8){
            alert("please check the password is strong or not!");
            return false;
        }
        else{
             true;
        }
        

    }

}



function newWindow(){
    mywin=window.open("script.js","main_window","top=100,left=100")
    console.log("window opened");
}

function closeWindow(){
//     window.close()
    if(mywin)
    {
        window.close();
        console.log("window closed")
    }
    else{
        console.log("window not opened")
    } 
}

console.log("arrays implementaion\n");
//arrays
var d= ['nuzvid','sklm','ongole'];
d.push('ongole');
console.log(d)

d.unshift('rgukt')
console.log(d)
d.pop();//ong eliminates

d.shift();//last element deletes
console.log(d);
d[1]='sklm';
console.log(d);
delete d[1];//true
console.log(d)

//function
const num=[1,2,3,4,5,6];
let sum=0;
function summ() {
    for(let i of num){
        sum=sum +i;
    }
    console.log("sum of numbers :"+sum);
}

summ();




//getting user selected data
const getUserSelectedText = () =>{
	return window.getSelection().toString();
}
//knowing when user reaches to the end of screen
window.onscroll = () => {
	if((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight){
		document.log("you are at the end of page")
	}
}

//taking back to top
const toTop =() => window.scrollTo({
	top: 0, behavior:'smooth'
});

//detect user in darkmode
 const isDarkMode = () => {
 	return window.matchMedia('(prefers-colors-scheme:dark)').matches;
 }

 //go back to previous page
 history.back();
 history.go(-1);

 //removing duplicates from an array
 const removeDuplicates = (arr) => [...new Set(arr)];