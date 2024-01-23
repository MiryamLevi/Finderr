import { storageService } from "./async-storage.service.js";
import { utilService } from "./util.service.js";

export const gigService = {
  query,
  save,
  remove,
  getById,
  createGig,
  getDefaultFilter,
  getFilterFromParams,
};

const STORAGE_KEY = "gigs";

_createGigs();

async function query(filterBy) {
  let gigs = await storageService.query(STORAGE_KEY);
  if (filterBy) {
    let { minBatteryStatus, model = "", type = "" } = filterBy;
    minBatteryStatus = minBatteryStatus || 0;
    const regexModelTerm = new RegExp(model, "i");
    gigs = gigs.filter(
      (gig) =>
        regexModelTerm.test(gig.model) &&
        gig.batteryStatus > minBatteryStatus &&
        (!type || type === gig.type)
    );
  }
  return gigs;
}

function getById(id) {
  return storageService.get(STORAGE_KEY, id);
}

function remove(id) {
  return storageService.remove(STORAGE_KEY, id);
}

function save(gigToSave) {
  if (gigToSave.id) {
    return storageService.put(STORAGE_KEY, gigToSave);
  } else {
    gigToSave.isOn = false;
    return storageService.post(STORAGE_KEY, gigToSave);
  }
}

function createGig(model = "", type = "", batteryStatus = 100) {
  return {
    model,
    batteryStatus,
    type,
  };
}

function getDefaultFilter() {
  return {
    type: "",
    minBatteryStatus: 0,
    maxBattery: "",
    model: "",
  };
}

function getFilterFromParams(searchParams) {
  const defaultFilter = getDefaultFilter();
  const filterBy = {};
  for (const field in defaultFilter) {
    filterBy[field] = searchParams.get(field) || defaultFilter[field];
  }
  return filterBy;
}

function _createGigs() {
  let gigs = utilService.loadFromStorage(STORAGE_KEY);
  if (!gigs || !gigs.length) {
    gigs = [
      {
        id: "g1",
        imgUrl:
          "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/302908371/original/9dc1791adb656f69c3ef2f11fe975454db1e4786/do-modern-minimalist-clean-timeless-business-logo-design-32bb.png",
        owner: {
          imgUrl:
            "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/204f5bd567a26b79d06197574acb9ec1-1672401879022/1633fd71-d3dd-43b1-b8ea-1188ebc559d7.png",
          fullName: "Rudy",
        },
        title: "I will draw a hyper-realistic portrait of face or entire body and animals",
      },
      {
        id: "g2",
        imgUrl:
          "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/101530093/original/72025a97811a86beb68ac770b0d968ba21fc75d7/draw-a-vector-map-in-illustrator.png",
        owner: {
          imgUrl:
            "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/31a9cb16c7ab6db699a3d3c2e86a935c-1657141275990/cb99c000-6349-4e1b-90cf-e99c8d92bf18.png",
          fullName: "Robin",
        },
        title: "I will do timeless logo design with copyrights",
      },

    ];
    utilService.saveToStorage(STORAGE_KEY, gigs);
  }
}
