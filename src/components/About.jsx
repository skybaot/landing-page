import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { label: 'Years of Experience', value: '10+' },
  { label: 'Projects Completed', value: '200+' },
  { label: 'Satisfied Clients', value: '150+' },
  { label: 'Team Members', value: '20+' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="gradient-text">Our Company</span>
            </h2>
            <p className="text-gray-600 mb-6">
              We are a team of passionate professionals dedicated to delivering
              exceptional digital solutions. With years of experience in the
              industry, we understand what it takes to create successful digital
              products and marketing strategies.
            </p>
            <p className="text-gray-600 mb-8">
              Our mission is to help businesses thrive in the digital age by
              providing innovative solutions that drive real results. We combine
              creativity with technical expertise to deliver outstanding outcomes
              for our clients.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Stats */}
          <div
            ref={ref}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
