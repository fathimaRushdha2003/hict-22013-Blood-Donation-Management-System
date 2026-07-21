const counters = document.querySelectorAll(".counter");

<<<<<<< Updated upstream
<<<<<<< Updated upstream
counters.forEach(counter => {

    let count = 0;

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        if(count < target){

            count += Math.ceil(target / 100);

            counter.innerText = count;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target + "+";
        }
    };

    updateCounter();
=======
const options = {
    threshold: 0.5
};

const observer = new IntersectionObserver(function(entries, observer){

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

=======
const options = {
    threshold: 0.5
};

const observer = new IntersectionObserver(function(entries, observer){

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

>>>>>>> Stashed changes
            const update = () => {

                const increment = Math.ceil(target / 100);

                if(count < target){

                    count += increment;

                    if(count > target){
                        count = target;
                    }

                    counter.innerText = count;

                    setTimeout(update,20);

                }

            };

            update();

            observer.unobserve(counter);

        }

    });

}, options);

counters.forEach(counter=>{
    observer.observe(counter);
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
});