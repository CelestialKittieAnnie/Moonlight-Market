# Moonlight Market

## About This Project

This project was built during BE101 Unit 1 and the start of Unit 2, and I have decided to use it as my capstone project. I have worked with HTML for a few years and taken web design at Finger Lakes Community College, so this is serving as a refresher on HTML structure, relative and online links, lists (unordered), and other basics. While I have experience with CSS, we haven't covered it in this course yet, so the styling is currently minimal.

I will continue following the lessons to clean up and update the project as I go. What is currently here represents only a small, early part of the final project. It is designed to be reusable, as I plan to feature a few different markets throughout my game.

From now on, I will be manually pushing updates to GitHub and adding comments detailing what has changed and what I have learned with each commit.

## What I Learned

Although I am already quite familiar with HTML, this course introduced me to a fantastic new tool: the **Live Server** ("Go Live") extension for Visual Studio Code. After years of manually refreshing the browser every time I changed a tiny detail, this extension has been a total game-changer. It is incredibly convenient and saves so much time and exhaustion!

## 1st Update
On my index.html I wrapped the first four elements in my body tag in a header tag to turn it into one element for cleaner code.

## 2nd Update
On my index.html I wrapped the remaining elements into one 'main' element inside the body tags. It is main content because it is everything after the heading. This cleans up the code further.

## 3rd Update
On my adopt.html I wrapped all of the elemnets inside the body tags in main tags. The next step is to clean it up further and divy it into sections.

## 4th Update
Restored the pinup_witch.png to it's rightful place in the header element of the index.html as it was accidently deleted when re-organizing code. I also divided the main content on the adopt.html into two sections and fixed small syntax errors.

## 5th Update
Decided the pinup_witch.png shpuld go in the header, and the head remain only the title for clarity. Also updated both the index & adopt .html's with nav tags wrapped around the links for clean code and to add Navbar elemenent with style later on that will be used for consisent styling across all pages for the Navbar later on.

## 6th Update
Wrapped the nav element on the adopt.html in footer tags as this should always be on the bottom of the main content. I am not doing this with the nav for adoption stalls on the index.html because there will be things added later that should be after this, not before it.

## 7th Update
I created a styles.css in my assets/css folder structure and then linked both my .hml's to this stylesheet by placing the link in the head under the title of each one. I then created a simple body element for the css with a background color I could easily see if it shows up and adjust the text size for h1.

## 8th Update
I have made the paragraph text be 20xp so it is smaller. I also changed the body background color, and centered the text for all body and head elements. I also added this, css to make sure that the list componetent ( 1., exp.) show up 'inside' so they are centered with the text and not set to the far left side of the page.

## 9th Update
I did a simple resize of the images so they weren't taking up a crazy amount of space anymore and I added text size for both h2 and h3 in the styles.css for a cleaner and more appealing style.

## 10th Update
I turned the greeting paragraph on my index.html into it's own class so that way I could us it in order to create it's own special styling on the css. This will allow me to customize indviual componets while leaving the things I want with the same styling alone.

## 11th Update
I added the same greeting class to the intro paragraph on the adopt.index for consient styling. I gave the title on my index.html a unuqie id. This is a one-time use per page. It cannot be used multiple times per page as a class can.

## 12th Update
I added a new .note class and styling for it and then applied it to my list and their headings to make them 'pop' from the page and catch the eye.

## 13th Update
I added an adoption-stall class so I can create a 'padded box' for that section on my adopt.html. I added padding, which is space between the element and it's border. I also added a different background color with a small solid pink border so it pops out.

## 14th Update
I added 200px to the left and right side margins of of adoption-stall class to push the margins inward give the appearance that I changed the size of the box, even though I did not.

## 15th Update
I refractored the stall section on the adopt.hmtl to create two "padded boxes" with the same style right next to eaxh other, adding a VIP lounge where extra rare pets will go. I also add a 20px padding at the bottom of the class in the styles.css so there would be space in-between them.

## 16th Update
I added an element to build a true consisent top-nav bar across all my pages. I added it to both my index.html & adopt.html's headers. I also added a flex display effect in styles.css for the top-nav class. This will ensure that we can control the spacing in between the links in the navbar automatically. It's default sets it at the far left side of the page and with very little space in-between the links.

## 17th Update
I used justify-content to re-center the text. Since justify-content can have only one value, I also added a styling element to the styles.css to specifally apply margins only to all <a> tags using jusify-conent. These are two seperate elements because an element can only justify-content one time.

## 18th Update
I did what I just did in updates 16 & 17 except with the bottom nav instead of the top navbar. This creates consistancey in styling my navs across my website.

