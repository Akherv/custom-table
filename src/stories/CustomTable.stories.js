import React from "react";
import styled from "styled-components";
import { CustomTable } from "../lib/CustomTable";

export default {
  title: "Custom-table - React Table Component with customization",
  component: CustomTable,
  argTypes: {
    datas: { control: "-" },
    columns: { control: "-" },
  },
};

const Template = (args) => (
  <AllEmployeeContainer>
    <CustomTable {...args} />
  </AllEmployeeContainer>
);

export const Default = Template.bind({});
Default.args = {
  tableTitle: "All Employees",
  datas: [
    {
      id: 1,
      firstname: "Marlena",
      lastname: "Burris",
      startdate: "17/12/2006",
      department: "Sales",
      birthdate: "08/06/1977",
      street: "04469 Ludington Point",
      city: "Harrisburg",
      state: "Pennsylvania",
      zipcode: "17126",
    },
    {
      id: 2,
      firstname: "Andre",
      lastname: "Sansam",
      startdate: "08/01/2007",
      department: "Product Management",
      birthdate: "08/02/1948",
      street: "4344 Calypso Crossing",
      city: "Philadelphia",
      state: "Pennsylvania",
      zipcode: "19125",
    },
    {
      id: 3,
      firstname: "Christiane",
      lastname: "Kingsmill",
      startdate: "04/12/2014",
      department: "Research and Development",
      birthdate: "14/01/1944",
      street: "608 Fulton Drive",
      city: "Macon",
      state: "Georgia",
      zipcode: "31210",
    },
    {
      id: 4,
      firstname: "Keefe",
      lastname: "Albers",
      startdate: "15/12/2009",
      department: "Marketing",
      birthdate: "04/03/1941",
      street: "53576 Sutherland Alley",
      city: "Portland",
      state: "Maine",
      zipcode: "04109",
    },
    {
      id: 5,
      firstname: "Lorry",
      lastname: "MacCard",
      startdate: "17/03/2002",
      department: "Business Development",
      birthdate: "20/09/1945",
      street: "39 Killdeer Crossing",
      city: "Irvine",
      state: "California",
      zipcode: "92619",
    },
    {
      id: 6,
      firstname: "Fernande",
      lastname: "Goodswen",
      startdate: "23/04/2021",
      department: "Marketing",
      birthdate: "07/08/1957",
      street: "547 Birchwood Place",
      city: "Young America",
      state: "Minnesota",
      zipcode: "55551",
    },
    {
      id: 7,
      firstname: "Byrom",
      lastname: "Lob",
      startdate: "15/09/2013",
      department: "Engineering",
      birthdate: "18/02/1997",
      street: "12 Birchwood Park",
      city: "Gilbert",
      state: "Arizona",
      zipcode: "85297",
    },
    {
      id: 8,
      firstname: "Lothario",
      lastname: "Colnet",
      startdate: "05/02/2004",
      department: "Research and Development",
      birthdate: "27/03/1985",
      street: "4973 Boyd Crossing",
      city: "Reno",
      state: "Nevada",
      zipcode: "89510",
    },
    {
      id: 9,
      firstname: "Sherm",
      lastname: "Roumier",
      startdate: "23/09/2008",
      department: "Support",
      birthdate: "20/12/2001",
      street: "13810 Melody Lane",
      city: "Irvine",
      state: "California",
      zipcode: "92619",
    },
    {
      id: 10,
      firstname: "Letty",
      lastname: "Danskine",
      startdate: "20/06/2002",
      department: "Training",
      birthdate: "10/10/1966",
      street: "9 Becker Plaza",
      city: "Round Rock",
      state: "Texas",
      zipcode: "78682",
    },
  ],
  columns: [
    { title: "Firstname", type: "firstname" },
    { title: "Lastname", type: "lastname" },
    { title: "Start Date", type: "startdate" },
    { title: "Department", type: "department" },
    { title: "Birth Date", type: "birthdate" },
    { title: "Street", type: "street" },
    { title: "City", type: "city" },
    { title: "State", type: "state" },
    { title: "Zip Code", type: "zipcode" },
  ],
  sortDefault: "lastname",
  entriesArr: [2, 5, 10],
  entriesDefaultLimit: 5,
  customColors: {
    bg_1: "#c9d8c5",
    bg_2: "#1d3354",
    bg_3: "whitesmoke",
    bg_4: "rgba(255,255,255,0.5)",
    fontColor: "#1d3354",
    fontColorLabel: "#fff",
  },
};

const AllEmployeeContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #c9d8c5;

  @media screen and (max-width: 1320px) {
    width: 100vw;
  }
`;
