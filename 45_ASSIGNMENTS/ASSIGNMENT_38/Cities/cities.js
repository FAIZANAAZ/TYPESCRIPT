"use strict";
function cities(city, country = 'Defult country.') {
    console.log(`${city} is in ${country}`);
}
cities('karachi');
cities("karachi", 'pakistan');
cities("Tokyo", 'japan');
