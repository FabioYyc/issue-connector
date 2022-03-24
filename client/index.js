const program = require('commander');
const methods = require('./methods')

const DefaultIssue = {
    id: '1',
    title: 'issue title',
    description: 'issue description',
}
program
    .command('get') // sub-command name
    .description('Get the issue') // command description

    // function to execute when command is uses
    .action(async function () {
        await methods.read()
    });
program
    .command('create') // sub-command name
    .description('Crate the default issue') // command description

    // function to execute when command is uses
    .action(async function () {
        await methods.create(DefaultIssue)
    });
program
    .command('delete') // sub-command name
    .description('Delete the issue') // command description

    // function to execute when command is uses
    .action(async function () {
        await methods.delete(DefaultIssue)
    });
program
    .command('update') // sub-command name
    .description('Update the issue') // command description

    // function to execute when command is uses
    .action(async function () {
        await methods.update(DefaultIssue)
    });

program.parse(process.argv);