import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-[110%] bg-[url('/img/background-3.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
               Experience Unmatched Comfort <br /> & Elegance.
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
               Escape to a world of elegance and comfort. At Golden Cedar Hotel, we blend luxury with nature, offering premium amenities, gourmet dining, and personalized service. Whether you're here to relax or explore, your unforgettable experience begins with us.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-white " />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Working with us is a pleasure
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                At <b> Golden Cedar Hotel,</b> we believe in delivering a seamless and enjoyable experience for every guest. From the moment you step in, our dedicated staff ensures that every detail is taken care of, allowing you to relax and enjoy your stay.


                <br />
                <br />
               Our hotel offers a variety of premium services and amenities, designed to make your visit unforgettable. Whether you're here for business or leisure, we provide everything you need for a comfortable and luxurious experience.
              </Typography>
              <Button variant="filled">read more</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/teamwork.png"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="small" color="blue-gray" className="font-normal">Enterprise</Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                  >
                    Top Notch Services
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    At <b> Golden Cedar Hotel,</b> we pride ourselves on providing exceptional services to ensure every guest's stay is truly memorable. From world-class dining to personalized guest experiences, our top-tier amenities are designed to exceed your expectations.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-20 pb-48">
  <div className="container mx-auto">
    <PageTitle section="Our Team" heading="Meet the Golden Cedar Team">
      At Golden Cedar Hotel, our team is committed to making your stay unforgettable. From our welcoming front desk to the dedicated housekeeping staff, each member plays a crucial role in ensuring top-notch service and comfort throughout your visit.
    </PageTitle>
    <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
      {teamData.map(({ img, name, position, socials }) => (
        <TeamCard
          key={name}
          img={img}
          name={name}
          position={position}
          socials={
            <div className="flex items-center gap-2">
              {socials.map(({ color, name }) => (
                <IconButton key={name} color={color} variant="text">
                  <i className={`fa-brands text-xl fa-${name}`} />
                </IconButton>
              ))}
            </div>
          }
        />
      ))}
    </div>
  </div>
</section>

     <section className="relative bg-white py-24 px-4">
  <div className="container mx-auto">
    <PageTitle section="Our Services" heading="Discover Luxury">
      At Golden Cedar Hotel, we offer exceptional amenities and services to ensure a memorable stay. Experience comfort, elegance, and personalized service.
    </PageTitle>
    <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
      {contactData.map(({ title, icon, description }) => (
        <Card
          key={title}
          color="transparent"
          shadow={false}
          className="text-center text-blue-gray-900"
        >
          <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
            {React.createElement(icon, {
              className: "w-5 h-5 text-white",
            })}
          </div>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography className="font-normal text-blue-gray-500">
            {description}
          </Typography>
        </Card>
      ))}
    </div>
    <PageTitle section="Contact Us" heading="Plan Your Stay">
      Have questions or want to make a booking? Fill out the form below, and our team will get in touch with you within 24 hours.
    </PageTitle>
    <form className="mx-auto w-full mt-12 lg:w-5/12">
      <div className="mb-8 flex gap-8">
        <Input variant="outlined" size="lg" label="Full Name" />
        <Input variant="outlined" size="lg" label="Email Address" />
      </div>
      <Textarea variant="outlined" size="lg" label="Message" rows={8} />
      <Checkbox
        label={
          <Typography
            variant="small"
            color="gray"
            className="flex items-center font-normal"
          >
            I agree to the
            <a
              href="#"
              className="font-medium transition-colors hover:text-gray-900"
            >
              &nbsp;Terms and Conditions
            </a>
          </Typography>
        }
        containerProps={{ className: "-ml-2.5" }}
      />
      <Button variant="gradient" size="lg" className="mt-8" fullWidth>
        Send Message
      </Button>
    </form>
  </div>
</section>

      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
