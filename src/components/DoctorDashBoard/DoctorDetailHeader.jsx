import styled from "styled-components";
import { useEffect, useState } from "react";
import { userLogin } from "../../librarys/login-api"; 

const Container = styled.div`
  width: 800px;
  height: 60px;
  border-radius: 10px;
  border: 1px solid #0064ff;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
`;

const UserName = styled.span`
  font-size: 25px;
  color: #000000;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-weight: 500;
  margin-left: -10px;
`;

const Gender = styled.span`
  font-size: 16px;
  color: #908B8B;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-weight: 300;
  margin-left: -450px;
`;

const Birth = styled.span`
  font-size: 16px;
  color: #908B8B;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-weight: 300;
  margin-left: 10px;
`;

const DoctorDetailHeader = () => {
  const [patientInfo, setPatientInfo] = useState({});

  useEffect(() => {
    async function fetchPatientInfo() {
      const doctorInfo = await userLogin("doctor", "123456");
      const patient = doctorInfo?.patient;

      if (patient) {
        setPatientInfo({
          name: patient.name,
          gender: patient.gender,
          birth: patient.birth
        });
      }
    }

    fetchPatientInfo();
  }, []);

  return (
    <Container>
      <UserName>{patientInfo.name}</UserName>
      <Gender>{patientInfo.gender}</Gender>
      <Birth>{patientInfo.birth}</Birth>
    </Container>
  );
};

export default DoctorDetailHeader;
