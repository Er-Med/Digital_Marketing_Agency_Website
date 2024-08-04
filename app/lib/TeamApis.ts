import axiosClient from "./axiosClient";

const getTeamMembers = () => axiosClient.get('/team-members?populate=*');

export default {
    getTeamMembers
}
