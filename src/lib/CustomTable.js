import { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { filterRows, sortRows, paginateRows } from "./utils/Utils";
import { CustomTableHeader } from "./components/CustomTableHeader";
import { CustomTableBody } from "./components/CustomTableBody";
import { CustomTableFooter } from "./components/CustomTableFooter";

export const CustomTable = ({
  datas,
  tableTitle,
  columns,
  sortDefault,
  entriesArr,
  entriesDefaultLimit,
  customColors,
}) => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(datas);
  }, []);

  const [maxRows, setMaxRows] = useState(entriesDefaultLimit);
  const [searchWord, setSearchWord] = useState([]);
  const [sort, setSort] = useState({ order: "up", type: sortDefault });
  const [currentPage, setCurrentPage] = useState(1);

  const filteredRows = useMemo(
    () => filterRows(rows, searchWord),
    [rows, searchWord]
  );
  const sortedRows = useMemo(
    () => sortRows(filteredRows, sort),
    [filteredRows, sort]
  );
  const calculatedRows = paginateRows(sortedRows, currentPage, maxRows);
  const totalRows = filteredRows.length;
  const totalPages = Math.ceil(totalRows / maxRows);

  const handleSearch = (e) => {
    if (e.target.value.length === 0) {
      setSearchWord([]);
    } else {
      setSearchWord(e.target.value.toLowerCase().trim());
    }
    setCurrentPage(1);
  };

  const handleSortColumn = (column) => {
    setSort((sort) => ({
      order: sort.order === "up" && sort.type === column ? "down" : "up",
      type: column,
    }));
    setCurrentPage(1);
  };

  const handleFilter = (e) => {
    setMaxRows(parseInt(e.target.value));
    setCurrentPage(1);
  };

  return (
    <ContainerTable customColors={customColors}>
      <h1>{tableTitle}</h1>
      <CustomTableHeader
        onFilter={handleFilter}
        onSearch={handleSearch}
        entriesArr={entriesArr}
        entriesDefaultLimit={entriesDefaultLimit}
      />
      <Wrapper customColors={customColors}>
        <CustomTableBody
          customColors={customColors}
          columns={columns}
          onSort={handleSortColumn}
          sort={sort}
          calculatedRows={calculatedRows}
          searchWord={searchWord}
        />
      </Wrapper>
      <CustomTableFooter
        customColors={customColors}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        maxRows={maxRows}
        totalRows={totalRows}
        totalPages={totalPages}
      />
    </ContainerTable>
  );
};

const ContainerTable = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 2em;
  background-color: ${(props) => `${props.customColors.bg_1}`};
  font-size: 14px;
  font-family: Roboto, sans-serif;
  color: ${(props) => `${props.customColors.fontColor}`};
  h1 {
    margin-top: 40px;
    font-size: 2rem;
  }

  @media screen and (max-width: 1320px) {
    padding: 0;
    h1 {
      text-align: center;
    }
  }
`;

const Wrapper = styled.div`
  max-width: 100vw;
  overflow-x: scroll;
  scrollbar-color: ${(props) => `#f5f5f5 ${props.customColors.bg_1}`};
  ::-webkit-scrollbar {
    cursor: pointer;
  }

  @media screen and (max-width: 1320px) {
    max-width: unset;
    order: 1;
    background-color: #1d3354;
  }
`;

CustomTable.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.object).isRequired,
  tableTitle: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  sortDefault: PropTypes.string.isRequired,
  entriesArr: PropTypes.arrayOf(PropTypes.number).isRequired,
  entriesDefaultLimit: PropTypes.number.isRequired,
  customColors: PropTypes.object.isRequired,
};
