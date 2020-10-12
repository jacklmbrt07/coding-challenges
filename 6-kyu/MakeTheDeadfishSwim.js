/*Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ] */

// Return the output array, and ignore all non-op characters
function parse( data )
{
  data = data.split('')
  var value = 0;
  var arr = [];
  for (let i = 0; i <= data.length; i++){
    switch (data[i]){
        case 'i':
          value++;
          break;
        case 'd':
          value--;
          break;
        case 's':
          value = value * value;
          break;
        case 'o':
          arr.push(value)
          break;      
    }
  }
  return arr;
}