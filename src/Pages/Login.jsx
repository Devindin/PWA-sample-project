import Image from "../assets/LoginImage3.jpg";
import LoginHeadings from "../Components/LoginHeadings";
import LoginSecondaryHeadding from "../Components/LoginSecondaryHeadding";
import InputField from "../Components/InputField";
import { Formik, Form } from "formik";
import PrimaryButton from "../Components/PrimaryButton";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";


function Login() {
  const navigate = useNavigate();

  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-purple-100 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 ">
      <motion.div
        className="grid lg:grid-cols-2 w-full max-w-6xl rounded-[32px] shadow-2xl overflow-hidden bg-white/40 dark:bg-gray-800/60 backdrop-blur-lg "
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left Image */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden lg:block relative"
        >
          <div className="hidden lg:block relative h-auto lg:h-[calc(100vh-4rem)] rounded-l-[32px] overflow-hidden">
            <img
              src={Image}
              alt="Login"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.div
          className="flex flex-col justify-between p-8 sm:p-10 lg:p-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex flex-col justify-center items-center flex-grow"
            variants={itemVariants}
          >
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={(values) => {
                console.log("Form submitted:", values);
                navigate("/dashboard");
              }}
            >
              {({ handleChange, values, errors, touched }) => (
                <Form className="flex flex-col w-full max-w-md space-y-4">
                  <motion.div variants={itemVariants}>
                    <LoginHeadings content="Welcome Back" />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <LoginSecondaryHeadding content="Sign in to your account" />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <InputField
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="example@email.com"
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

                  <motion.div variants={itemVariants} className="text-right">
                    <Link
                      to="/login-with-email-verification"
                      className="text-purple-700 dark:text-purple-400 text-sm font-medium hover:underline"
                    >
                      Forgot Password?
                    </Link>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <PrimaryButton label="Sign In" type="submit" />
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="flex justify-center text-sm font-medium"
                  >
                    <span>Don’t have an account? </span>
                    <Link
                      to="/register"
                      className="text-purple-700 dark:text-purple-400 ml-1 hover:underline"
                    >
                      Register
                    </Link>
                  </motion.div>
                </Form>
              )}
            </Formik>
          </motion.div>

          <motion.div
            className="flex justify-center mt-6"
            variants={itemVariants}
          >
            <Footer />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Login;
