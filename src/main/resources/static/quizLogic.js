let formCount = 1;
let correctCount = 0;
let flag = false;
let attempCounter = 0;

document.querySelector('#next-button').addEventListener('click', (e) => {
    const currentForm = document.querySelector('#f' + formCount);
    const nextForm = document.querySelector('#f' + (formCount + 1));
    document.querySelectorAll('#f' + formCount + ' .answer').forEach(e => {
        if (e.checked && e.classList.contains('isCorrect')) {
            correctCount++
        }
        if (e.checked && !e.classList.contains('isCorrect')) {
            e.parentElement.classList.add('incorrect')
        }
    })
    console.log(flag);
    if (flag) {
        currentForm.classList.add('hidden')
        nextForm.classList.remove('hidden')

        flag = false;
        formCount++;
    }
    if (attempCounter < 5) {
    attempCounter++
    }
})
document.querySelector('#prev-button').addEventListener('click', (e) => {
    const currentForm = document.querySelector('#f' + formCount);
    const prevForm = document.querySelector('#f' + (formCount - 1));
    document.querySelectorAll('#f' + formCount + ' .answer').forEach(e => {
        if (e.checked && e.classList.contains('isCorrect')) {
            correctCount++
        }
        if (e.checked && !e.classList.contains('isCorrect')) {
            e.parentElement.classList.add('incorrect')
        }
    })
    document.querySelectorAll('#f' + formCount + ' .answer').forEach(e => {
        if (e.checked && e.classList.contains('isCorrect')) {
            correctCount++
        }
    })
    if (formCount - 1 < 1) return;
    if (flag) {
        currentForm.classList.add('hidden')
        prevForm.classList.remove('hidden')

        flag = false;
        formCount--;
    }
    if (attempCounter > 0) {
        attempCounter--
    }
})
document.querySelector('#submit-button').addEventListener('click', (e) => {
    if (flag) {
        // showQuizResults();
        document.querySelector('.results-page').classList.remove('hidden')
        // document.querySelectorAll('.quiz-body').forEach(elem => {
        //     elem.classList.add('hidden')
        // })
        document.querySelectorAll('#f' + formCount + ' .answer').forEach(e => {
            if (e.checked && e.classList.contains('isCorrect')) {
                correctCount++     
            }
            if (e.checked && !e.classList.contains('isCorrect')) {
                e.parentElement.classList.add('incorrect')
            }
        })

        flag = false;
        attempCounter++

        
        document.querySelectorAll('.isCorrect').forEach(e => {
            e.parentElement.classList.remove('incorrect');
            e.parentElement.classList.add('correct');
        })
        document.querySelectorAll('.quiz-body').forEach(e => {
            e.classList.remove('hidden')
        })
        let count = 0;
        document.querySelectorAll('.incorrect').forEach(e => {
            count++
        })
        
        document.querySelector('#final-score-display').innerHTML += attempCounter - count;
    }

})


document.querySelectorAll('.quiz-body').forEach(e => {
    e.addEventListener('click', (e) => {
        //     console.log(e);
        //     if (e.target.classList.contains('answer')) {
        //         // const currentForm = document.querySelector('#f' + formCount);
        //         console.log('got here');
        //         if (e.target.classList.contains('isCorrect')) {
        //             correctCount++;   
        //         }
        //         e.target.parentElement.classList.add('incorrect');
        flag = true;
        //     }
    });
})