import { setNews } from "../../redux/API/APIResponses";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { newsBBC } from "../../types/apiTypes";
import useAxios from "./useAxios";
// https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=3097816e6d6147548093cd8560eab410
type searchMode = "country" | "bbc";
const KEY = "3097816e6d6147548093cd8560eab410";
const availableCounties = [
  "ae",
  "ar",
  "at",
  "au",
  "be",
  "bg",
  "br",
  "ca",
  "ch",
  "cn",
  "co",
  "cu",
  "cz",
  "de",
  "eg",
  "fr",
  "gb",
  "gr",
  "hk",
  "hu",
  "id",
  "ie",
  "il",
  "in",
  "it",
  "jp",
  "kr",
  "lt",
  "lv",
  "ma",
  "mx",
  "my",
  "ng",
  "nl",
  "no",
  "nz",
  "ph",
  "pl",
  "pt",
  "ro",
  "rs",
  "ru",
  "sa",
  "se",
  "sg",
  "si",
  "sk",
  "th",
  "tr",
  "tw",
  "ua",
  "us",
  "ve",
  "za",
];
export default function useGetNews() {
  const { activeCity } = useAppSelector((state) => state.apiResoponse);
  const dispatch = useAppDispatch()
  const url = new URL("https://newsapi.org/v2/top-headlines");
  const searchMode: searchMode = availableCounties.includes(
    activeCity.country_code.toLocaleLowerCase()
  )
    ? "country"
    : "bbc";
  if (searchMode === "country") {
    url.searchParams.set("country", activeCity.country_code);
  } else if (searchMode === "bbc") {
    url.searchParams.set("sources", "bbc-news");
  }
  url.searchParams.set("apiKey", KEY);
  const { loading, response } = useAxios({
    method: "get",
    url: url.toString(),
  });
  dispatch(setNews(response as newsBBC))
  return loading;
}
