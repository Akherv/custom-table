# Custom-table

A custom table react component (student project not maintened).

## Tech Stack

React / styled-component/ Prop-types

## Features

- Filtering entries
- Sorting datas by columns type
- Searching
- Pagination

## Package installation

To install the NPM package on your project, run the following command:`npm install @smerinthee/custom-table`

## Settings

```
  //fetch the datas needed into datas variable
  const datas = [{}]

  //Define the table h1
  const tableTitle = "All Employees";

  //Define the columns title & type
  const columns = [
    { title: "Firstname", type: "firstname" },
    { title: "Lastname", type: "lastname" },
    { title: "Start Date", type: "startdate" },
    { title: "Department", type: "department" },
    { title: "Birth Date", type: "birthdate" },
    { title: "Street", type: "street" },
    { title: "City", type: "city" },
    { title: "State", type: "state" },
    { title: "Zip Code", type: "zipcode" },
  ];

  //Define the column type for default sorting
  const sortDefault = "lastname";

  //Define the selection of option for entries
  const entriesArr = [10, 25, 50, 100];

  //Define the entries limitation by default
  const entriesDefaultLimit = 10;

  //Define colors
  const customColors = {
    bg_1: "#c9d8c5",
    bg_2: "#1d3354",
    bg_3: "whitesmoke",
    bg_4: "rgba(255,255,255,0.5)",
    fontColor: "#1d3354",
    fontColorLabel: "#fff",
  };
```

## Demo Github project - Storybook preview

Clone the project

```bash
  git clone https://github.com/Akherv/custom-table
```

Go to the project directory

```bash
  cd custom-table
```

Install dependencies

```bash
  npm install
```

Build a storybook preview

```bash
  npm run build-storybook
```

Start the server

```bash
  npm run storybook
```

Your server should now be running at http://localhost:6006
