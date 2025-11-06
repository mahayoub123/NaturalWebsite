import { createSlice } from "@reduxjs/toolkit";
import e1 from "../../assets/images/explore1.png";
import e2 from "../../assets/images/explore2.png";
import e3 from "../../assets/images/explore3.png";
import e4 from "../../assets/images/explore4.png";
export interface Explore {
  id: number;
  title: string;
  desc: string;
  img: string;
}

const initialState: Explore[] = [
  {
    id: 1,
    title: "Lucca Bike Tour",
    img: e1,
    desc: "A tour of the city and its surroundings led by a professional guide ...",
  },
  {
    id: 2,
    title: "Wine tasting In Tuscany",
    img: e2,
    desc: "The real magic is here where you can enjoy the best Tuscan wine and eat ...",
  },
  {
    id: 3,
    title: "Cinque Terre Tour",
    img: e3,
    desc: "Visiting the 5 Terre is a must, and you can never go there enough ...",
  },
  {
    id: 4,
    title: "Siena and Surroundings",
    img: e4,
    desc: "Visit the beautiful Siena and the cities that surround it to experience ...",
  },
];

const exploreSlice = createSlice({
  name: "explore",
  initialState,
  reducers: {},
});

export default exploreSlice.reducer;
