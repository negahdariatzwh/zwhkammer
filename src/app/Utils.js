
import { PAGES_INFO } from "./PAGES_INFO"
import DynamicService from "../service/DynamicService";
import { toast } from "react-toastify";
export function getPage(id) {
  //console.log("it is dddd", id);
  let foundPage = PAGES_INFO.find((item) => item._id === parseInt(id));
  //console.log("TargetPageParents", foundPage);
  return foundPage;
}

export function getPagebyRoute(route) {
  let foundPage = PAGES_INFO.find((item) => item.route === route);
  //console.log("TargetPageParents", foundPage);
  return foundPage;
}

export function getPagebyPathName(pathName) {
  let array2 = pathName.split('/');
  let rname = array2[1];
  let founde_page = "";
  PAGES_INFO.forEach(function (element) {
    let inArray = element.route.split('/');
    let sname = inArray[1];
    if (sname === rname) {
      founde_page = element;
    }
  }
  );
  //let foundPage = PAGES_INFO.find((item) => item.route === pathName);
  //console.log("TargetPageParents", foundPage);
  return founde_page;
}

export function getPageParents(id) {
  //console.log("it is id of page to get its parents", id);
  let target_page_to_get_patrents = getPage(id);

  let my_parent_objets = [];
  let target_page__patrents_id = target_page_to_get_patrents.parents;
  if (target_page__patrents_id.length) {
    target_page__patrents_id.forEach(element => {
      my_parent_objets.push(getPage(element))
    });
  }
  return my_parent_objets
}
export function getApiData(apiName, methodName) {
  let xresponse = [];
  DynamicService.list(apiName, methodName)
    .then((response) => {
      console.log(response);
      xresponse = response.success;
    })
    .catch((er) => {
      toast.error(er);
    });
  return xresponse;
}

