console.log("working");

let allBtns = document.querySelectorAll(".btn");
const textarea = document.getElementById("editor");

for (const button of allBtns) {
    let selection = window.getSelection();

    button.addEventListener("click", () => {
        if(button.getAttribute('data-command') == "link"){
            console.log(selection.type)
            if(selection.type == "Range"){
                linkURL = prompt("enter link: ");
                if(linkURL.length > 0){
                    document.execCommand('createLink', false, linkURL);  
                }
                else{
                    alert("Please write corrent url")
                }              
            }
            else{
                alert("Please select some text")
            }         
        }
        else if (button.getAttribute('data-command') == "quote"){
            if(selection.type == "Range"){
                document.execCommand('insertHTML', false, `<q>${selection}</q>`);          
            }
            else{
                alert("Please select some text")
            }         
        }
        else if(button.getAttribute('data-command') == "image"){
            linkURL = prompt("enter link: ");
            if(linkURL.length > 0){
                document.execCommand('insertImage', false, linkURL);
                
            }   
            else{
                alert("Please write corrent image url")
            }    
        }
        else if(button.getAttribute('data-command') == "src-code"){
            let demo = document.getElementById("demo").textContent = `${textarea.innerHTML}`;
            console.log(textarea.innerHTML);
            
        }
        else{
            if (button.getAttribute('data-command')) {
                document.execCommand(button.getAttribute('data-command'),true,null);
            }
        }
    });
}