export const dateFormater = (dbDate) => {
    if (dbDate) {
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const date = new Date(dbDate);
        let day = date.getDate();
        const month = date.getMonth();
        var year = date.getFullYear();

        const convertedMonth = months[month];
        let convertedDay = "00";

        if (day < 10) {
            convertedDay = "0" + day;
        } else {
            convertedDay = day.toString();
        }

        return `${convertedDay} ${convertedMonth}, ${year}`;

    }
};