## 19th Update
I have added a pet-grid div class to the Adoption Stalls 'padded box' on the adopt.html, here it will display pets available for adoption in their own 'padded box'. I have put in one custom pet image and will add more later on. This is just the bare skeleton for the pet-grid div.

## 20th Update
I have added the pet-grid styling to styles.css to set the display to flex and to jusify-content in the center. As we know this will set them to all display on the same row, right next to each other. I will have to set margin padding in order to put some space in-between. I will also need to resize my images to my preferred size. I also added more of my images.

## 21st Update
I have added styling rules in the styles.css for the images inside the pet-grid. I changed the height and width of the images because they were way too big and I needed to make sure I changed them to values that would scale it down without warping the image. I also added the margin I had mentioned last update. Along with using cover to call object-fit on my 'padded pet cards' so they stay neatly inside the Adoption Stalls.

## 22nd Update
I use the css stylesheet to set the border-radius to 50% which crops the images into a circular form. I then added  a solid pink border thick enough to be visible and pretty it up some. I almost did dotted but decided I like solid better for these because how busy my images are.

## 23rd Update
I added a class to all my pet images, like "moon-pet" and "shadow-pet". I have also added styling rules to the stylesheet for each of the pet classes. It only chnages the color of the border based on it's pet class. It will only override the "pink" on the style rule for pet-grid images. I have made sure to place these specific pet class styling rules under the original pet-grid img because of the 'cascade' rule of stylesheets. I had to be very, very specific about where I was pointing to in the code. The colors did not change at first, si I changed just '.moon-pet' and the rest to '.pet-grid img.moon-pet'. I relearned here that I alays need to be careful that I am in fact pointing to the specific element I want so the code runs correctly.

## 24th Update
I added a simple but effective (and pretty) styling rule to the pet-grid images that cause the images to 'transform' and get just slightly bigger when hovering over a pet image, along with a slight and light green glow.

## 25th Update
I moved three pets down into a new pet-grid div with a second class, vip-grid, under the VIP Lounge. Then I added a special styling rule to that .vip-grid class so the images in the VIP Lounge are slighly bigger and they always have a glowing shadow around them but it is a gold, so when you hover you it will still change to green.

## 26th Update
All I did this time was update my pet images to better ones and finish filling in the missing ones. It took awhile beacuse I am generating them on my Mac Laptop with draw things, and I went with higher qaulity images.

## 27th Update
I wrapped the bottom main element and nav in it's own 'roadmap-card' section. I then added style rules for this class. I changed the background color to be lighter and added a solid pink border for it to pop. I then added some padding and margin but with margin I added 'auto'. Which means set values for the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. I also added a very small border radius to give the 'padded box' rounded corners.

## 28th Update
I added styling rules for lists. I made it so they have a very small padding size and then pushed the left and right margins to force the box to stay center and the extra background to 'push in' and disapper. I did this same exact thing to the note class styling rules and then added dotted pink borders to both. I also restored and updated the #hero-title stylesheet rules, tweaking the text size, restoring the color to gold, and added a shadow drop to make it pop. I then created a special sub-title class for the senetence under the hero-title. I then added styling rules to this new class to first make the text smaller, turn it gold like hero-title, give it a shadow drop as well, and then i added the italic font style to it for better visuals. Then I split the paragraph that was one under the moon image, into 3 seperate ones so each word would show up on the specific line I wanted it on. I then added a 20px bottom margin to my top-nav class styling rules so that way there is always space in between it and the rest of the elements. Then I add a pinup-witch class attached to it's image and made styling rules for it. Making it slightly smaller, rounding corners by 30% border radius, and adding a thicker solid silver border. Lastly, I just added a moon-image class to the moon image. I then made it fully circular with a border radious of 50%, even though I gave it the same size as the pinuo-witch, I then hadded a double lined solid silver 8px border.

## 29th Update
I am planning to refactor and completely change my web pages away from the original fantasy adoption page. To make sure all of my original HTML and CSS capstone work stays completely intact for my college instructors to review if they would like, I am going to use GitHub to create a new branch for this new project setup. Once it is created, I will set the new branch as the main branch for all future updates while keeping the old branch preserved in my repository history. This keeps all of my original course work safe and accessible in one place while giving me a fresh branch for my rrefactored pages.

## 30th Update 
Fixed some indexing issues, and changed the content of my elements to convert the webpage into "Tales from the Aesopian Realm" instead of "Moonlight Market". I also changed styling colors to match the theme of this re-factor. I also did some slight tweaks to resizing elements and layouts of list, along with adding new links following the same pattern I used to create the originals. I also wanted to change the color of my links on my second page becuase their default looked horrible on my page. I did this by pulling up notes and reserach from my time at FLCC, here at Maestro, and my own self-studies as I couldn't rember how.


