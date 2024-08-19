import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import StaffEditYes from "../../components/Qna/Staff/StaffEdit/StaffEditYes";
import StaffNot from "../../components/Qna/Staff/StaffNot";

const DetailContainer = styled.div`
    width: 60%;
    margin-top: 3rem;
    
    @media screen and (max-width: 430px) {
        width: 92%;
        margin-top: 2.441rem;
    }
`

const QnaP = styled.p`
    font-size: 3.6rem;
    font-weight: 500;
    line-height: 4.296rem;
    color: ${colors.white};

    @media screen and (max-width: 430px) {
        font-size: 2.8rem;
        line-height: 3.341rem;
    }
`;


const StaffEdit = () => {
    const isLogin = localStorage.getItem("isLogin") === "true";

    return (
        <div className="pageContainer" style={{display: "flex", justifyContent: "center"}}>
            <DetailContainer>
                <QnaP>Q&A</QnaP>
                
                {isLogin ? <StaffEditYes /> : <StaffNot />}
            </DetailContainer>
        </div>
    )
}

export default StaffEdit;