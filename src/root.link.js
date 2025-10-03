export const RESUME_PATH =
  "https://mohiyuddinshaikh.github.io/my-resume/resume.pdf";
export const GITHUB_USERNAME = "mohiyuddinshaikh";
export const LINKEDIN_USERNAME = "mohiyuddinshaikh";
export const FIRST_NAME = "Mohiyuddin";
export const LAST_NAME = "Shaikh";
export const ADDRESS = "Mumbai";
export const EMAIL_ID = "mohiyuddin.shaikh46@gmail.com";
export const FRONT_PAGE_NAME = "Mohiyuddin Shaikh";
export const FRONT_PAGE_DESC = `I’m a Senior Frontend Engineer and Tech Lead with ${getYearsOfExperience()}+ years of experience, crafting scalable, interactive web apps with React, Next.js, and TypeScript. I love turning complex problems into intuitive experiences, writing clean code, and guiding teams to build products that delight users.`;

function getYearsOfExperience(startDate = "2019-11-01") {
  const careerStart = new Date(startDate);
  const today = new Date();

  const diffInMilliseconds = today - careerStart;
  const diffInYears = diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25); // approximate years including leap years

  return Math.ceil(diffInYears); // rounds up to nearest whole number
}
const x = getYearsOfExperience();
console.log("x", x);
