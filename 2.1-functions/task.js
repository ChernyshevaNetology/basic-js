function getAverageMark(marks) {
    if (marks.length === 0) return 0;
    return marks.reduce((acc, curr) => acc + curr, 0) / marks.length;
}

function getAverageScore(data) {
    if (Object.keys(data).length === 0) {
        return {
            average: 0
        };
    }
    const averageSubj = Object.entries(data).reduce((acc, [subj, val]) => {
        return {
            ...acc,
            [subj]: getAverageMark(val),
        }

    }, {})

    const averageValue = getAverageMark(Object.values(averageSubj));
    averageSubj.average = averageValue;
    return averageSubj;
}

function getPersonData(secretData) {
    let targetObject = Object.entries(secretData).reduce((acc, [index, name]) => {
        return {
            ...acc,
            [index]: getDecodedValue(name)
        }
    }, {});
    targetObject['firstName'] = targetObject['aaa'];
    targetObject['lastName'] = targetObject['bbb'];
    delete targetObject['aaa'];
    delete targetObject['bbb'];
    return targetObject;
}

const pirates = {
    0: 'Родриго',
    1: 'Эмильо'
};

const getDecodedValue = (secret) => pirates[secret];
