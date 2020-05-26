import { IJobList } from "../models";

export const JobListData: IJobList[] = [];

for (let count = 1; count < 10; count++) {
    JobListData.push({
        id: count,
        title: `Title ${count}`,
        companyName: `Company Name ${count}`,
        companyLogo: "https://pngimage.net/wp-content/uploads/2018/06/logo-placeholder-png.png",
        location: "Location City, Country",
        shortDesc: "This is short description",
    });
}