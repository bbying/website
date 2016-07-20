/**
 * Created by 90453 on 2016/7/18.
 */
function isLeapYear(year) {
    if (year % 4 == 0 && ((year % 100 != 0) || (year % 400 == 0))) {
        return true;
    }
    return false;
}
function validatePeriod(fyear, fmonth, fday, byear, bmonth, bday) {
    if (fyear < byear) {
        return true;
    } else if (fyear == byear) {
        if (fmonth < bmonth) {
            return true;
        } else if (fmonth == bmonth) {
            if (fday <= bday) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}
function dateDiff(d1, d2) {
    var disNum = compareDate(d1, d2);
    return disNum;
}
function compareDate(date1, date2) {
    var regexp = /^(\d{1,4})[-|\.]{1}(\d{1,2})[-|\.]{1}(\d{1,2})$/;
    var monthDays = [0, 3, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1];
    regexp.test(date1);
    var date1Year = RegExp.$1;
    var date1Month = RegExp.$2;
    var date1Day = RegExp.$3;

    regexp.test(date2);
    var date2Year = RegExp.$1;
    var date2Month = RegExp.$2;
    var date2Day = RegExp.$3;

    if (validatePeriod(date1Year, date1Month, date1Day, date2Year, date2Month, date2Day)) {
        firstDate = new Date(date1Year, date1Month, date1Day);
        secondDate = new Date(date2Year, date2Month, date2Day);

        result = Math.floor((secondDate.getTime() - firstDate.getTime()) / (1000 * 3600 * 24));
        for (j = date1Year; j <= date2Year; j++) {
            if (isLeapYear(j)) {
                monthDays[1] = 2;
            } else {
                monthDays[1] = 3;
            }
            for (i = date1Month - 1; i < date2Month; i++) {
                result = result - monthDays[i];
            }
        }
        return result;
    }
    return;
}
days = dateDiff('2013-04-08', '2013-04-9') + 1;