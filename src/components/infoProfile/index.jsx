import { FaRegComment } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { Flex, Typography } from "../../style";
import { randomNumber } from "../../utils/randomNumbers";
import * as C from "./style";

export function InfoProfile({name, photo, link}) {

  return (
    <Flex direction="row" align="center" justify="space-between">
      <C.Container>
        <C.Link href={link} target="_blank">
          <C.ProfileImage
            src={photo}
            alt="fotografia"
          />
          <Typography weight="300" size="13px" height="15px">
            {name}
          </Typography>
        </C.Link>
      </C.Container>

      <C.Container>
        <AiFillHeart color="red"/>
        <Typography weight="300" size="13px" height="15px">
          {randomNumber()}
        </Typography>

        <FaRegComment />
        <Typography weight="300" size="13px" height="15px">
        {randomNumber()}
        </Typography>
      </C.Container>
    </Flex>
  );
}
