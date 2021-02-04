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


### Additional Tools

|Applications  |Usage  |
| :-------------| :-------------|
| [Photoshop](https://photoshop.com/en)  | Photoshop used for all pictures on the website  |
| [Lightroom](https://lightroom.adobe.com/)  | Lightroom additionally used on some of the Website work.  |
| [Krita](https://krita.org/en/)  | Some Part of the pictures been managed in Krita.  |


#### WireFrames
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

## Deployment
<strong>1. Clone Website</strong>
1. Go to [GitHub](https://github.com/Pyleks/milestone4)
2. Click Code and copy the HTTPS link for cloning of the project.
3. To Clone using command, simply type: ``git clone https://github.com/Pyleks/milestone4.git``
4. Open [Milestone-Project-3](https://github.com/Pyleks/Pyleks/milestone_project_4)

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
1. run the following commands ``python manage.py makemigrations``
2. ``python manage.py migrate``
3. ```python manage.py createsuperuser```

<strong>Load Fixtures</strong>
We need to bring all our product data.
1. ``python manage.py loaddata categories.json``
2. ``python manage.py loaddata products.json``

So if the following have been done correctly, the settings.py should recognise 
the database, and the final command
```python manage.py runserver```

<strong>Deploying to Heroku</strong>
1. Make sure to Push the project to Github, (also make sure .env is added to .gitignore)
2. Open Heroku https://www.heroku.com/
3. Create a new app.
4. Open Settings, and reveal <strong>Config Vars</strong>

<strong> Heroku Variables</strong>
| Config Vars List  |
| :-------------| 
| DISABLE_COLLECTSTATIC = 1 |
| AWS_ACCESS_KEY_ID |   
| AWS_SECRET_ACCESS_KEY | 
| AWS_STORAGE_BUCKET_NAME  |  
| DATABASE_URL  |  
| DEBUG  |  
| EMAIL_HOST_PASS  |  
| EMAIL_HOST_USER  |  
| REGION_NAME  |  
| SECRET_KEY  |  
| STRIPE_PUBLIC_KEY  |  
| STRIPE_SECRET_KEY  |  
| USE_AWS  | 


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
4.Click Generate
5. Add the variables below to your Heroko Config vars with the secret key, and your email address
| EMAIL_HOST_PASS  |  Secret Key
| EMAIL_HOST_USER  |  your email address

<strong>Setting up a Django Secret Key</strong>
1. Visit any django secret key generator, click generate.
2. Open Heroku Config Vars, and paste in your secret Key
| SECRET_KEY | key go here  |
