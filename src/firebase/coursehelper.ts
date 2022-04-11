import { db } from "./config";

import { collection,getDoc,getDocs,addDoc,updateDoc,deleteDoc,doc} from "firebase/firestore";

export interface ICourse{
    name:string;
    price:number;
    status:string;
    datestart:string;
    dateend:string;
}

const courseStr = "ticketpack";
const courseCollectionRef = collection(db, courseStr);

export interface ICourseDoc extends ICourse {
    id: string;
  }

class CourseHelperClass{
    getCourses = async () => {
        const { docs } = await getDocs(courseCollectionRef);
        return docs.map((doc) => {
            return { ...doc.data(), id: doc.id } as ICourseDoc;
          });
    }

    addCourse = async (course: ICourse) => {
        return addDoc(courseCollectionRef, course);
      };
}

export default new CourseHelperClass();