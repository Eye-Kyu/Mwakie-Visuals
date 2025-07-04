
document.addEventListener("DOMContentLoaded", () => {
    const itemsContainer = document.querySelector(".items");
    const itemsCols = document.querySelectorAll(".items-col");
    const filters = document.querySelectorAll(".filter");
    const defaultFontSize = "26px";
    const activeFontSize = "120px";

    function splitTextIntoSpans(selector) {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
            const text = element.innerText;
            element.innerHTML = text
            .split("")
            .map((char) => `<span>${char}</span>`)
            .join("");
        });
    }

    function animateFontSize(target, fontSize) { 
        const spans = target.querySelectorAll("span");
        gsap.to(spans, {
            fontSize: fontSize,
            stagger: 0.025,
            duration: 0.7,
            ease: "back.out(1.7)",
            
        });
    }

    function clearItems() {
        itemsCols.forEach((col) => {
            col.innerHTML = "";
        });
    }

    function addItemsToCols(filter = "all") {
        let colIndex = 0;
        const filteredItems = items.filter(
            (item) => filter === "all" || item.tag.includes(filter)
        );

        filteredItems.forEach((item) => {
            const itemElement = document.createElement("div");
            itemElement.className = "item";
            itemElement.innerHTML = `<div class ="item-img">
                                       <img src="${item.img}" alt="">
                                       </div>
                                       <div class="item-copy"><p>${item.title}</p></div>
                                       `;
                    
        itemsCols[colIndex % itemsCols.length].appendChild(itemElement);
        colIndex++;
        });
    }

    function animateItems(filter) {
        gsap.to(itemsContainer, {
            opacity: 0,
            duration: 0.25,
            onComplete: () => {
                clearItems();
                addItemsToCols(filter);
                gsap.to(itemsContainer, {
                    opacity: 1,
                    duration: 0.25,
                });
            },
        });
    }
 
splitTextIntoSpans(".filter h1");
animateFontSize(document.querySelector(".filter.active h1"), activeFontSize);
addItemsToCols();

filters.forEach((filter) => {
    filter.addEventListener("click", function () {
        if (this.classList.contains("active")) {
            return;
        }

        const previousActiveFilterH1 = document.querySelector(".filter.active h1");
            animateFontSize(previousActiveFilterH1, defaultFontSize);

        filters.forEach((f) => f.classList.remove("active")); 
        this.classList.add("active");    
        
        const newActiveFilterH1 = this.querySelector("h1");
        animateFontSize(newActiveFilterH1, activeFontSize);

        const filterValue = this.getAttribute("data-filter");
        animateItems(filterValue);
    });
});


});


/*
const tl3 = gsap.timeline({
    tl3.to(".item-img", {
        opacity: 1,
        y: 20,
        duration: 1,
        ease: "power4.inOut"
    }, 0);
})
*/
