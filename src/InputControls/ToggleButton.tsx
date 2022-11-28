import { DialogButton, DialogButtonProps } from "decky-frontend-lib"
import { CSSProperties } from "react"
import { Card } from "../FlatpakManager/FlatpakCard.css"


export interface ToggleButtonProps extends DialogButtonProps {
  value?: boolean
  toggledCSS?: CSSProperties
  untoggledCSS?: CSSProperties
}

export const ToggleButton: React.FC<DialogButtonProps & ToggleButtonProps> = ({
  ...props
}) => {
  if (props.toggledCSS == undefined) props.toggledCSS = Card.mask
  if (props.untoggledCSS == undefined) props.untoggledCSS = Card.mask
  return (
    <DialogButton
      {...props}
      onOKButton={e => {
        props.value = !props.value
        props.onOKButton?.(e)
      }}
      style={ props.value ? props.toggledCSS : props.untoggledCSS }
      >
      {props.children}
    </DialogButton>
  )
}

export default ToggleButton