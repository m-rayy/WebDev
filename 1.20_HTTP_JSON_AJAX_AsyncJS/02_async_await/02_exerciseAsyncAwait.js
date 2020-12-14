// Solve the below problems:

// #1) Convert the below promise into async await
fetch("https://jsonplaceholder.typicode.com/users/")
  .then((response) => response.json())
  .then(console.log);

async function fetchUsers() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users/");
  const data = await resp.json();
  console.log(data);
}


// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
// #3)Add a try catch block to the #2 solution in order to catch any errors. 
const urls = [
  // 'https://ERROR.typicode.com/users',
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map(async function (url) {
        const resp = await fetch(url);
        return resp.json();
      })
    );
    console.log("users", users);
    console.log("posta", posts);
    console.log("albums", albums);
  } catch {
    console.log('Error!')
  }
};


// Try Babel to see old versions of code (e.g. es2017):
'https://babeljs.io/repl/#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&spec=false&loose=false&code_lz=PTAEGUHsBsDcFNQBcAWiBG9qQO6gA4BOk608AtgM4BcAULSKAMQCMAlKAMKQB2ChSZGlCZseIpHIBLSoik8kkUAENKATx4BjFTmVSktAGbwkmlAAoARCiRJ8NEACtKvfNGWb4KGABN4hADokNXwpTUg_APDyYABXWUJKYEs2WlBQILQec3NCeEp8XlkOAF4APlA8gqL4AOdeczZU9Mz4bPCeFzIA7ABzNgBuelUNbUNYrSQpXlBjUxQAVQTKRtAAbzTQDspBKvxQEp09QTmzKxs7B2B6njcPL19_IJCwiNrouOXkwc3twR9lEhlAcjvpKvl8HUXNkfultjBan1zACgT8AL70BhgJgAJg4AEEACIANXxADlOABRQnUUALfAoxCoRDjSbTHgiLC4WbEchCRCwKR-JSKFTQFygFDKBBYlTqLSgk6QQhCGSgaDyeC004WWKEaBsVrZPYHCp7KENJqyqD8vKgSjeWLQHw8ADkgkwKh4agyzJhW2U0HFXrU5GV8AAhLLCbx3aBeiZQD4ZOE9coEz4AlnVZRQGrgXlA9AfYpYr0UKBeLUs7KmABmNj4nw-FTIQg-zSAswibCaADWyBFwlx9pgsSmM3klcIfhVos78xDoH8xESAVAtD-oD1wcOAG1NoxXRd7NQQJSAEoXgDyF-eoXCkQ-8X8lFdABpNtZbKenNC7p43jOk8wQPm8USSJ8r6WJ-6TfpcZ7XP-7iAY8gSga8T6QYUOyUDBX4nlcNwAQ8wHoS8j7vJBgboLEVD4QAukMm5FIICZIISgLAocIwKqymgThyqwbOkSDtusmxwqxoB7i-iTvgQkC4QpNF0ZQDEgsouhggACryMi1EW5iSek276pQATkMo-DmLxYwTAJ7KgOYO4cCJpkeVuJo8dpJwmGcrlDB5Hl5EgeocuaNyNEFwVos0pmwqZ8LdEilhyXhCnpYlUmdAiPSQL0Vg4UCMGKbh2VbEUeWpap9EqdAtFUIlaIBou7k5V0iIFeYrqUoQq4Rq68UYmiAxAA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Ces2017%2Creact%2Cstage-2%2Cenv&prettier=false&targets=&version=7.11.6&externalPlugins='