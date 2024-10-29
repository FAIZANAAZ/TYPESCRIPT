"use strict";
function make_shirt(siza = 'large', text = 'I Love typescript') {
    console.log(`creating a ${siza} shirt with the message :${text}`);
}
make_shirt();
make_shirt('Medium');
make_shirt('small', 'I Love python');
