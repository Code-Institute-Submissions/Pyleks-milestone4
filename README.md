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