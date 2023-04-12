import { useNavigation } from '@react-navigation/native';
import  {React, useEffect, useState} from 'react';
import { DataTable } from 'react-native-paper';
import { useRouter } from 'solito/router';



export const getOffset = (router) => {
  let offset = 0;
  if (router.asPath.indexOf("from=") !== -1) {
    offset = parseInt(router.query.from);
  }

  return offset;
};

const Pagination = ({info, navigation}) => {
  console.log("####", info.last_page)
  // =============== hooks ================
  const router = useRouter();

  // =============== state ================
  const [page, setPage] = useState(1);
 
  // =============== methods ==============
  const isSearchPagination = () => {
    return router.asPath.indexOf("searchBy") !== -1 ? true : false;
  };

  const searchPagination = (value) => {
    let prevRoute = router.asPath.split("?");
    router.push(
      prevRoute[0] +
        "?searchBy=" +
        router.query.searchBy +
        "&promoProduct=0" +
        "&from=" +
        value * 20
    );
  };

  const regularPagination = (value) => {
    let prevRoute = router.asPath.split("?");
    router.asPath.indexOf("filter") !== -1
      ? router.push(
          prevRoute[0] +
            "?from=" +
            value * 20 +
            "&filter=" +
            "&promoProduct=0" +
            "&occasion=" +
            router.query.occasion +
            "&color=" +
            router.query.color +
            "&fabric=" +
            router.query.fabric +
            "&order=" +
            router.query.order
        )
      : router.push(prevRoute[0] + "?from=" + value * 20 + "&promoProduct=0");
  };

  const handleChange = (event, value) => {
    setPage(value);
    const searchType = isSearchPagination();
    searchType ? searchPagination(value) : regularPagination(value);
  };

  // ================== side effect ==========
  // useEffect(() => {
  //   router.query.from > 20
  //     ? setPage(Number(router.query.from) / 20)
  //     : setPage(1);
  // }, [router.query]);
  return (
    <DataTable>
      <DataTable.Pagination
            page={page}
            numberOfPages={info.last_page}
            // onPageChange={page => setPage(page)}
            // label={`${from + 1}-${to} of ${items.length}`}

     
        onPageChange={page => setPage(page +1)}
        // label={`${from + 1}-${to} of ${items.length}`}
      />
    </DataTable>
  );
};

export default Pagination;