import { useEffect, useState } from "react";

export function UseSelect() {
  const [selectionData, setSelectionData] = useState<any>({})

  const getSelection = () => {
    const selection = document.getSelection()
    const parent = selection?.getRangeAt(0)
    if(selection?.type === 'Range' && parent) {
      const { x, width, y } = parent.getBoundingClientRect()

      setSelectionData({x, y, width})
    } else {
      setSelectionData({})
    }
  }

  useEffect(() => {
    document.addEventListener('mouseup', getSelection)

    return () => {
      document.removeEventListener('mouseup', getSelection)
    }
  });

  return selectionData;
}
