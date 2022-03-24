const axios = require('axios');
const apiUrl = process.env.API_URL || 'http://localhost:8080'
const resource = 'issue';
const resourceUrl = apiUrl + '/' + resource
const getIssue = async () =>{
    const response = await axios.get(resourceUrl);
    console.log(response.data)
};
const updateIssue = async (issue) =>{
    const response = await axios.put(resourceUrl, issue);
    console.log(response.data)
};
const deleteIssue = async (issue) =>{
    console.log('issue to delete is %o', issue)
    const response = await axios.delete(resourceUrl, {data: issue});
    console.log(response.data)
};
const createIssue = async (issue) =>{
    const response = await axios.post(resourceUrl, issue);
    console.log(response.data)
};
exports.read = getIssue
exports.create = createIssue
exports.update = updateIssue
exports.delete = deleteIssue
