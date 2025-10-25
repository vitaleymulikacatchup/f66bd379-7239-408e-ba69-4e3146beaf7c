"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from "@/components/navbar/NavbarStyleMinimal";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import ProductCardOne from "@/components/sections/product/ProductCardOne";
import FeatureCardOne from "@/components/sections/feature/FeatureCardOne";
import TestimonialCardOne from "@/components/sections/testimonial/TestimonialCardOne";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";
import { Star, Bed, Crown, MessageSquare, Calendar } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://images.pexels.com/photos/33929921/pexels-photo-33929921.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          logoAlt="Grandview Hotel"
          brandName="Grandview Hotel"
          button={{
            text: "Book Now",
            href: "contact",
            props: {
              className: "text-white bg-primary-cta hover:bg-accent transition-colors"
            }
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Experience Luxury at Grandview Hotel"
          description="Discover unparalleled comfort and elegance in the heart of the city with our world-class accommodations and exceptional service."
          tag="Luxury Hospitality"
          tagIcon={Star}
          imageSrc="https://images.pexels.com/photos/1755288/pexels-photo-1755288.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Grandview Hotel elegant exterior"
          imagePosition="right"
          buttons={[
            {
              text: "Book Your Stay",
              href: "contact"
            },
            {
              text: "Explore Rooms",
              href: "rooms"
            }
          ]}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardOne
          title="Luxurious Accommodations"
          description="Choose from our carefully curated selection of rooms and suites, each designed for ultimate comfort and sophistication."
          tag="Premium Rooms"
          tagIcon={Bed}
          products={[
            {
              id: "deluxe",
              name: "Deluxe King Room",
              price: "$299/night",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Deluxe King Room with city view"
            },
            {
              id: "suite",
              name: "Executive Suite",
              price: "$549/night",
              imageSrc: "https://images.pexels.com/photos/14917460/pexels-photo-14917460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Executive Suite with living area"
            },
            {
              id: "presidential",
              name: "Presidential Suite",
              price: "$999/night",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Presidential Suite luxury accommodation"
            }
          ]}
          buttons={[
            {
              text: "View All Rooms",
              href: "https://grandviewhotel.com/rooms"
            }
          ]}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardOne
          title="World-Class Amenities"
          description="Indulge in our premium facilities designed to enhance your stay with comfort, wellness, and exceptional dining experiences."
          tag="Hotel Features"
          tagIcon={Crown}
          features={[
            {
              title: "Luxury Spa & Wellness",
              description: "Rejuvenate your body and mind with our full-service spa featuring massage therapy, facial treatments, and wellness programs.",
              imageSrc: "https://images.pexels.com/photos/6957079/pexels-photo-6957079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury spa treatment room"
            },
            {
              title: "Fine Dining Restaurant",
              description: "Experience culinary excellence at our award-winning restaurant featuring contemporary cuisine and an extensive wine collection.",
              imageSrc: "https://images.pexels.com/photos/2291636/pexels-photo-2291636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Fine dining restaurant elegant interior"
            },
            {
              title: "Rooftop Pool & Lounge",
              description: "Relax by our infinity pool with stunning city views, complete with poolside service and premium cabanas.",
              imageSrc: "https://images.pexels.com/photos/2403017/pexels-photo-2403017.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Rooftop pool with city view"
            },
            {
              title: "State-of-the-Art Fitness Center",
              description: "Maintain your fitness routine with our modern gym equipment, personal training services, and group fitness classes.",
              imageSrc: "https://images.pexels.com/photos/3902730/pexels-photo-3902730.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Modern hotel fitness center"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Read testimonials from our valued guests who have experienced the exceptional service and luxury that defines Grandview Hotel."
          tag="Guest Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Business Executive",
              company: "Fortune 500 Company",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Johnson portrait",
              text: "Grandview Hotel exceeded all expectations. The attention to detail and exceptional service made our corporate retreat truly memorable."
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Travel Blogger",
              company: "Luxury Travel Magazine",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Chen portrait",
              text: "As someone who reviews luxury hotels worldwide, Grandview Hotel stands out for its impeccable service and stunning accommodations."
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Wedding Planner",
              company: "Elite Events",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emma Rodriguez portrait",
              text: "The perfect venue for our most discerning clients. The elegant spaces and professional staff ensure every event is flawless."
            },
            {
              id: "4",
              name: "David Kim",
              role: "Corporate Director",
              company: "Tech Innovations",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3782181/pexels-photo-3782181.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Kim portrait",
              text: "Outstanding hospitality and world-class amenities. Grandview Hotel has become our go-to choice for executive stays."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Make Reservation"
          tagIcon={Calendar}
          title="Book Your Luxury Experience"
          description="Ready to experience the finest in hospitality? Contact us to make your reservation or inquire about our special packages and services."
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Grandview Hotel luxury lobby"
          mediaPosition="right"
          inputPlaceholder="Enter your email address"
          buttonText="Reserve Now"
          termsText="By submitting your information, you agree to receive updates about availability and special offers from Grandview Hotel."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Hotel",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Rooms & Suites",
                  href: "rooms"
                },
                {
                  label: "Amenities",
                  href: "amenities"
                },
                {
                  label: "Gallery",
                  href: "https://grandviewhotel.com/gallery"
                }
              ]
            },
            {
              title: "Services",
              items: [
                {
                  label: "Dining",
                  href: "https://grandviewhotel.com/dining"
                },
                {
                  label: "Spa & Wellness",
                  href: "https://grandviewhotel.com/spa"
                },
                {
                  label: "Events & Meetings",
                  href: "https://grandviewhotel.com/events"
                },
                {
                  label: "Concierge",
                  href: "https://grandviewhotel.com/concierge"
                }
              ]
            },
            {
              title: "Contact",
              items: [
                {
                  label: "Reservations",
                  href: "contact"
                },
                {
                  label: "Location",
                  href: "https://grandviewhotel.com/location"
                },
                {
                  label: "Phone: +1 (555) 123-4567",
                  href: "tel:+15551234567"
                },
                {
                  label: "Email Us",
                  href: "mailto:info@grandviewhotel.com"
                }
              ]
            }
          ]}
          logoSrc="https://images.pexels.com/photos/33929921/pexels-photo-33929921.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          copyrightText="© 2025 Grandview Hotel. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}