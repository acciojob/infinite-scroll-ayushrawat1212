//your code here!
        const list = document.getElementById("infi-list");

        let itemCount = 10;

        list.addEventListener("scroll", function() {

            // scrollTop(500) - Distance scrolled from the top;  clientHeight(300) - Height of the visible area;   scrollHeight(800) - Total height of all content;
            if(list.scrollTop + list.clientHeight >= list.scrollHeight) {

                for(let i = 0; i < 2; i++) {
                    itemCount++;

                    const li = document.createElement("li");
                    li.textContent = `Item ${itemCount}`;

                    list.appendChild(li);
                }
            }
        })
