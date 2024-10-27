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
  height: 24px;
  border-radius: 12px;
  background-color: ${({ isActive }) => (isActive ? "#16324f" : "#e4e7ec")};
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 4px;
  transition: background-color 0.3s ease;
`;

const ToggleCircle = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 2px;
  left: ${({ isActive }) => (isActive ? "26px" : "2px")};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? "#a5d63f" : "#f29d9d")};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
  transition: left 0.3s ease;
`;
