const DefaultIssue = {
    id: '1',
    title: 'issue title',
    description: 'issue description',
}


const createIssue = (issue) =>{
    console.log('creating issue %o', issue)
    
}
const updateIssue = (issue) =>{
    console.log('updating issue %o', issue)
}
const deleteIssue = (issue) =>{
    console.log('deleting issue %o', issue)
    //correct functions operations in the file system /db layer 
}
const getIssue = () =>{
    return DefaultIssue
}
exports.create = createIssue
exports.read = getIssue
exports.update = updateIssue
exports.delete = deleteIssue