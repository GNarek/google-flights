import { PropsWithChildren } from "react";
import { ContainerStyled } from "./Container.styles";

export const Container: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <ContainerStyled>
      <div className="content">{children}</div>
    </ContainerStyled>
  );
};