## 31st Update
I fixed small errors in my code, syntax and placement from re-fractoring. 
I also, moving on with my lessons, have added a small script into my index.html My net step is to move it into it's own script. Even though you CAN put JS in the html files themselves. I find it cleaner for them to be there own files, I often split my script files down to be clean and modular. I find this way more managable. But I am uploading this to show proof of my ability to do it.

## 32nd Update
I have just moved the JS code to it's own script in sides my folder that will hold my scripts in my assets. I then call the script now in place of the raw JS code being in my html files.

## 33rd Update
In my main.js I wrote a small script that does the same thing in two different ways. "sub-title" uses the raw id name and "#sub-title" uses a CSS selector. I used both of these to create and call two different constants for the same html element. 

## 34th Update
In the same way I used the querySelector for my subTitle2 constant that stores a specific id, I did this with my top-nav class. Because this is a class and not and id, we use a "." instead of a "#".

## 35th Update
You can use querySelectorAll to grab an entire "Nodelist" of every one of that element on the page. For me I actually created a second script file to do this and added it to my choose_faction page instead of my index. As I have multiple sections so it was perfect to showcase this.

## 36th Update
Directly following the last update I added to cosole logs just like the one I used last time, except with [ 0 ] added on one and [ 1 ]. Because the counting actually starts at 0. This is telling the JS to show us section one and then section 2 specifically from all the sections it just grabbed.

## 37th Update
I used textContent on my subTitle constant in my main.js to change it to a "special message for return vistitors". This is temporary and only there now to showcase my knowledge. textContent treats everything as plain text so you can't use styling on the text. Like italics or bolding.

## 38th Update
In order to use styling you use innerHTML and place the "strong, em, ect" tags inside of your string. I updated my example to use this. I have also used style.color to change the color of the subtitle text with JS to red.

## 39th Update
I added an ID to the choose_faction.html link on the index page with JS, becuase I did not actually create this page, it gave this error when I clicked the link Cannot GET /profile.html. Which is actually exactly what we wanted to see. It means the JS worked, the script just doesn't exist. I did this to showcase my skill for school.

## 40th Update
I removed the broken faction link so it will work, as that was only temporary. I also used a document.body.style.backgroundColor = "black"; to use JS to change the background of the faction page.

## 41st Update
I attached a click event listener to my "Choose Your Faction" link in main.js. The listener uses a named callback function, handleFactionClick, so when the player clicks the link the browser calls my function and shows a magical "Choosing your faction..." alert. This shows I understand how to register a click handler with addEventListener and use a function reference instead of calling it directly. I added a new input and greeting area to my index page so players can enter their hero name. In main.js I used getElementById to grab both elements and first wired an anonymous input event listener that updated the greeting text live as the player typed. I refactored the anonymous input listener into a named callback function called handlePlayerNameInput and passed it to addEventListener as a function reference (without parentheses). The greeting still updates in real time, and this proves I understand anonymous vs named callbacks and how the browser calls my function when the input event happens.

## 42nd Update
I added a real signup form to index.html with labels correctly linked to username and password inputs using matching for/id attributes. Each input has a name, so when I click the "Sign Up" button the browser does a default GET request and reloads the page with a query string like ?username=cat_prince&password=roses. This confirms I understand basic HTML form structure and how input values become key=value pairs in the URL without JavaScript.

## 43rd Update
I upgraded the signup ritual so the browser no longer reloads the page on submit. In main.js I added a submit event listener to the form and called event.preventDefault() to stop the default GET request. Inside that handler, I read the current value of the #signup-username input using usernameInput.value, log it to the console, and then create a new li element with document.createElement('li'). I set its textContent to the typed username and append it to a new ul id="recruit-list" under the form using recruitList.appendChild(newRecruit). Now every time I click "Sign Up", the page stays in place and a new recruit name is added live to the list, proving I can read form data and update the DOM without a page reload.

## 44th Update
I made the faction info links list react to clicks using CSS classes and JavaScript. In my stylesheet I added a .done class that applies a line-through, lowers opacity, and adds a subtle highlight so players can see which faction pages they’ve already viewed. In main.js I used document.querySelectorAll('li') on the faction links list and attached a click event listener to each list item with a named callback function called handleItemClick. Inside that function I call this.classList.toggle('done') so every click adds or removes the .done class on that specific list item. This shows I understand how to loop over multiple elements, register click handlers with addEventListener, and use classList.toggle() to connect CSS classes to interactive behavior without reloading the page.

