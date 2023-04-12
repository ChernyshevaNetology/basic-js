function getAverageMark(marks) {
    if (marks.length === 0) return 0;
    return marks.reduce((acc, curr) => acc + curr, 0) / marks.length;
}

function getAverageScore(data) {
    if(Object.keys(data).length === 0) {
        return {average: 0};
    }

    const averageSubj = Object.entries(data).reduce((acc, [subj, val]) => {
        acc[subj] = getAverageMark(val);
        return acc;
    }, {});

    const average = Object.values(averageSubj).reduce((acc, val) => acc + val, 0) / Object.keys(averageSubj).length;
    averageSubj.average = average;
    return averageSubj;
}


function getPersonData(secretData) {
    return Object.entries(secretData).reduce((acc, [key, val]) => {
        acc[key] = getDecodedValue(val);
        return acc;
    }, {});
}


function getPersonData(secretData) {
    let targetObject = Object.entries(secretData).reduce((acc, [key, val]) => {
        acc[key] = getDecodedValue(val);
        return acc;
    }, {});
    targetObject['firstName'] = targetObject['aaa'];
    targetObject['lastName'] = targetObject['bbb'];
    delete targetObject['aaa'];
    delete targetObject['bbb'];
    return targetObject;
}
function getPersonData(secretData) {
    let targetObject = Object.entries(secretData).reduce((acc, [key, val]) => {
        acc[key] = getDecodedValue(val);
        return acc;
    }, {});
    targetObject['firstName'] = targetObject['aaa'];
    targetObject['lastName'] = targetObject['bbb'];
    delete targetObject['aaa'];
    delete targetObject['bbb'];
    return targetObject;
}

function getDecodedValue(secret) {
    let val = '';
    if (secret === 0) {
        val = 'Родриго';
    } else {
        val = 'Эмильо';
    }
    return val;
}




