    function solution(string) {
        let b = string.split('');
        for (let i = 0; i < b.length; i++) {
          if (b[i] === b[i].toUpperCase()) {
            b.splice(i, 1, ' ' + b[i]);
          }
        }
        return b.join('');
      }
solution('camelCasing')