## 45th Update
I upgraded the main realm signup page so new recruits feel more like interactive characters instead of plain text. In main.js, inside the signup form’s submit handler, I now create a button for each new recruit with document.createElement('button'), set its label to "Banish", and attach it to the same li as the username using appendChild. I also register a click event on that button with `addEventListener('click', ...) that calls ewRecruit.remove(), so clicking "Banish" cleanly removes that specific recruit from the list without reloading the page. To make the interaction feel on-theme, I added a .banish-button class in my CSS. This class gives the button a small, dark red background, gold text, a gold border, and a bit of padding so it looks like a cursed seal tag next to each recruit’s name. This update shows I can create new DOM elements dynamically, attach them to existing elements, wire up event handlers, and then style those new interactive controls with CSS to match the Aesopian Realm’s UI.

## 46th Update 
I connected my Aesopian Realm to an external “magic data library” using the Fetch API. On choose_faction.html, inside choose_faction.js, I added an async function called loadTestPost that uses await fetch('https://jsonplaceholder.typicode.com/posts/1') to wait for the HTTP response (the sealed crate) and logs the raw Response object to the console. Then I call await response.json() to unpack the response body into real JavaScript data (the unpacked potions) and log the parsed JSON object. I repeated the same two-await pattern in a second function, loadTestUser, which fetches https://jsonplaceholder.typicode.com/users/1 and logs both the Response and the parsed user object. This proves I understand how async/await makes asynchronous code read top-to-bottom, how await fetch(url) waits for the HTTP response, and how await response.json() waits for the body to be converted into usable JavaScript data that I can see in the console.

## 47th Update 
Today I taught my Aesopian Realm how to pull living data from an outside world and show it on the page. On my choose_faction page, I added a test area where the game can display a list of “decrees” and a list of “citizens” coming from a public JSON API. In my choose_faction JavaScript, I wrote one function that fetches a small set of test posts and another that fetches a small set of test users. For each response, I turn the data into a normal JavaScript array, loop through each item, and build new list entries in the document. The posts show an id, a title, and a body. The users show a username and an email. This proves that I can take JSON data from an API, loop over the results, pick out the fields I care about, and render them into the page. Later, I can reuse this same pattern for real player accounts and faction choices.

## 48th Update
I rebuilt my Choose Your Faction page into a small, data driven search tool for the Aesopian Realm. I created a new factions_data.js file that logs when it loads and defines a shared factionsData list with core factions like Feline Empire, Serpent Ascendancy, Hyena Clan Synods, and Walrus and Seal Gerontocracy, each with its continent and a short tagline. In choose_faction.html I now load factions_data.js before choose_faction.js so the search logic can use that shared data. Then I removed all of my old JSONPlaceholder practice code and test sections so the page is no longer showing outside posts or user emails. The new choose_faction.js only handles Aesopian data: it reads the search text, filters factionsData by name or continent, and calls a renderFactions function that clears the old results and builds a fresh list of matching factions with their name, continent, and tagline. This proves I can organize my project into separate files, move shared data into its own script, and build a simple search flow where a player types a term, clicks a button, and sees a filtered list of Aesopian factions on the page.

## 49th Update 
I built a dedicated realm info card for the Feline Empire page so it reads like an in world dossier at the top of the layout. The card shows the realm name as a clear title and then uses simple stacked paragraphs for capital city, continent, and population details. In my shared stylesheet I added a new country card style that centers the card on the page, gives it a darker green background, gold text, padding, a framed border, rounded corners, and a soft shadow so it feels like a physical card laid on a table. I also used max width and careful spacing so the card stays readable and compact, which sets me up to reuse this same visual template for other factions later without changing the basic design.


## 50th Update
I have created more Country Cards for Factions and am slowly expanding my website and filling in lore with these. I added a simple interactive test to the Feline Empire country card so the faction name on the card can be changed from the page without any reloads. This uses a small text field and button directly under the card title, and a short JavaScript file that listens for a click, reads what the player typed, and swaps the visible name on the card if the input isn’t empty. This is mainly a course exercise to prove I can hook up basic interactivity and update the page with JavaScript, not a final game feature. Later on I plan to reuse this pattern in places where renaming makes more sense in the Aesopian Realm, like custom dynasties or armies, instead of letting players rewrite core faction lore on this details page.

## 51st Update 
Extended the Feline Empire faction details card to read from a live country API instead of only hardcoded lore. On page load, a small async function calls the Countries.dev endpoint for France, waits for the response, and then updates two existing spans on the card: the capital name and the population line. The DOM elements were already there for my earlier rename exercise, so this change just grabs them with getElementById and replaces their text once the data is ready. For now, this means the Feline capital label shows Paris and the population line mirrors France’s current population count, formatted with commas, while still keeping my own military percentage suffix. This is a focused step to prove I can chain page load to async fetch to DOM updates in my current Aesopian layout, which I’ll later refactor to better match in-universe stats instead of Earth countries.