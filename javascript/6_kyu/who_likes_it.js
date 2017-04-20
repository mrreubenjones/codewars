/*
Description:
---

You probably know the "like" system from Facebook and other pages.
People can "like" blog posts, pictures or other items. We want to
create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in
input array, containing the names of people who like an item. It must
return the display text as shown in the examples:

```
likes [] // must be "no one likes this"
likes ["Peter"] // must be "Peter likes this"
likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
```

For more than 4 names, the number in and 2 others simply increases.
*/

function likes(names) {
        switch(names.length){
                case 0: return "no one likes this"; break;
                case 1: return names[0] + " likes this"; break;
                case 2: return names[0] + " and " + names[1] + " like this"; break;
                case 3: return names[0] + ", " + names[1] + " and " + names[2] + " like this"; break;
                default: return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
        }
}

/*
Tests
---

describe('example tests', function() {
        it('should return correct text', function() {
                Test.assertEquals(likes([]), 'no one likes this');
                Test.assertEquals(likes(['Peter']), 'Peter likes this');
                Test.assertEquals(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
                Test.assertEquals(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
                Test.assertEquals(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
        });
});



Other Solutions
---

@zadoev, @vladimirgorshunov:

function likes(names) {
        return {
                0: 'no one likes this',
                1: `${names[0]} likes this`,
                2: `${names[0]} and ${names[1]} like this`,
                3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
                4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
        }[Math.min(4, names.length)]
}

*/


