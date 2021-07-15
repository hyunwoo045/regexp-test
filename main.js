const str = `
010-1234-5678
thesecond@gmail.com
https://heropy.blog/2018/10/28/regexp/frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`;

console.log(str.match(/(?<=@).{1,}/g));
