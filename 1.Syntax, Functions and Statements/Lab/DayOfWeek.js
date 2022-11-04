function dayOfWeek(string) {
        let array = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

        if (array.indexOf(string) + 1 >= 1 && array.indexOf(string) + 1 <= 7) {
                return array.indexOf(string) + 1;
        } else {
                return 'error'
        }
}
dayOfWeek('Wednesday')