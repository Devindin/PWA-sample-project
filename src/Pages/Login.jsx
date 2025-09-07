import Image from "../assets/LoginImage.jpg";
import LoginHeadings from "../Components/LoginHeadings";
import LoginSecondaryHeadding from "../Components/LoginSecondaryHeadding";
import InputField from "../Components/InputField";
import { Formik, Form } from "formik";
import PrimaryButton from "../Components/PrimaryButton";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import { motion } from "framer-motion"; // 👈 Import Framer Motion

function Login() {
  const navigate = useNavigate();

  // Motion variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="grid lg:grid-cols-2 p-8 sm:p-10 lg:p-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Left Image */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative w-full lg:min-h-[85vh] sm:h-[267px] h-[144px] min-[200px]:max-[320px]:h-[180px] min-[321px]:max-[376px]:h-[160px]">
          <img
            src={Image}
            alt="Login"
            className="w-full h-full object-cover rounded-[24px]"
          />
        </div>
      </motion.div>

      {/* Right Form */}
      <motion.div
        className="flex flex-col justify-between"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex flex-col justify-center items-center flex-grow"
          variants={itemVariants}
        >
          <Formik
            initialValues={{ email: "", password: "", role: "admin" }}
            onSubmit={(values) => {
              console.log("Form submitted:", values);
              navigate("/dashboard");
            }}
          >
            {({ handleChange, values, errors, touched }) => (
              <Form className="flex flex-col pt-[15px] w-4/5">
                {/* Headings */}
                <motion.div variants={itemVariants}>
                  <LoginHeadings content="Welcome Back" />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <LoginSecondaryHeadding content="It's a fresh start—sign in to take control of your day" />
                </motion.div>

                {/* Inputs */}
                <motion.div variants={itemVariants}>
                  <InputField
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Example@email.com"
                    handleChange={handleChange}
                    values={values}
                    errors={errors}
                    touched={touched}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <InputField
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    handleChange={handleChange}
                    values={values}
                    errors={errors}
                    touched={touched}
                  />
                </motion.div>

                {/* Forgot password */}
                <motion.div variants={itemVariants}>
                  <Link
                    to="/login-with-email-verification"
                    className="text-link_text text-[14px] sm:text-[16px] 3xl:text-[22px] text-right font-roboto mb-2"
                  >
                    Forgot Password?
                  </Link>
                </motion.div>

                {/* Button */}
                <motion.div variants={itemVariants}>
                  <PrimaryButton label="Sign In" type="submit" />
                </motion.div>

                {/* Register Link */}
                <motion.div
                  variants={itemVariants}
                  className="flex items-center justify-center mt-[10px] sm:mt-[15px] lg:mt-[8px] pb-[8px] sm:pb-[16px] lg:pb-[20px] font-inter text-[13px] sm:text-[17px] 3xl:text-[22px]"
                >
                  <h1>
                    Don’t have an account?{" "}
                    <span className="text-link_text cursor-pointer">
                      <Link to="/register">Register</Link>
                    </span>
                  </h1>
                </motion.div>
              </Form>
            )}
          </Formik>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="flex justify-center mt-auto"
          variants={itemVariants}
        >
          <Footer />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Login;
