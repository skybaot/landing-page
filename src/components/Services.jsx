import { motion } from 'framer-motion';
import {
  CodeBracketIcon,
  PresentationChartLineIcon,
  DevicePhoneMobileIcon,
  ChatBubbleBottomCenterTextIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications built with the latest technologies.',
    icon: CodeBracketIcon,
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic marketing campaigns to grow your online presence.',
    icon: PresentationChartLineIcon,
  },
  {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: DevicePhoneMobileIcon,
  },
  {
    title: 'Consulting',
    description: 'Expert advice to help you make informed business decisions.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
];

const Services = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="services" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our <span className="gradient-text">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            We offer a comprehensive range of services to help your business thrive
            in the digital age.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="card hover:translate-y-[-8px]"
            >
              <service.icon className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
