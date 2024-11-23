import React from "react";
import styled from "styled-components";

interface ToggleProps {
  isActive: boolean;
  onToggle: () => void;
}

const Toggle: React.FC<ToggleProps> = ({ isActive, onToggle }) => {
  return (
    <ToggleContainer onClick={onToggle}>
      <ToggleSwitch isActive={isActive}>
        <ToggleCircle isActive={isActive}>
          {isActive ? "ON" : "OFF"}
        </ToggleCircle>
      </ToggleSwitch>
    </ToggleContainer>
  );
};

export default Toggle;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1rem;
  color: #16324f; /* text color */
`;

const ToggleSwitch = styled.div<{ isActive: boolean }>`
  width: 50px;
  height: 22px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.main};
  display: flex;
  align-items: center;
  position: relative;
  padding: 1px 4px;
  transition: background-color 0.3s ease;
`;

const ToggleCircle = styled.div<{ isActive: boolean }>`
  position: absolute;
  left: ${({ isActive }) => (isActive ? "23px" : "-18px")};
  height: 22px;
  border-radius: 10px;
  background-color: ${({ isActive }) => (isActive ? "#a5d63f" : "#FFC7C2")};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
  transition: left 0.3s ease;
  padding: 2px 10px;
`;
