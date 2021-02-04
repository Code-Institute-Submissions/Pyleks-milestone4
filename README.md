# Alex Digital Art

## Introduction

Welcome to Alex Digital Art Tutorials for beginners, A quick stop for a wide range of tutorials covering
world known applications such as Photoshop, Lightstorm and Krita, we offer everything from free courses
to our members to Masterclasses for a small fee. Invest in your future with us today!


## Contents
1. [UX](#UX)
2. [Design Decisions](#Design-Decisions)
3. [Database](#Database)
4. [Features](#Features)
5. [Technologies](#Technologies)
6. [Testing](#Testing)
8. [Deployment](#Deployment)
10. [Disclaimer](#Disclaimer)


## User Experience
Giving the visitor a quick view to what we have to offer, by putting our course applications on the top of the website
providing transparency where it matters so our future clients knows exactly what we applications we provide
tutorials for.

#### User Stories
> Curious about Digital Art.

> Want to learn how to use Photoshop.

> Want to improve their favorite pictures they shot over the holiday.

> Getting their blog up and running but all their pictures looks flat and boring, time to learn Photoshop.

> Want to learn how to edit pictures in general for hobby.

> Want to expand on their artistic side with digital tools.  

> About to start drawing digitally, but want to learn the basics of Photoshop. 

> Learn how to quickly improve all their pictures through Lightroom

> Want to give their pictures more dept.  

> Curious about how easy or difficult it is to learn the best digital tools for Photographers.

## Design Decisions
The design decisions here is following the Django Code Institute tutorial quite closely to get as much as possible
working properly in the final product, but everything is simplified enough to make the user experience very
straight forward, allowing for quick navigation.

### Additional Design Decisions.
All pictures and backgrounds have been created specially for this site.
As well all the product images have been created from scratch, So no content was downloaded.

The following things was required to make it possible:
- Manually crafted characters.
- Poses setup correctly.
- Correct Lighting.
- Post processing in either Lightroom or Photoshop.
- Correctly use of size dimensions to work optimal on a website. 

### Ideal Design Additions.
If it had been possible I would love to have added a considerably big addition of creativity to everything 
from 400,403, 404 and 500, + made it a fair bit more interesting to navigate through the site, and transforming
it into a truly unique e-commerce site. 

#### Typography
I choose to go with <strong>Architects Daughter Cursive</strong>, As this fits the landing page quite well.
with the basic drawing style that is present and giving it some personality.(Impression always important)

#### Color Schemes
![Color Scheme](media/Color-scheme.jpg)

#### Let's Talk White
One of the most important colors of the website due to acting as a drawing space, allowing me to project
everything onto the surface itself, without concern of distorting colors to cause any issues. 

## Technologies

### Languages
| Languages  | Usage |
| :------------- | :------------- |
| [HTML](https://www.w3schools.com/html/)  | Creating the entire foundation for the website.  |
| [CSS](https://www.w3schools.com/css/)  | Applying styling across all pages.  |
| [JavaScript](https://www.w3schools.com/js/)  | Mainly used for Stripe  |
| [Python](https://www.python.org/)  | Runs the entire backend server code, (Django) |

### Libraries

|Frameworks  |Usage  |
| :-------------| :-------------|
| [Bootstrap](https://getbootstrap.com/)  | Styling Framework to get a modern feel to the website.  |
| [Font Awesome](https://fontawesome.com/)  | Used for all website icons.  |


### Python Libraries and Framework
This list is longer then previous, so only key Libraries are added below.

|Applications and Libraries  |Usage  |
| :-------------| :-------------|
| [Django](https://www.djangoproject.com/)  | Required to run all route operations in the code.  |
| [STRIPE](https://stripe.com/en-ie)  | Handling all Payments  |
| [Crispy Forms](https://django-crispy-forms.readthedocs.io/en/latest/)  | Handling form logic  |
| [Dj Database](https://pypi.org/project/dj-database-url/0.2.2/)  | Provides support between Django and Heroko Postgres database |
| [Certifi](https://stripe.com/en-ie)  | For safe form handling, and verifying the SSL certificate  |


### Database

|Libraries  |Usage  |
| :-------------| :-------------|
| [Heroku Postgres](https://www.heroku.com/postgres)  | Free tier version of Postgres for all database management in production  |
| [AWS S3 Bucket](http://aws.com/)  | Free tier version for Storage of all static and media files  |

### Additional Tools

|Applications  |Usage  |
| :-------------| :-------------|
| [Photoshop](https://photoshop.com/en)  | Photoshop used for all pictures on the website  |
| [Lightroom](https://lightroom.adobe.com/)  | Lightroom additionally used on some of the Website work.  |
| [Krita](https://krita.org/en/)  | Some Part of the pictures been managed in Krita.  |


#### WireFrames
All wireframes have been made in Balsamiq Cloud, as it offer a quick and solid way to move through the designing process
with easy access to modifications when required.   


<details>
<summary>Main Page</summary>
<br>


![Main Page Desktop](https://github.com/Pyleks/milestone4/blob/master/wireframes/Landing_Page_Desktop.png?raw=true)
![Main Page Tablet](https://github.com/Pyleks/milestone4/blob/master/wireframes/Landing_Page_Tablet.png?raw=true)
![Main Page Phone](https://github.com/Pyleks/milestone4/blob/master/wireframes/Landing_Page_Mobile.png?raw=true)

</details>

<details>
<summary>Product Page</summary>
<br>

![Product Page Desktop](https://github.com/Pyleks/milestone4/blob/master/wireframes/Product_Page_Desktop.png?raw=true)
![Product Page Tablet](https://github.com/Pyleks/milestone4/blob/master/wireframes/Product_Page_Tablet.png?raw=true)
![Product Page Phone](https://github.com/Pyleks/milestone4/blob/master/wireframes/Product_Page_Phone.png?raw=true)

</details>

<details>
<summary>Product Details</summary>
<br>

![Product Details Desktop](https://github.com/Pyleks/milestone4/blob/master/wireframes/Product_Details_Desktop.png?raw=true)
![Product Details Tablet](https://github.com/Pyleks/milestone4/blob/master/wireframes/Product_Details_Page_Tablet.png?raw=true)
![Product Details Phone](https://github.com/Pyleks/milestone4/blob/master/wireframes/Product_Details_Page_Phone.png?raw=true)

</details>

<details>
<summary>Shopping Bag</summary>
<br>

![Shopping Bag Desktop](https://github.com/Pyleks/milestone4/blob/master/wireframes/Shopping_Bag_Desktop.png?raw=true)
![Shopping Bag Tablet](https://github.com/Pyleks/milestone4/blob/master/wireframes/Shopping_Bag_Tablet.png?raw=true)
![Shopping Bag Phone](https://github.com/Pyleks/milestone4/blob/master/wireframes/Shopping_Bag_Phone.png?raw=true)

</details>

<details>
<summary>Checkout</summary>
<br>


![Checkout Desktop](https://github.com/Pyleks/milestone4/blob/master/wireframes/Checkout_Desktop.png?raw=true)
![Checkout Tablet](https://github.com/Pyleks/milestone4/blob/master/wireframes/Checkout_Tablet.png?raw=true)
![Checkout Phone](https://github.com/Pyleks/milestone4/blob/master/wireframes/Checkout_Phone.png?raw=true)

</details>

<details>
<summary>Checkout Success</summary>
<br>


![Checkout Success Desktop](https://github.com/Pyleks/milestone4/blob/master/wireframes/Checkout_success_Desktop.png?raw=true)
![Checkout Success Tablet](https://github.com/Pyleks/milestone4/blob/master/wireframes/Checkout_Success_Tablet.png?raw=true)
![Checkout Success Phone](https://github.com/Pyleks/milestone4/blob/master/wireframes/Checkout_Success_Phone.png?raw=true)

</details>

<details>
<summary>Profile</summary>
<br>


![Profile Desktop](https://github.com/Pyleks/milestone4/blob/master/wireframes/Profile_Desktop.png?raw=true)
![Profile Tablet](https://github.com/Pyleks/milestone4/blob/master/wireframes/Profile_Tablet.png?raw=true)
![Profile Phone](https://github.com/Pyleks/milestone4/blob/master/wireframes/Profile_Phone.png?raw=true)

</details>

<details>
<summary>Login</summary>
<br>


![Login Desktop](https://github.com/Pyleks/milestone4/blob/master/wireframes/Login_Desktop.png?raw=true)
![Login Tablet](https://github.com/Pyleks/milestone4/blob/master/wireframes/Login_Tablet.png?raw=true)
![Login Phone](https://github.com/Pyleks/milestone4/blob/master/wireframes/Login_Phone.png?raw=true)

</details>

<details>
<summary>Login</summary>
<br>


![Register Desktop](https://github.com/Pyleks/milestone4/blob/master/wireframes/Register_Desktop.png?raw=true)
![Register Tablet](https://github.com/Pyleks/milestone4/blob/master/wireframes/Register_Tablet.png?raw=true)
![Register Phone](https://github.com/Pyleks/milestone4/blob/master/wireframes/Register_Phone.png?raw=true)

</details>
<br>

## Project overview (The 14 day challenge.)
So the Full Stack Frameworks With Django tutorial + MS4 was all done in 14 days, and here is how I broke down this challenge.  
With a project of this size, without knowing what end to start with required a strong plan.  

1. I broke down the first 7 days to go through the course material, following extremely closely, because this had to work.  
2. Then followed by the next 7 days to start recoding and gain a deeper understanding.  
3. I started off by making sure everything worked locally, and on Heroku.  
4. Then went through the project, and made sure everything was responsive.  
5. Started customizing as much as possible to fit my own project, unfortunately this also lead to more code then I wanted to be 
    reused from the tutorial.  
6. Entering test phase to make sure things are working correctly, before applying fixes to everything that required a quick repair.  
7. Finishing the README file.  



## Features  
All the features was developed quite close with the Fullstack tutorial brought by Code Institute.
But comes with everything from  create, update and delete content as a Administrator, as well fully enabled
with Stripe API to allow test purchases, Email on confirmation, As well keeping track of all your orders with
a registered account.

### Home Page(Not registered user)  
Comes with a quick menu to navigate to all the different products with a single click, or simply display display
all products using the "Shop Now" button, access to register/login or simply use the search field to find your items
fast and easy.

### Product Page (Not Registered User)  
Display all products under the choosen category including sort by field and how many products are displayed.
as well a price, star rating, picture of product.

### Product Details (Not Registered User)  
Provides details about the product, and the opportunity to choose quantity, go back or keep shopping.
Adding a product makes the toaster appear, and give a quick glance at what you just bought.

### Shopping bag (Not Registered User)  
Give a overall glance at everything you just added, and give the buyer a chance to correct the amount before
going to the checkout bag, or simply remove anything that might be there. 
Also possible to navigate using the navbar from here into any of the sections on the website. 

### Checkout (Not Registered User)  
Provides a opportunity to provide the checkout details, and use the test version of stripe with
Card: 4242 4242 4242 4242  Expire Date: 04 / 24 CVV: 242 Zip: 42424.
And it will take you successfully through the checkout process.

### Post-Checkout (Not Registered User)  
Provides all the uer details, + the total cost, as well a toast for successfully checking out.
Informing they will receive a email with the confirmation order.

### Website Overall as registered User  
This will provide the best experience, as the navbar now give the option to use the profile
to track orders, and save their information for further purchases to make the process easier for the user.

## Features I would implement if time allowed it.  
One of the biggest features would be to filter out all free offers to only show for registered users.
And use the top of the page to entice the user to register, and hide it for registered users.

## Testing  
During the development (following CI tutorial) the page have been tested and broken a fair amount of times.  
So I have gone through all the standard testing, such as Intended use, Features, Responsiveness, Security and Code Testing.

#### The following have been tested.  
- Intended use (Interactivity)
- URL Injection (Security)
- Responsiveness across devices
- W3 HTML Validator using URL and copy/paste code
- W3 CSS Validator
- JS Hint
- PEP8

### Intended use on Chrome and Firefox  
#### Home Page  
- Opening the website, expecting everything to look in order from small to Ultra wide with icons intact.    
- Testing all links to see if they are navigating to correct location.   
- Testing to login from Home page.    
- Tested if the search bar worked correctly and navigated as intended.   


#### Product Page  
- Opening the product page, expecting everything to align up correctly, and icons to be visible.  
- Tried using the dropdown sort by, to see it filter correct.   
- Tried all the links to make sure they are leading to the correct places.  

#### Product Details  
- Opening the page, checking everything align, and scale properly.  
- Tried all the links, to make sure add to bag and keep shopping work as intended.   
- Also made sure bag total updates in top right corner, and that the toast is appearing correctly.  

#### Shopping bag   
- Opening shopping bag, testing, update, remove to work as intended.  
- All text and cards align correctly.  
- Toast updates correctly.  
- Keep shopping as well the Secure Checkout button works as intended.  

#### Checkout  
- everything align correctly.  
- It fetches the profile information correct.   
- Required fields requires to be filled out.   
- Stripe process when required information is added.  

#### Checkout Success  
- Everything display correctly, with correct information.  
- The "Check out the latest deals" works correct.  
- everything align correctly.  

#### My Profile  
- Updates and displays all information.  
- Aligns correctly.  
- Adds order history.  

## URL Injection  
During URL injects, we are attempting to use links to access profile, and generally preforming actions
that otherwise should not be possible for a non registered user, or for a user trying to access someone
else profile.

#### Accessing Profile  
- I tried accessing profile in general using https://alex-digital-art.herokuapp.com/profile.  
This do not work since there is no ID in that string, so should not lead anywhere.  


#### Logging out without being logged in  
- I tried logging out without being logged in: https://alex-digital-art.herokuapp.com/accounts/logout/  
This did not really do anything useful

#### Deleting a product  
- https://alex-digital-art.herokuapp.com/products/delete/32/  
This thankfully did not work  


#### Adding a product  
- https://alex-digital-art.herokuapp.com/products/add/  
This thankfully did not work  

Responsiveness
In this test the website was tested to all default device sizes provided my chrome as well responsive slider across Chrome, Firefox.

I followed the standard list provided by Chrome.

360 x 640 Galaxy S5  
375 x 667 iPhone 6/7/8  
375 x 812 iPhone X  
411 x 731 Pixel 2  
411 x 823 Pixel 2 XL  
414 x 736 iPhone 6/7/8 Plus  
768 x 1024 iPad  
1024 x 1366 iPad Pro  
540 x 720 Surface Duo  
280 x 653 Galaxy Fold  

## Testing Summary
### Functionality
| Page        | Bugs           | Status  |
|:------------- |:-------------| :-----:|
| Main Page     | No issues found | Good |
| Main Page(logged in)     | No issues found      | Good |
| Product Page (Nog logged in) | No issues found  | Good |
| Product Details(logged in Visitor) | No issues found     | Good |
| Bag Page Not logged in | No issues found     | Good |
| Bag Page Logged in | No issues found     | Good |
| Checkout (Not logged in) | No issues found     | Good |
| Checkout (Logged in)  | No issues found     | Good |
| Order Summary (Not Logged in) | Button leading to incorrect location     | Fixed |
| Order Summary (Logged in) | Button leading to incorrect location     | Fixed |
| Profile (Logged in) | No issues found     | Good |
| Product Management (Admin) | No issues found     | Good |

### URL Injection

No issues was found during this test.

### Responsiveness
| Page        | Bugs           | Status  |
|:------------- |:-------------| :-----:|
| Bag Page     | Did not scale with devices, so remade the displaying of information. | Fixed |




## Deployment
<strong>1. Clone Website</strong>  
Please note this is for deployment to a local IDE.
Running a command on GitPod require python3 manage.py runserver.  
Running a command locally require python manage.py runserver.
1. Go to [GitHub](https://github.com/Pyleks/milestone4)  
2. Click Code and copy the HTTPS link for cloning of the project.  
3. To Clone using command, simply type: ``git clone https://github.com/Pyleks/milestone4.git``  

<strong>2. Installing dependencies.</strong>  
1. Install virtualenv using pip3 ``pip3 install virtualenv``  
2. Make sure to be inside venv before installing requirements.txt file.  
3. Install requirements.txt by typing ``install -r requirements.txt``  

<strong>3. Setting up environmental variables</strong>   
Please note that the requirements.txt file comes with Decouple  
Python library, allowing the use of .env file.  
1. Create a .env file in the project directory.  
2. Filling out all the Keys, please see below for key name + where to be found.  

<strong>Stripe Public Key</strong>  
Variable = STRIPE_PUBLIC_KEY
1. To get your key, visit: https://dashboard.stripe.com/test/dashboard
2. Click Get your test API keys
3. Copy the publishable Key.
4. Make a format the following.
``STRIPE_PUBLIC_KEY=key`` and save inside .env

<strong>Stripe Secret Key</strong>  
Variable = STRIPE_SECRET_KEY
1. Follow the same guide as above, just copy the secret key into the .env file
``STRIPE_SECRET_KEY=key`` and save inside .env

<strong>Secret_key</strong>  
To generate Django secret key, Google "Django Secret Key generator"
1. Copy the key into format.
``SECRET_KEY=key`` and save inside .env

<strong>Debug</strong>  
To correctly turn debug on and off during production, add the following variable
inside .env
```DEBUG=1``` Debug Enabled
```DEBUG=0``` Debug Disabled

<strong>Please note, these variables will make it possible to run it locally, but requires
more to run on Heroku</strong>

<strong>Database migrations</strong>  
To enable all the database information.  
Run the following commands.  
1. ``python manage.py makemigrations``
2. ``python manage.py migrate``
3. ```python manage.py createsuperuser```

<strong>Load Fixtures</strong>  
We need to bring all our product data.
1. ``python manage.py loaddata categories.json``
2. ``python manage.py loaddata products.json``

So if the following have been done correctly, the settings.py should recognise 
the database, and the final command
```python manage.py runserver```

<strong>Push the project files to your github</strong>

<strong>Deploying to Heroku</strong>  
1. Make sure to Push the project to Github, (also make sure .env is added to .gitignore)
2. Open Heroku https://www.heroku.com/
3. Create a new app.
4. Open Deploy, and connect your own github account, Do not enable Automatic Deploys yet
(This will be covered at the bottom of the document)  
4. Open Settings, and reveal <strong>Config Vars</strong>

<strong> Heroku Variables</strong>  
| Config Vars List  |  Overview  
| :-------------| :-------------|  
| DISABLE_COLLECTSTATIC  |  1 |  
| AWS_ACCESS_KEY_ID | AWS Access Key  |  
| AWS_SECRET_ACCESS_KEY |  Secret Key    |  
| AWS_STORAGE_BUCKET_NAME  |  Name you gave bucket    |  
| DATABASE_URL  |  Heroku Postgres database URL     |  
| DEBUG  |   0   |  
| EMAIL_HOST_PASS  |  Password give by Gmail    |  
| EMAIL_HOST_USER  |   Your email address    |  
| REGION_NAME  |  eu-east-5 (example)      |  
| SECRET_KEY  |  Django Secret Key      |  
| STRIPE_PUBLIC_KEY  |  Obtained from Stripe Dashboard        |  
| STRIPE_SECRET_KEY  |   Obtained from Stripe Dashboard      |  
| USE_AWS  |    True      |   


<strong>Disable_Collectstatic</strong>  
This Variable make sure the website can run without collecting static files.
So expect no CSS files or anything from the static folder to be applied.
| DISABLE_COLLECTSTATIC = 1 |
So add this if/when you want to run the website to see it load without AWS.
<strong>Make sure to remove this variable once AWS is ready to go.</strong>



<strong>Setting up Amazon S3 Bucket</strong>  
From Amazon web service (AWS) we need 4 keys for our static storage.

| Config Vars List  |
| :-------------| 
| AWS_ACCESS_KEY_ID |   
| AWS_SECRET_ACCESS_KEY | 
| AWS_STORAGE_BUCKET_NAME  |  
| REGION_NAME  |  

To obtain these keys we need to setup multiple things within AWS.
please see all steps below.

<strong> Create AWS S3 </strong>  
1. Create name 
2. Choose Region
3. (If Public uncheck "Block all public access")
4. Achknowlege that you know it will be set to public.

<strong> Properties </strong>  
Enable for website hosting, choose default index and error
by typing index.html, and error.html
(End point will show at the bottom)

<strong> Permission </strong>  
CORS Configuration code:
````json
      [
          {
              "AllowedHeaders": [
                  "Authorization"
              ],
              "AllowedMethods": [
                  "GET"
              ],
              "AllowedOrigins": [
                  "*"
              ],
              "ExposeHeaders": []
          }
        ]
  ````

<strong> Buket Policy </strong>  
Click Bucket Policy Generator
1. Select Type of Policy (S3 Bucket Policy)
2. Effect: Allow
3. Principal *
4. Actions: GetObject
5. Amazon Resource Name (ARN)Aquired from Edit Bucket Policy page.
6. Click ADD STATEMENT
7. Generate Policy and copy it
8. Add it to the Edit Bucket Policy. 
9. Add /* after Resource ARN.


<strong> Edit Access Control List</strong>  
1. Provide everyone public access (LIST)
2. accept thaat we understand the changes.
3. Click Save

<strong> locate IAN to create access groups to manage everything</strong>  
1.Under Access management, Click Group - Create a new Group
2. We don't have any policy to attach yet, so just click next - next.
3. Create Policy
4. Choose Import Managed Policy, to edit an existing one.
5. Locate AmazonS3FullAccess, and import that
6. Find your Arn and to make it possible. under resource.
``arn:aws:s3:::name-of-bucket``
``arn:aws:s3:::name-of-bucket/*``
We are using a list here. one item is the bucket itself,
and the /* adds another rule for all files/folders in the bucket.

7. Click Nex. add name and scription - Click Create Policy


<strong> Attach Policy</strong>  
Open the group we made earlier.
Click Permissiongs
and Attach Policy
2. Search for the policy we made.
and attach it.

<strong> Create User</strong>  
1. Make a username
2. Give Programmatic access

<strong> Add User to Group</strong>  
1. Click the group. 
2. CLick Next all the way to tend.
3. Download CSV file

<strong> CSV file contains user access key, and secret access key</strong>  


<strong>Setting Up postgres</strong>  
1. By going into Heroku.com, then click the app you made for this project.
2. Click Resources.
3. Type Heroku Postgres, and add the free model.
4. Once you do this you will get a new variable in Heroku Config Var <strong>DATABASE_URL </strong>
5. There is no need to do anything with this URL, it is just required for the Heroku database to work.

<strong> DEBUG </strong>  
If you want to go from production environment to developer.  
DEBUG = 1  
If you want to stay in production environment.
DEBUG = 0.  
Please note this will also initalize the email service that is only used in production.


<strong>Setup email fast</strong>  
1. Enable Gmail 2 step verification.
2. Click App Password
3. In drop down menu, choose Mail. and Other then Type Django (Or what you prefer)
4. Click Generate  
5. Add the variables below to your Heroko Config vars with the secret key, and your email address  
| EMAIL_HOST_PASS  |  Secret Key  
| EMAIL_HOST_USER  |  your email address   

<strong>Setting up a Django Secret Key</strong>  
1. Visit any django secret key generator, click generate.  
2. Open Heroku Config Vars, and paste in your secret Key  
| SECRET_KEY | key go here  |  

<strong>Stripe_Keys</strong>  
1. Login to Stripe.com  
2. Navigate to dashboard  
3. Full link: https://dashboard.stripe.com/test/dashboard  
4. Create 2 variables in Heroku Config Vars.  
| STRIPE_PUBLIC_KEY  |    
| STRIPE_SECRET_KEY  |   
5. Copy in the PUBLIC_KEY and SECRET_KEY into each of their respective fields.

<strong>Migration</strong>  
Make sure you have the correct Database set.  
````python
    DATABASES = {
        'default': dj_database_url.parse(os.environ.get('DATABASE_URL'))
    }
````
Run the following migrations to get the new database running.  
1. ```python manage.py makemigrations```  
2. ```python manage.py migrate```    
3. ``python manage.py loaddata categories``    
4. ``python manage.py loaddata products``  

<strong>Push everything to github</strong>
1. Inside Heroku, setup automatic deployment.
A word of warning, automatic deployment, rebuilds the page when pushing to github.  
But also communicate to AWS, pushing the free tier usage limit very fast. 

