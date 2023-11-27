import { makeStyles } from "@mui/styles";

const useNavTheme = makeStyles(function (theme) {
  console.log({ theme });
  return { header: { padding: "2px" } };
});
export default useNavTheme;
