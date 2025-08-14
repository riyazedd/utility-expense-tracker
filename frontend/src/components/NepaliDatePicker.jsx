import React from 'react';
import { NepaliDatePicker } from "@kkeshavv18/nepali-datepicker";
import "@kkeshavv18/nepali-datepicker/dist/index.css";

const NepaliDatePickerComponent = ({ value, onChange }) => {
  return (
    <div className="w-full flex items-center gap-2">
      <label className="text-gray-700 font-medium">Select Date (BS):</label>
      <NepaliDatePicker
        initialDate={value}
        onDateChange={onChange}
        className="border border-gray-300 rounded px-3 py-2 w-full"
      />
    </div>
  );
};

export default NepaliDatePickerComponent;
