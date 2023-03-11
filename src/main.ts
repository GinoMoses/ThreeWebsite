import './style.css'
import { executeThree } from './three';
executeThree();

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.querySelector<HTMLElement>('#moses')!.onmouseover = event => {
    let intervalCount = 0;
    const interval = setInterval(() => {
         
        (event.target! as HTMLElement).innerText = (event.target! as HTMLElement).innerText.split("")
        .map((letter: any, index: number) => {
            console.log(letter);
            if(index < intervalCount) {
                return (event.target! as HTMLElement).dataset.value![index];
            }
            return alphabet[Math.floor(Math.random() * 26)]
        })
        .join("");
        if(intervalCount >= (event.target! as HTMLElement).dataset.value!.length) clearInterval(interval);

        intervalCount += 1 / 3;
    }, 30);
}
document.querySelector<HTMLElement>('#gino')!.onmouseover = event => {
    let intervalCount = 0;
    const interval = setInterval(() => {
         
        (event.target! as HTMLElement).innerText = (event.target! as HTMLElement).innerText.split("")
        .map((letter: any, index: number) => {
            console.log(letter);
            if(index < intervalCount) {
                return (event.target! as HTMLElement).dataset.value![index];
            }
            return alphabet[Math.floor(Math.random() * 26)]
        })
        .join("");
        if(intervalCount >= (event.target! as HTMLElement).dataset.value!.length) clearInterval(interval);

        intervalCount += 1 / 3;
    }, 30);
}

export {};
