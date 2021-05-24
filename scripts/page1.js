var image_list = document.querySelector('#img-list')

var images = ['avo_toast.jpg', 'nutella.jpg', "peanut_bread.jpg"];
var i = 0;

function prev(){
    if(i <= 0)
    {
        i = images.length
    }
    i--;
    return display_img();
}

function next(){
    if(i >= images.length-1) i = -1;
    i++;
    return display_img();
}

function display_img(){
    return image_list.setAttribute('src','img/' + images[i]);
}