const getTheTitles = function(a) {
    const titles = a.map(title => `${a.title}`);
    console.log(titles);
    return titles;
}

module.exports = getTheTitles;
