import { CourseGird } from "@/components/common";
import CourseItem from "@/components/course/CourseItem";
import Heading from "@/components/typography/Heading";
import createUser from "@/lib/actions/user.actions";

const Page = async () => {
  const user = await createUser({
    clerkId: "123sasd",
    email_address: "tung@gmail.com",
    username: "van tung",
  });
  return (
    <div>
      <Heading>Khám phá</Heading>
      <CourseGird>
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
      </CourseGird>
    </div>
  );
};

export default Page;
