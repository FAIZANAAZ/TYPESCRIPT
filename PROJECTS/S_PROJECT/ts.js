import inquirer from "inquirer";
import chalk from "chalk";
import Table from "cli-table3"; //ye bhi npm i cli-table3 krky hi instal hoga phly ismy  hm aony kisi bhi kam ko table me dikha skty hen
console.clear();
////////////////////////////////////// VARIABLES/////////////////////////////////////
let point_incriment = 0;
let point_decriment = 0;
let total_q = 0;
let tablee_show = [];
let continuee = 0;
// ye is liye bnaya he ke hm isko i ke braber kr dengy phir i ++ hota jayga to continuee brhta jayga
//phir jb hm user continue kryga to kioky i continuee ke braber he to wo dobra chlyga wahi sy jha sy chora tha
//or jb hm restart krengy to hm continuee ko 0 asing krengy to i 0 hojayga or loop dobara 0 sy start hoga 
//////////////////////////////////QUATIONS////////////////////////////////////////
let start = await inquirer.prompt({
    name: "str",
    type: "confirm",
    message: "***  THIS QUIZ IS RELATED TO (SYNCHORONOUS & ASYNCHORONOUS PROGRAMMING)  YOU WANT TO START QUIZ ***"
});
if (start.str === true) {
    async function main_fun() {
        let main_qua = await inquirer.prompt({
            name: "q11",
            type: "list",
            message: "PLEASE SELECT TOPIC",
            choices: ["SYNCHRONOUS PROGRAMMING", "A-SYNCHORONOUS PROGRAMMING"]
        });
        let firstly = main_qua.q11;
        if (firstly === "SYNCHRONOUS PROGRAMMING") {
            const sync_qua = [
                {
                    type: 'list',
                    name: 'q1',
                    message: 'Q1) What happens in synchronous programming?',
                    choices: ['Code executes sequentially', 'Code executes asynchronously', 'Code executes in parallel', 'Code executes with delay'],
                    correctAnswer: 'Code executes sequentially',
                },
                {
                    type: 'list',
                    name: 'q2',
                    message: 'Q2) If an operation in a synchronous function takes a long time, what will happen?',
                    choices: ['No effect', 'Code will block other operations', 'Code will execute in parallel', 'Code will run on multiple threads'],
                    correctAnswer: 'Code will block other operations',
                },
                {
                    type: 'list',
                    name: 'q3',
                    message: 'Q3) Which method is not synchronous?',
                    choices: ['Array.map()', 'console.log()', 'setTimeout()', 'for loop'],
                    correctAnswer: 'setTimeout()',
                },
                {
                    type: 'list',
                    name: 'q4',
                    message: 'Q4) Which programming language is synchronous in nature?',
                    choices: ['JavaScript', 'Python', 'Java', 'C'],
                    correctAnswer: 'JavaScript',
                },
                {
                    type: 'list',
                    name: 'q5',
                    message: 'Q5) Which function is synchronous in nature?',
                    choices: ['fs.readFileSync()', 'setImmediate()', 'setTimeout()', 'process.nextTick()'],
                    correctAnswer: 'fs.readFileSync()',
                },
                {
                    type: 'list',
                    name: 'q6',
                    message: 'Q6) What is the sequence of code execution in synchronous programming?',
                    choices: ['Random', 'Sequential', 'Parallel', 'Asynchronous'],
                    correctAnswer: 'Sequential',
                },
                {
                    type: 'list',
                    name: 'q7',
                    message: 'Q7) Which method is synchronous?',
                    choices: ['Array.filter()', 'Promise.then()', 'setInterval()', 'process.nextTick()'],
                    correctAnswer: 'Array.filter()',
                },
                {
                    type: 'list',
                    name: 'q8',
                    message: 'Q8) What happens if there is an error in synchronous code?',
                    choices: ['Code fails silently', 'Execution stops', 'Error is ignored', 'Code executes asynchronously'],
                    correctAnswer: 'Execution stops',
                },
                {
                    type: 'list',
                    name: 'q9',
                    message: 'Q9) Which loop is synchronous in nature?',
                    choices: ['for loop', 'setInterval()', 'process.nextTick()', 'setImmediate()'],
                    correctAnswer: 'for loop',
                },
                {
                    type: 'list',
                    name: 'q10',
                    message: 'Q10) What is the major drawback of synchronous programming?',
                    choices: ['Parallel execution', 'Asynchronous behavior', 'Blocking code', 'Non-blocking code'],
                    correctAnswer: 'Blocking code',
                },
                {
                    type: 'list',
                    name: 'q11',
                    message: 'Q11) Which synchronous function reads data from the file system?',
                    choices: ['fs.readFile()', 'fs.readFileSync()', 'setTimeout()', 'process.nextTick()'],
                    correctAnswer: 'fs.readFileSync()',
                },
                {
                    type: 'list',
                    name: 'q12',
                    message: 'Q12) Which statement describes synchronous programming?',
                    choices: ['"Execution is delayed"', '"Code executes in order"', '"Code runs in parallel"', '"Code runs without blocking"'],
                    correctAnswer: '"Code executes in order"',
                },
                {
                    type: 'list',
                    name: 'q13',
                    message: 'Q13) Which method is not used for synchronous execution?',
                    choices: ['Array.reduce()', 'fs.writeFileSync()', 'setTimeout()', 'console.log()'],
                    correctAnswer: 'setTimeout()',
                },
                {
                    type: 'list',
                    name: 'q14',
                    message: 'Q14) What is a property of synchronous functions?',
                    choices: ['Immediate execution', 'Delayed execution', 'Deferred execution', 'Parallel execution'],
                    correctAnswer: 'Immediate execution',
                },
                {
                    type: 'list',
                    name: 'q15',
                    message: 'Q15) Which function shows synchronous behavior?',
                    choices: ['Promise.then()', 'setInterval()', 'Array.forEach()', 'setImmediate()'],
                    correctAnswer: 'Array.forEach()',
                },
                {
                    type: 'list',
                    name: 'q16',
                    message: 'Q16) Which is a feature of synchronous programming?',
                    choices: ['Code blocks the next operation until completed', 'Code runs in a non-blocking manner', 'Code runs in parallel', 'Code executes randomly'],
                    correctAnswer: 'Code blocks the next operation until completed',
                },
                {
                    type: 'list',
                    name: 'q17',
                    message: 'Q17) Which synchronous function filters elements of an array?',
                    choices: ['Array.filter()', 'setImmediate()', 'Promise.all()', 'setInterval()'],
                    correctAnswer: 'Array.filter()',
                },
                {
                    type: 'list',
                    name: 'q18',
                    message: 'Q18) What is the sequence of synchronous code execution?',
                    choices: ['Sequential', 'Random', 'Parallel', 'Deferred'],
                    correctAnswer: 'Sequential',
                },
                {
                    type: 'list',
                    name: 'q19',
                    message: 'Q19) Which synchronous method transforms elements of an array?',
                    choices: ['Array.map()', 'setTimeout()', 'Promise.race()', 'setImmediate()'],
                    correctAnswer: 'Array.map()',
                },
                {
                    type: 'list',
                    name: 'q20',
                    message: 'Q20) Which synchronous method iterates over elements of an array?',
                    choices: ['Array.forEach()', 'setTimeout()', 'Promise.all()', 'setImmediate()'],
                    correctAnswer: 'Array.forEach()',
                }
            ];
            for (let i = continuee; i < sync_qua.length; i++) {
                ++continuee;
                const sync_array = sync_qua[i];
                const useranswer = await inquirer.prompt({
                    type: "list",
                    name: sync_array.name,
                    message: sync_array.message,
                    choices: [...sync_array.choices, "\nCHECK RESULT", "EXIT"]
                });
                if (useranswer[sync_array.name] === sync_array.correctAnswer) {
                    console.log("*****************************************************************************");
                    ++total_q;
                    ++point_incriment;
                    console.log("CORRECT ANSWER");
                    console.log(`
            NOW YOUR CORRECT ANSWER IS ${point_incriment}
            
            INCORRECT ANSWER IS ${point_decriment}
            
            TOTAL QUATIONS ${total_q}`);
                    console.log("*****************************************************************************");
                }
                else if (useranswer[sync_array.name] === "\nCHECK RESULT" && continuee < 20) {
                    --i;
                    await cheq_result();
                }
                else if (useranswer[sync_array.name] === "EXIT") {
                    process.exit();
                }
                else if (useranswer[sync_array.name] === "\nCHECK RESULT" && continuee >= 20) {
                    i = 0;
                    continuee = 0;
                    tablee_show.length = 0;
                    total_q = 0;
                    await cheq_result();
                }
                else {
                    console.log("*****************************************************************************");
                    console.log("INCORRECT ANSWER");
                    ++total_q;
                    ++point_decriment;
                    console.log(`
            NOW YOUR CORRECT ANSWER IS ${point_incriment}
            
            & INCORRECT ANSWER IS ${point_decriment}
            
            TOTAL QUATIONS ${total_q}`);
                    console.log("*****************************************************************************");
                }
                tablee_show.push({
                    Quation: sync_array.message,
                    Answer: useranswer[sync_array.name],
                    Correct_ans: sync_array.correctAnswer,
                    Result: useranswer[sync_array.name] === sync_array.correctAnswer ? "CORRECT" : "INCORRECT"
                });
            }
        }
        //yha hmny 20 sawal diye hen user ko or sawal me hmny ak property har object me correct ans ki bhi bnai he kioky hm 
        //object me zada properties de skty hen taky hmny yad rahy ke konsa ans kiska correct he
        //ak bat to yad rakhni he ke loop kabhi bhi inquirer ke ader waly array ya kisi chiz pr appay nhi kiya ja skta
        //isko handle hm esy krengy ke hm normal array me rakhengy sary obj or ospr loop apply krengy or os loop ke ander a kr 
        //hm obj ko normal array wali inquirer ki shaakt de skty hen jesy nichy meny kya he
        else if (firstly === "A-SYNCHORONOUS PROGRAMMING") {
            let asyn_qua = [
                {
                    type: 'list',
                    name: 'q1',
                    message: 'Q1) What does `async` function return?',
                    choices: ['A Promise', 'A String', 'A Number', 'Nothing'],
                    correctAnswer: 'A Promise',
                },
                {
                    type: 'list',
                    name: 'q2',
                    message: 'Q2) What keyword is used to wait for a Promise to resolve inside an `async` function?',
                    choices: ['wait', 'pause', 'await', 'yield'],
                    correctAnswer: 'await',
                },
                {
                    type: 'list',
                    name: 'q3',
                    message: 'Q3) Which method is used to handle errors in an `async` function?',
                    choices: ['try-catch', 'catch', 'finally', 'throw'],
                    correctAnswer: 'try-catch',
                },
                {
                    type: 'list',
                    name: 'q4',
                    message: 'Q4) What does `Promise.all()` do?',
                    choices: ['Runs promises sequentially', 'Runs promises in parallel and waits for all to complete', 'Returns the first resolved promise', 'Returns the last resolved promise'],
                    correctAnswer: 'Runs promises in parallel and waits for all to complete',
                },
                {
                    type: 'list',
                    name: 'q5',
                    message: 'Q5) What is the output of a `Promise` if it is rejected?',
                    choices: ['Resolved value', 'Undefined', 'Error', 'Null'],
                    correctAnswer: 'Error',
                },
                {
                    type: 'list',
                    name: 'q6',
                    message: 'Q6) What is the purpose of the `.finally()` method in a Promise?',
                    choices: ['To handle resolved value', 'To handle errors', 'To execute code regardless of promise outcome', 'To create a new promise'],
                    correctAnswer: 'To execute code regardless of promise outcome',
                },
                {
                    type: 'list',
                    name: 'q7',
                    message: 'Q7) Which method schedules code to be executed in the next event loop iteration?',
                    choices: ['setTimeout()', 'setImmediate()', 'process.nextTick()', 'Promise.resolve()'],
                    correctAnswer: 'process.nextTick()',
                },
                {
                    type: 'list',
                    name: 'q8',
                    message: 'Q8) What will `await` return if the promise is resolved?',
                    choices: ['The resolved value', 'The promise object', 'An error', 'Nothing'],
                    correctAnswer: 'The resolved value',
                },
                {
                    type: 'list',
                    name: 'q9',
                    message: 'Q9) What does `Promise.race()` do?',
                    choices: ['Waits for all promises to complete', 'Returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects', 'Returns the first resolved promise', 'Returns the last resolved promise'],
                    correctAnswer: 'Returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects',
                },
                {
                    type: 'list',
                    name: 'q10',
                    message: 'Q10) How do you handle a promise rejection?',
                    choices: ['.catch()', '.resolve()', '.finally()', '.then()'],
                    correctAnswer: '.catch()',
                },
                {
                    type: 'list',
                    name: 'q11',
                    message: 'Q11) What will `await` do if the promise is rejected?',
                    choices: ['Resolve the promise', 'Throw an error', 'Return `undefined`', 'Do nothing'],
                    correctAnswer: 'Throw an error',
                },
                {
                    type: 'list',
                    name: 'q12',
                    message: 'Q12) How do you create a new promise?',
                    choices: ['new Promise()', 'Promise.create()', 'Promise.new()', 'new Promise.resolve()'],
                    correctAnswer: 'new Promise()',
                },
                {
                    type: 'list',
                    name: 'q13',
                    message: 'Q13) Which method allows you to execute asynchronous code inside a synchronous-looking function?',
                    choices: ['async/await', 'Promises', 'Callbacks', 'Generators'],
                    correctAnswer: 'async/await',
                },
                {
                    type: 'list',
                    name: 'q14',
                    message: 'Q14) What is a common use case for `Promise.all()`?',
                    choices: ['To run promises in sequence', 'To run multiple promises in parallel and wait for all to complete', 'To handle a single promise', 'To create a promise'],
                    correctAnswer: 'To run multiple promises in parallel and wait for all to complete',
                },
                {
                    type: 'list',
                    name: 'q15',
                    message: 'Q15) What does `Promise.resolve()` do?',
                    choices: ['Creates a new promise that is resolved with the given value', 'Creates a new promise that is rejected with the given error', 'Executes a promise immediately', 'Returns the existing promise'],
                    correctAnswer: 'Creates a new promise that is resolved with the given value',
                },
                {
                    type: 'list',
                    name: 'q16',
                    message: 'Q16) What is the purpose of `callback` functions in asynchronous programming?',
                    choices: ['To handle errors', 'To perform actions when an asynchronous task completes', 'To return a value immediately', 'To execute synchronously'],
                    correctAnswer: 'To perform actions when an asynchronous task completes',
                },
                {
                    type: 'list',
                    name: 'q17',
                    message: 'Q17) Which construct helps you to handle errors in a `Promise` chain?',
                    choices: ['.catch()', '.then()', '.resolve()', '.finally()'],
                    correctAnswer: '.catch()',
                },
                {
                    type: 'list',
                    name: 'q18',
                    message: 'Q18) What does `Promise.reject()` do?',
                    choices: ['Creates a new promise that is rejected with the given reason', 'Creates a new promise that is resolved with the given value', 'Resolves an existing promise', 'Executes the given function'],
                    correctAnswer: 'Creates a new promise that is rejected with the given reason',
                },
                {
                    type: 'list',
                    name: 'q19',
                    message: 'Q19) What will `try-catch` do if an error occurs in an `async` function?',
                    choices: ['Handle the error if used inside the `async` function', 'Return an error message', 'Return `undefined`', 'Ignore the error'],
                    correctAnswer: 'Handle the error if used inside the `async` function',
                },
                {
                    type: 'list',
                    name: 'q20',
                    message: 'Q20) Which method can be used to handle a resolved value of a Promise?',
                    choices: ['.then()', '.catch()', '.finally()', '.await()'],
                    correctAnswer: '.then()',
                },
            ];
            for (let i = continuee; i < asyn_qua.length; i++) {
                ++continuee;
                const asyn_array = asyn_qua[i];
                const useranswer = await inquirer.prompt({
                    type: "list",
                    name: asyn_array.name,
                    message: asyn_array.message,
                    choices: [...asyn_array.choices, "\nCHECK RESULT", "EXIT"]
                });
                if (useranswer[asyn_array.name] === asyn_array.correctAnswer) {
                    console.log("*****************************************************************************");
                    ++total_q;
                    ++point_incriment;
                    console.log("CORRECT ANSWER");
                    console.log(`  
            YOUR CORRECT ANSWER IS ${point_incriment}

            INCORRECT ANSWER IS ${point_decriment}
            
            TOTAL QUATIONS ${total_q}`);
                    console.log("*****************************************************************************");
                }
                else if (useranswer[asyn_array.name] === "\nCHECK RESULT" && continuee < 19) {
                    --i;
                    await cheq_result();
                }
                else if (useranswer[asyn_array.name] === "EXIT") {
                    process.exit();
                    // isy program rok jata he
                }
                else if (useranswer[asyn_array.name] === "\nCHECK RESULT" && continuee >= 19) {
                    i = 0;
                    continuee = 0;
                    tablee_show.length = 0;
                    total_q = 0;
                    await cheq_result;
                }
                else {
                    console.log("*****************************************************************************");
                    console.log("INCORRECT ANSWER");
                    ++total_q;
                    ++point_decriment;
                    console.log(`   
            NOW YOUR CORRECT ANSWER IS ${point_incriment} 

            & INCORRECT ANSWER IS ${point_decriment}
            
            TOTAL QUATIONS ${total_q}`);
                    console.log("*****************************************************************************");
                }
                tablee_show.push({
                    Quation: asyn_array.message,
                    Answer: useranswer[asyn_array.name],
                    Correct_ans: asyn_array.correctAnswer,
                    Result: useranswer[asyn_array.name] === asyn_array.correctAnswer ? "CORRECT" : "INCORRECT"
                });
            }
        }
        cheq_result();
    }
    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    async function cheq_result() {
        let table = new Table({
            //table hmny 2 property deni hoti he obj me ak heading ka name or dosra osky size ki
            head: [
                'QUESTIONS',
                ' YOUR ANSWER',
                'CORRECT ANSWER',
                ' RESULT'
            ],
            colWidths: [60, 25, 25, 15]
        });
        tablee_show.forEach((item) => {
            table.push([
                item.Quation,
                item.Answer,
                item.Correct_ans,
                item.Result === "CORRECT" ? chalk.green.bold("CORRECT") : chalk.red.bold("INCORRECT")
            ]);
        });
        console.log(table.toString());
        let last_q = await inquirer.prompt({
            name: "last",
            type: "list",
            message: "WHAT YOU WANT NOW",
            choices: ["RESTART", "EXIT", "CONTINUE"]
        });
        if (last_q.last === "RESTART") {
            continuee = 0;
            point_decriment = 0;
            point_incriment = 0;
            total_q = 0;
            tablee_show.length = 0;
            await main_fun();
            return;
        }
        else if (last_q.last === "EXIT") {
            process.exit();
        }
        if (last_q.last === "CONTINUE" && continuee >= 20) {
            console.log("YOU ALREADY COMPLETE 20 QUATIONS");
            tablee_show.length = 0;
            total_q = 0;
            continuee = 0;
            point_decriment = 0;
            point_incriment = 0;
            await cheq_result();
        }
    }
    await main_fun();
}
else {
    console.log(" ********** OK BYEE TACK CARE ***********");
}
