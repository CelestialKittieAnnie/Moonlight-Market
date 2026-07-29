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