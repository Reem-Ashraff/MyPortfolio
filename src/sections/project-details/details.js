import React, { useState, useRef } from "react";
import "./details.css";
import { useParams } from "react-router-dom/cjs/react-router-dom";

const ProjectDetails = () => {
  const projects = [
    {
      id: "bonian-nabil",
      title: "Bonian Nabil",
      badge: "Corporate Website",

      description:
        "A responsive corporate website for a general contracting company, showcasing its services, projects, company information, and contact details.",

      projectType: "Corporate Website",

      liveDemo: "https://www.boniannabil.com",
      github: null,

      mainImage: "../../../assets/bonian/bonian-hero.jpeg",

      overview:
        "Bonian Nabil is a corporate website developed for a general contracting company to establish its online presence and showcase its services and completed projects. The website provides visitors with information about the company, its services, projects, and contact details through a modern and responsive interface.",

      features: [
        "Responsive corporate website",
        "Company information and services",
        "Projects showcase",
        "Project details pages",
        "Image galleries",
        "Contact information and location",
        "English/Arabic language support",
        "Responsive design for different screen sizes",
        "Modern dark-themed interface",
      ],

      techStack: [
        "React.js",
        "JavaScript",
        "Bootstrap",
        "HTML5",
        "CSS3",
      ],

      responsibilities: [
        "Developed the website using React.js and Bootstrap.",
        "Built reusable and responsive UI components.",
        "Implemented bilingual English/Arabic content and RTL/LTR support.",
        "Developed project showcase and project details sections.",
        "Implemented responsive layouts for desktop and mobile devices.",
        "Managed website deployment and ongoing maintenance.",
      ],

      screenshots: [
        {
          image: "../../../assets/bonian/bonian-hero.jpeg",
          title: "English Home Page",
        },
        {
          image: "../../../assets/bonian/bonian-hero2.png",
          title: "Arabic Home Page",
        },
        {
          image: "../../../assets/bonian/bonian-projects.png",
          title: "Projects Page",
        },
        {
          image: "../../../assets/bonian/bonian-details.png",
          title: "English Details Page",
        },
        {
          image: "../../../assets/bonian/bonian-details2.png",
          title: "Arabic Details Page",
        },
        {
          image: "../../../assets/bonian/bonian-services.png",
          title: "English Services Page",
        },
        {
          image: "../../../assets/bonian/bonian-services2.png",
          title: "Arabic Services Page",
        },
        {
          image: "../../../assets/bonian/bonian-about.png",
          title: "English About Page",
        },
        {
          image: "../../../assets/bonian/bonian-about2.png",
          title: "Arabic About Page",
        },
        {
          image: "../../../assets/bonian/bonian-contact.png",
          title: "English Contact Page",
        },
        {
          image: "../../../assets/bonian/bonian-contact2.png",
          title: "Arabic Contact Page",
        }
      ],
    },

    {
      id: "furniture-store",
      title: "Furniture Store",
      badge: "Full-Stack E-Commerce",

      description:
        "A full-stack e-commerce platform for furniture shopping with customer, admin, and driver dashboards, real-time order tracking, and role-based access control.",

      projectType: "Full-Stack Web Application",

      liveDemo: null,
      github: "https://github.com/Reem-Ashraff/react-furniture-store",

      mainImage: "../../../assets/furniture/furniture-hero.png",

      overview:
        "Furniture Store is a full-stack e-commerce platform designed to provide a complete online furniture shopping experience. The system supports multiple user roles, including customers, administrators, and drivers, with dedicated interfaces and permissions for each role. It includes product management, shopping cart functionality, order processing, real-time order tracking, and administrative dashboards.",

      features: [
        "User authentication and role-based access",
        "Customer, Admin, and Driver roles",
        "Product browsing, search, and filtering",
        "Shopping cart",
        "Wishlist",
        "Order management",
        "Real-time order tracking",
        "Notifications",
        "Admin dashboard",
        "Driver dashboard",
        "Product and category management",
        "RESTful API integration",
      ],

      techStack: [
        "React.js",
        "Redux",
        "Laravel",
        "MySQL",
        "REST APIs",
        "Axios",
        "Bootstrap",
      ],

      responsibilities: [
        "Developed the frontend using React.js and Redux.",
        "Built RESTful APIs and backend functionality using Laravel.",
        "Designed and implemented the MySQL database schema.",
        "Implemented authentication, authorization, and role-based access control.",
        "Developed product browsing, cart, wishlist, and order management features.",
        "Implemented real-time order tracking and notifications.",
        "Developed administrative and driver dashboards.",
        "Integrated frontend components with backend APIs.",
      ],

      screenshots: [
        {
          image: "../../../assets/furniture/furniture-hero.png",
          title: "Home Page",
        },
        {
          image: "../../../assets/furniture/furniture-products.jpeg",
          title: "Shop Page",
        },
        {
          image: "../../../assets/furniture/furniture-details.jpeg",
          title: "Admin Dashboard",
        },
        {
          image: "../../../assets/furniture/furniture-sales.jpeg",
          title: "Admin Dashboard",
        },
        {
          image: "../../../assets/furniture/furniture-favorites.jpeg",
          title: "Admin Dashboard",
        },
        {
          image: "../../../assets/furniture/furniture-cart.jpeg",
          title: "Admin Dashboard",
        },
        {
          image: "../../../assets/furniture/furniture-checkout.jpeg",
          title: "Admin Dashboard",
        },
        {
          image: "../../../assets/furniture/furniture-notifications.jpeg",
          title: "Admin Dashboard",
        },
        {
          image: "../../../assets/furniture/furniture-profile-dash.jpeg",
          title: "Admin Dashboard",
        },
        {
          image: "../../../assets/furniture/furniture-orders.jpeg",
          title: "Admin Dashboard",
        },
        {
          image: "../../../assets/furniture/furniture-order-shipped.jpeg",
          title: "Admin Dashboard",
        },
        {
          image: "../../../assets/furniture/furniture-order-prepared.jpeg",
          title: "Admin Dashboard",
        },
        {
          image: "../../../assets/furniture/furniture-account-details1.jpeg",
          title: "Admin Dashboard",
        },
        {
          image: "../../../assets/furniture/furniture-account-details2.jpeg",
          title: "Admin Dashboard",
        },
        {
          image: "../../../assets/furniture/furniture-login.jpeg",
          title: "Admin Dashboard",
        },
        {
          image: "../../../assets/furniture/furniture-dash-main.jpeg",
          title: "Order Tracking",
        },
        {
          image: "../../../assets/furniture/furniture-dash-products.jpeg",
          title: "Order Tracking",
        },
        {
          image: "../../../assets/furniture/furniture-dash-product-edit.jpeg",
          title: "Order Tracking",
        },
        {
          image: "../../../assets/furniture/furniture-dash-product-add.jpeg",
          title: "Order Tracking",
        },
        {
          image: "../../../assets/furniture/furniture-dash-categories.jpeg",
          title: "Order Tracking",
        },
        {
          image: "../../../assets/furniture/furniture-dash-category-edit.jpeg",
          title: "Order Tracking",
        },
        {
          image: "../../../assets/furniture/furniture-dash-category-add.jpeg",
          title: "Order Tracking",
        },
        {
          image: "../../../assets/furniture/furniture-dash-orders.jpeg",
          title: "Order Tracking",
        },
        {
          image: "../../../assets/furniture/furniture-dash-order-details.jpeg",
          title: "Order Tracking",
        },
        {
          image: "../../../assets/furniture/furniture-dash-user-add.jpeg",
          title: "Order Tracking",
        },
        {
          image: "../../../assets/furniture/furniture-dash-offers.jpeg",
          title: "Order Tracking",
        },
        {
          image: "../../../assets/furniture/furniture-dash-offer-edit.jpeg",
          title: "Order Tracking",
        },
        {
          image: "../../../assets/furniture/furniture-driver-home.jpeg",
          title: "Order Tracking",
        },
        {
          image: "../../../assets/furniture/furniture-driver-location.jpeg",
          title: "Order Tracking",
        },
      ],
    },

    {
      id: "bikes-rental",
      title: "Bikes Rental",
      badge: "Full-Stack Rental Platform",

      description:
        "A full-stack bike rental platform that allows users to browse available bikes, view rental options, and manage bike rentals through an interactive web interface.",

      projectType: "Full-Stack Web Application",

      liveDemo: null,
      github: "https://github.com/Reem-Ashraff/Bikes_Rental_website",

      mainImage: "../../../assets/bikes/bikes-hero.jpeg",

      overview:
        "Bikes Rental is a full-stack web application designed to manage bike rental services. The platform allows users to browse available bikes, explore bike details and rental options, while administrators can manage bikes, categories, users, locations, offers, and rental operations through a dedicated dashboard.",

      features: [
        "User authentication and authorization",
        "Bike browsing and categorization",
        "Bike details and rental options",
        "Rental management",
        "User management",
        "Bike and category management",
        "Location management",
        "Offers management",
        "Admin dashboard",
        "Rental management dashboard",
        "RESTful API integration",
      ],

      techStack: [
        "Angular",
        "Laravel",
        "PHP",
        "MySQL",
        "REST APIs",
      ],

      responsibilities: [
        "Developed the frontend using Angular.",
        "Built RESTful APIs and backend functionality using Laravel.",
        "Designed and implemented the MySQL database structure.",
        "Implemented authentication and authorization.",
        "Developed bike browsing, filtering, and rental functionality.",
        "Built administrative interfaces for managing bikes, users, categories, offers, and rentals.",
        "Integrated frontend components with backend APIs.",
      ],

      screenshots: [
        {
          image: "../../../assets/bikes/bikes-hero.jpeg",
          title: "Home Page",
        },
        {
          image: "../../../assets/bikes/bikes-bikes1.jpeg",
          title: "Bikes Listing",
        },
        {
          image: "../../../assets/bikes/bikes-bikes2.jpeg",
          title: "Bike Details",
        },
        {
          image: "../../../assets/bikes/bikes-details1.jpeg",
          title: "Login / Register",
        },
        {
          image: "../../../assets/bikes/bikes-details2.jpeg",
          title: "Admin Dashboard",
        },
        {
          image: "../../../assets/bikes/bikes-rent1.jpeg",
          title: "Rental Management",
        },
        {
          image: "../../../assets/bikes/bikes-rent2.jpeg",
          title: "Rental Management",
        },
        {
          image: "../../../assets/bikes/bikes-receipt.jpeg",
          title: "Rental Management",
        },
        {
          image: "../../../assets/bikes/bikes-login.jpeg",
          title: "Rental Management",
        },
        {
          image: "../../../assets/bikes/bikes-dash-main.jpeg",
          title: "Rental Management",
        },
        {
          image: "../../../assets/bikes/bikes-dash-categories.jpeg",
          title: "Rental Management",
        },
        {
          image: "../../../assets/bikes/bikes-dash-category-add.jpeg",
          title: "Rental Management",
        },
        {
          image: "../../../assets/bikes/bikes-dash-bikes.jpeg",
          title: "Rental Management",
        },
        {
          image: "../../../assets/bikes/bikes-dash-bike-add.jpeg",
          title: "Rental Management",
        },
        {
          image: "../../../assets/bikes/bikes-dash-locations.jpeg",
          title: "Rental Management",
        },
        {
          image: "../../../assets/bikes/bikes-dash-offers.jpeg",
          title: "Rental Management",
        },
        {
          image: "../../../assets/bikes/bikes-dash-rentals.jpeg",
          title: "Rental Management",
        }
      ],
    },

    {
      id: "green-store",
      title: "Green Store",
      badge: "Full-Stack E-Commerce",

      description:
        "A full-stack e-commerce platform for browsing and managing products, featuring a customer-facing storefront and an administrative dashboard.",

      projectType: "Full-Stack E-Commerce",

      liveDemo: "https://angular-green-store-npux.vercel.app/",
      github: "https://github.com/Reem-Ashraff/Green_Store_website",

      mainImage: "../../../assets/green/green_hero.png",

      overview:
        "Green Store is a full-stack e-commerce application that provides an online platform for browsing and managing products. The system includes a customer-facing storefront and an administrative dashboard for managing products, categories, and other store operations.",

      features: [
        "User authentication",
        "Product browsing",
        "Product categories",
        "Product filtering",
        "Admin dashboard",
        "Product management",
        "Category management",
        "CRUD operations",
        "Database integration",
        "RESTful API integration",
      ],

      techStack: [
        "Angular",
        "PHP",
        "MySQL",
        "REST APIs",
      ],

      responsibilities: [
        "Developed the frontend using Angular.",
        "Implemented backend functionality using PHP.",
        "Designed and managed the MySQL database.",
        "Developed product and category management features.",
        "Implemented CRUD operations for store data.",
        "Integrated the frontend with backend APIs.",
        "Built responsive interfaces for customers and administrators.",
      ],

      screenshots: [
        {
          image: "../../../assets/green/green_hero.png",
          title: "Home Page",
        },
        {
          image: "../../../assets/green/green-plants.png",
          title: "Products",
        },
        {
          image: "../../../assets/green/green-cart.png",
          title: "Product Details",
        },
        {
          image: "../../../assets/green/green-checkout.png",
          title: "Admin Dashboard",
        },
        {
          image: "../../../assets/green/green-login.png",
          title: "Admin Dashboard",
        },
        {
          image: "../../../assets/green/green-dash-main.png",
          title: "Admin Dashboard",
        },
        {
          image: "../../../assets/green/green-dash-categories.png",
          title: "Admin Dashboard",
        },
        {
          image: "../../../assets/green/green-dash-category-items.png",
          title: "Admin Dashboard",
        },
        {
          image: "../../../assets/green/green-dash-add-category.png",
          title: "Admin Dashboard",
        },
        {
          image: "../../../assets/green/green-dash-update-category.png",
          title: "Admin Dashboard",
        },
        {
          image: "../../../assets/green/green-dash-plants.png",
          title: "Admin Dashboard",
        },
        {
          image: "../../../assets/green/green-dash-add-plant.png",
          title: "Admin Dashboard",
        }
      ],
    }
  ];
  const params = useParams();
  const id = params.id
  const project = projects.find(item => item.id === id);
  const thumbnailContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollThumbnails = (direction) => {

    if (!thumbnailContainerRef.current) return;

    const scrollAmount = 10 * window.innerWidth / 100;

    thumbnailContainerRef.current.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth"
    });
  };

  return (
    <>
      <main className="content">
        <section className="details-section">

          <div className="d-flex flex-wrap align-items-center">

            <div className="col-12 col-lg-5 info">
              <div className="badge">{project.badge}</div>
              <h3>{project.title}</h3>
              <p className="description">{project.description}</p>
              <div>
                {project.liveDemo && (<a href={project.liveDemo} target="_blank" rel="noreferrer" className="live">Live Demo <i className="bi bi-box-arrow-up-right"></i></a>)}
                {project.github && (<a href={project.github} target="_blank" rel="noreferrer" className="code"><i className="bi bi-github"></i> View Code <i className="bi bi-arrow-right-short"></i></a>)}
              </div>
              <div className="d-flex align-items-center project-type">
                <i className="bi bi-patch-check"></i>
                <div>
                  <div>Project Type</div>
                  <p className="mb-0">{project.projectType}</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-7 screenshots-div">
              <div className="img-view">
                <img src={project.screenshots[activeIndex].image} className="w-100 h-auto" alt="img" />
              </div>
              <div className="gallery d-flex align-items-center">
                <i className="bi bi-chevron-left" onClick={() => scrollThumbnails("left")}></i>
                <div className="screenshots d-flex" ref={thumbnailContainerRef}>
                  {project.screenshots.map((image, index) => {
                    return (
                      <div key={index} className={`col-3 ${activeIndex === index ? "active" : ""}`} onClick={() => setActiveIndex(index)}>
                        <img src={image.image} className="w-100 h-auto" alt="img" />
                      </div>
                    )
                  })}
                </div>
                <i className="bi bi-chevron-right" onClick={() => scrollThumbnails("right")}></i>
              </div>
            </div>

          </div>

          <div className="d-flex justify-content-between flex-wrap overview-features-container">
            <div className="overview">
              <h4><i className="bi bi-layers"></i> Project Overview</h4>
              <p>{project.overview}</p>
            </div>

            <div className="features">
              <h4><i className="bi bi-star"></i> Key Features</h4>
              <ul>
                {project.features.map((feature, index) => {
                  return (
                    <li key={index}><i className="bi bi-check-circle"></i> {feature}</li>
                  )
                })}
              </ul>
            </div>
          </div>

          <div className="d-flex justify-content-between flex-wrap tech-responsibilities-container">
            <div className="tech">
              <h4><i className="bi bi-layers"></i> Tech Stack</h4>
              <div className="d-flex flex-wrap">
                {project.techStack.map((tech,index)=>{
                  return(
                  <div key={index}>{tech}</div>
                  )
                })}
              </div>
            </div>

            <div className="responsibilities">
              <h4><i className="bi bi-people"></i> My Responsibilities</h4>
              <ul>
                {project.responsibilities.map((responsibility, index) => {
                  return (
                    <li key={index}>{responsibility}</li>
                  )
                })}
              </ul>
            </div>
          </div>

        </section>
      </main >
    </>
  )
}
export default ProjectDetails;