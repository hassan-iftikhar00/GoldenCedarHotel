import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  return (
    <footer className="relative px-4 pt-8 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <Typography variant="h4" className="mb-4" color="blue-gray">
              {title}
            </Typography>
            <Typography className="font-normal text-blue-gray-500 lg:w-2/5">
              {description}
            </Typography>
            <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
              {socials.map(({ color, name }) => (
                <IconButton key={name} color="white" className="rounded-full shadow-none bg-transparent">
                  <Typography color={color}>
                    <i className={`fa-brands fa-${name}`} />
                  </Typography>
                </IconButton>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-12 grid w-max grid-cols-2 gap-24 lg:mt-0">
            {menus.map(({ name, items }) => (
              <div key={name}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 block font-medium uppercase"
                >
                  {name}
                </Typography>
                <ul className="mt-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Typography
                        variant="small"
                        className="mb-2 block font-normal text-blue-gray-500"
                      >
                        {item.name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "Golden Cedar Hotel",
  description:
    "Experience luxury and comfort at our hotel, where every stay is special.",
  socials: [
    {
      color: "gray",
      name: "facebook",
    },
    {
      color: "gray",
      name: "instagram",
    },
    {
      color: "gray",
      name: "twitter",
    },
    {
      color: "gray",
      name: "tripadvisor",
    },
  ],
  menus: [
    {
      name: "Quick Links",
      items: [
        { name: "About Us" },
        { name: "Rooms" },
        { name: "Services" },
        { name: "Contact Us" },
      ],
    },
    {
      name: "Guest Services",
      items: [
        { name: "FAQs" },
        { name: "Policies" },
        { name: "Privacy Policy" },
        { name: "Terms of Service" },
      ],
    },
  ],
  copyright: (
    <>
      Copyright © {year} Golden Cedar Hotel. All rights reserved.
    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
