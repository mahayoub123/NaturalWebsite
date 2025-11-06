import { createSlice } from "@reduxjs/toolkit";
import card1 from "../../assets/images/c1.png";
import card2 from "../../assets/images/c2.jpg";
import card3 from "../../assets/images/c3.jpg";
import card4 from "../../assets/images/c4.png";
export interface Card {
  id: number;
  title: string;
  desc: string;
  img: string;
}

const initialState: Card[] = [
  {
    id: 1,
    title: "Bike and rickshaw rental",
    img: card1,
    desc: "Book your quality vehicle quickly for an hour or all day!",
  },
  {
    id: 2,
    title: "Guided tour of the countryside",
    img: card2,
    desc: "Live the real Lucchese experience by visiting the suburbs by bike!",
  },
  {
    id: 3,
    title: "Taxi and NCC service",
    img: card3,
    desc: "Do you need not only a bike but also a driver? Then you have found the right place!",
  },
  {
    id: 4,
    title: "Bus Package",
    img: card4,
    desc: "Do you need not only a bike but also a driver? Then you have found the right place!",
  },
];

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {},
});

export default cardSlice.reducer;
