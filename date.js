exports.getDate = function(){
    const today = new Date;
    const optoins = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    const day = today.toLocaleDateString("en-US", optoins);
    return day;
};

exports.getDay = function(){
    const today = new Date;
    const optoins = {
        weekday: "long"
    }
    const day = today.toLocaleDateString("en-US", optoins);
    return day;
};