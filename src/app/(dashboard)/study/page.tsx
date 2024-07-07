import { CourseGird } from "@/components/common"
import CourseItem from "@/components/course/CourseItem"
import Heading from "@/components/typography/Heading"

const page = () => {
  return (
    <>
    <Heading>
      Khu vực học tập
    </Heading>
    <CourseGird>
      <CourseItem></CourseItem>
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
      </CourseGird>
    </>
  )
}

export default page
