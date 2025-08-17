import Image from "../assets/LoginImage.jpg";
import LoginHeadings from "../Components/LoginHeadings";
import LoginSecondaryHeadding from "../Components/LoginSecondaryHeadding";
import InputField from "../Components/InputField";
import { Formik, Form, Field } from "formik";
import PrimaryButton from "../Components/PrimaryButton";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="grid lg:grid-cols-2 p-8 sm:p-10 lg:p-12 ">
      <div >
         <div className="relative w-full lg:min-h-[85vh]  sm:h-[267px] h-[144px]  min-[200px]:max-[320px]:h-[180px] min-[321px]:max-[376px]:h-[160px] ">
          <img
            src={Image}
            alt="Login"
            className="w-full h-full object-cover rounded-[24px] "
          />

          <div className="absolute lg:bottom-8 bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6 backdrop-blur-md bg-white/20 shadow-lg rounded-[8px] p-4  text-start w-4/5 h-6/7">
            <h1 className="text-white_text 3xl:text-[30px] sm:text-[21px] text-[13px] font-semibold font-inter leading-[1.2]  pb-[6px] sm:pb-[11px]">
              Streamline Your HR Operations
            </h1>
            <p className=" 3xl:text-[20px]  md:text-[13.5px] sm:text-[12px] text-[9px] font-inter text-white_text ">
              Manage your workforce efficiently with our comprehensive HR
              management platform. From employee onboarding to performance
              tracking, we've got you covered.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <div className="flex flex-col justify-center items-center flex-grow  ">
          <Formik
            initialValues={{ email: "", password: "", role: "admin" }}
            onSubmit={(values) => {
              console.log("Form submitted:", values);
              navigate("/admin_dashboard");
            }}
          >
            {({ handleChange, values, errors, touched }) => (
              <Form className="flex flex-col pt-[15px]  w-4/5  ">
                <div className="pb-[1px] sm:pb-[2px] mt-[17px] ">  
                  <LoginHeadings content="Welcome Back" /> 
                </div>
                <LoginSecondaryHeadding content="It's a fresh start—sign in to take control of your day" />

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

                <div className="flex items-center gap-16 justify-center mt-[12px] mb-[15px]">
                  <label className="flex items-center gap-2 sm:text-[16px] text-[14px]  3xl:text-[25px] font-roboto">
                    <Field
                      type="radio"
                      name="role"
                      value="admin"
                      className="w-4 h-4 accent-radio_button_accent text-primary border-gray-300 focus:ring-2 focus:ring-primary"
                    />
                    Admin
                  </label>
                  <label className="flex items-center gap-2  3xl:text-[25px] sm:text-[16px] text-[14px] font-roboto">
                    <Field
                      type="radio"
                      name="role"
                      value="employee"
                      className="w-4 h-4 accent-radio_button_accent text-primary border-gray-300 focus:ring-2 focus:ring-primary"
                    />
                    Employee
                  </label>
                </div>

                <Link
                  to="/login-with-email-verification"
                  className="text-link_text  3xl:text-[22px] sm:text-[16px] text-[14px] text-right  font-roboto mb-2"
                >
                  Forgot Password?
                </Link>

                <PrimaryButton label="Sign In" type="submit" />

                <div className="flex items-center justify-center lg:mt-[8px] sm:mt-[15px] mt-[10px] font-normal font-inter  3xl:text-[22px] sm:text-[17px] text-[13px] pb-[8px] sm:pb-[16px] lg:pb-[20px] ">
                  <h1>
                    Don't you have an account ?{" "}
                    <span className="text-link_text  cursor-pointer">
                      <Link to="/register">Register</Link>
                    </span>
                  </h1>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className="flex justify-center mt-auto">
   
        </div>
      </div>
    </div>
  );
}

export default Login;
