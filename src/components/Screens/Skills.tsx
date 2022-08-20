import { ContainerColumnAllScreen, HeaderSkill, SkillItens,Line } from "..";

export default function Skills() {
    return (
    <ContainerColumnAllScreen
      height={"auto"}
      width={"100%"}
    >
      <HeaderSkill/>
      <SkillItens/>
      <Line/>
    </ContainerColumnAllScreen>
  );
}