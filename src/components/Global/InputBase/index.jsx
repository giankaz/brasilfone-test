import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { StyledDiv } from "./styles";

export default function InputBase({label}) {
	return (
		<StyledDiv>
			<label htmlFor="pass">{label}</label>
			<Box sx={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
				<FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
					<OutlinedInput
						id="outlined-adornment-password"
						sx={{ height: "40px"}}
					/>
				</FormControl>
			</Box>
		</StyledDiv>
	);
}
