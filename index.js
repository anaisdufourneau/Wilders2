import chalk from 'chalk'

const wilders = ['Christian', 'Baptiste', 'Clément', 'Kevin'];

wilders.forEach((wilder, index) => {

    const color = index % 4 === 0 ?
        chalk.red : index % 4 === 1 ?
            chalk.green : index % 4 === 2 ?
                chalk.blue : chalk.yellow;
    console.log(color(wilder));

});
