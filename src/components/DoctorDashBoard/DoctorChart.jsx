import styled from "styled-components";
import DateSelect from "../Input/DateSelect";
import BlockContainer from "../Common/BlockContainer.jsx";
import TitleText from "../Common/TitleText.jsx";
import InputTextContainer from "../Input/InputTextContainer.jsx";
import DropdownFilter from "../Dropdown/DropdownFilter.jsx";
import InputAreaContainer from "../Input/InputAreaContainer.jsx";
import Button from "../Button/Button.jsx";
import { registerChart } from "../../librarys/api/chart";
import { useState } from "react";

const Grid = styled.div`
  margin: 48px 70px;
  display: grid;
  grid-template-columns: 240px 240px;
  gap: 28px 100px;
`;

const InputArea = styled(InputAreaContainer)`
  grid-column-end: span 2;
`;

const Btn = styled(Button)`
  grid-column-end: span 2;
  justify-self: center;
`;

const DoctorChart = () => {

  const genderChoice = [
    { key: "남성", value: "남성" },
    { key: "여성", value: "여성" }
  ];

  const handlegenderChoice = (gender) => {
    console.log("Selected Gender: ", gender.key);
    setChartData({ ...chartData, gender: gender.key });
  };

  const [chartData, setChartData] = useState({
    cd: "",
    patientName: "",
    phone: "",
    sex: "",
    birth: "",
    //doctor_id: "",
    //therapist_id: "", 
    schedule: "",
    treatmentRecord: "",
    exerciseRequest: ""
  });

  const handleInputChange = (e) => {
    setChartData({ ...chartData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerChart(chartData);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  
  return (
    <BlockContainer>
      <TitleText text="환자 차트 작성" />
      <Grid>
        <InputTextContainer label="질병 분류 번호 *" />
        <DropdownFilter label="환자 성별 *" items={genderChoice} onSelect={handlegenderChoice} />
        <InputTextContainer label="환자 성함 *" />
        <DateSelect labelText="환자 생년월일 *" />
        <InputTextContainer label="환자 전화번호 *" />
        <DropdownFilter label="담당 치료사 *" items={[]} />
        <DateSelect labelText="다음 외래 일정 *" />
        <div />
        <InputArea label="진료 기록 작성 *" />
        <InputArea label="재활치료사 재활 운동 요청서 작성 *" />
        <Btn type="primary">차트 등록하기</Btn>
      </Grid>
    </BlockContainer>
  );
};

export default DoctorChart;
