const s = 'SMS messages are really short';
const k = 12;

function findElementsLength(elements) {
    let cumulativeLength = 0;
    for (element of elements) {
        cumulativeLength += element.length;
    }
    return cumulativeLength + elements.length - 1;
}

function solution(S, K) {
    const words = s.split(' ');
    let messages = [],
        elements = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > k) {
            return -1;
        }
        if (findElementsLength(elements) + words[i].length <= k) {
            elements.push(words[i]);
            if (i === words.length - 1) {
                let wordBundle = elements.join(' ');
                elements = [];
                messages.push(wordBundle);
            }
        } else {
            let wordBundle = elements.join(' ');
            elements = [];
            messages.push(wordBundle);
            elements.push(words[i]);
            if (i === words.length - 1) {
                let wordBundle = elements.join(' ');
                elements = [];
                messages.push(wordBundle);
            }
        }
    }
    for (message of messages) {
        console.log(message);
    }
    return messages.length
}

console.log(solution(s, k));