const TypeWriter = function(txtElement, words, wait = 3000){
    this.txtElement = txtElement;
    this.words = words;
    this.wordIndex = 0;
    this.txt= ""
    this.wait = parseInt(wait,100)
    this.type()
    this.isDeleting  = false;
}
// Type Method
TypeWriter.prototype.type  = function(){
    // current index
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt  = this.words[current]
    // Check if Deleting
    if(this.isDeleting){
        this.txt  = fullTxt.substring(0, this.txt.length -1 )
    }else{
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.txtElement.innerHTML = `<span class="txt">${this.txt}  </span>`

    let typeSpeed = 300;
    if(this.isDeleting){
        typeSpeed /= 2;
    }
    if(!this.isDeleting && this.txt === fullTxt){
        typeSpeed = this.wait;
        this.isDeleting  = true;
    }else if(this.isDeleting && this.txt === ''){
        this.isDeleting = false;
        this.wordIndex++;

        typeSpeed = 300;
    }
    setTimeout(() => {
        this.type()
    },200);
}

// Init on Dom Load

document.addEventListener('DOMContentLoaded', init);

function init(){
    const txtElement = document.querySelector(".txt-type");
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait')
    new TypeWriter(txtElement, words, wait)
}
