export default function myFunction(){
    const msg="This will take you to Review Page\nARE YOU SURE??";
    if (window.confirm(msg)){
        window.location.replace("../review/Review.html");
    }
}
