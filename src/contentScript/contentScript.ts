window.onload = async () => {

    /*
    * This function recursively searches for the deepest parent node of the given element that has more than one child.
    * It starts by checking the parent node of the given element, and if it has more than one child, it returns that parent node.
    * Otherwise, it recursively calls itself with the parent node as the argument, repeating the process until a parent node with more than one child is found or there are no more parent nodes.
    */
    const findDeepestRelatedParent = (elem) => {
        if (elem.parentNode.childNodes.length === 1) return findDeepestRelatedParent(elem.parentNode);
        return elem;
    }

    const adsElements = document.querySelectorAll('[data-testid="StandardAd"]');
    adsElements.forEach((elem) => {
        findDeepestRelatedParent(elem).remove();
    });

/*
    const rules: {
        [url: string]: () => void
    } = {
        'https://www.nytimes.com/section/technology': filterNYTTechnology2,
    }

    function filterNYTTechnology() {
        const app = document.getElementById('site-content')
        const wrapper = document.getElementById('top-wrapper')
        app.removeChild(wrapper)
    }

    function filterNYTTechnology2() {
        const divs = document.getElementsByTagName('div')
        for (const div of divs) {
            if (div.className.indexOf('ad') > -1) {
                div.style.display = 'none'
            }
        }
    }

    if (document.URL in rules) {
        rules[document.URL]()
    }
    */

}