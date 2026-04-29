<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/userguide3/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/
$route['default_controller'] = 'welcome';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;

// ============================================
// API Routes
// ============================================

// Auth
$route['api/auth/login']['POST'] = 'api/auth/login';
$route['api/auth/logout']['POST'] = 'api/auth/logout';

// Dashboard
$route['api/dashboard']['GET'] = 'api/dashboardapi/index';

// Gallery
$route['api/gallery']['GET'] = 'api/galleryapi/index';
$route['api/gallery/upload']['POST'] = 'api/galleryapi/upload';
$route['api/gallery/(:num)']['DELETE'] = 'api/galleryapi/delete/$1';

// News
$route['api/news']['GET'] = 'api/newsapi/index';
$route['api/news/create']['POST'] = 'api/newsapi/create';
$route['api/news/update/(:num)']['POST'] = 'api/newsapi/update/$1';
$route['api/news/(:num)']['GET'] = 'api/newsapi/show/$1';
$route['api/news/(:num)']['DELETE'] = 'api/newsapi/delete/$1';

// Contact / Enquiries
$route['api/contact']['GET'] = 'api/contactapi/index';
$route['api/contact']['POST'] = 'api/contactapi/submit';
$route['api/contact/resolve/(:num)']['PUT'] = 'api/contactapi/resolve/$1';
$route['api/contact/(:num)']['DELETE'] = 'api/contactapi/delete/$1';

// Complaints
$route['api/complaint']['GET'] = 'api/complaintapi/index';
$route['api/complaint']['POST'] = 'api/complaintapi/submit';
$route['api/complaint/resolve/(:num)']['PUT'] = 'api/complaintapi/resolve/$1';
$route['api/complaint/(:num)']['DELETE'] = 'api/complaintapi/delete/$1';

