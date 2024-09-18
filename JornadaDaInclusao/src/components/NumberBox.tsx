import React from 'react';
export function NumberBox({ value }: { value: number }) {
  return (
    <div className="number-box">
      <span>{value}</span>
    </div>
  )
}

