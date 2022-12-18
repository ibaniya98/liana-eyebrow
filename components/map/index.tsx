import { Box } from "@chakra-ui/react";

const iframeSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.641804871581!2d-81.1242446240265!3d31.997724273998948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fb75944540c523%3A0x9aa0e3c79aa0f94!2sBest%20%231%20Liana%20Eyebrow%20Threading%20and%20Spa!5e0!3m2!1sen!2sus!4v1671343688062!5m2!1sen!2sus";

export default function Map() {
  return (
    <Box>
      <Box
        as="iframe"
        src={iframeSrc}
        height="500"
        w="100%"
        border="0"
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </Box>
  );
}
