import { FormControl, FormLabel, Input } from "@chakra-ui/react"

export default function FormControlElement({label, name, type='text', required, placeholder, value, handleChange}){
    return (
        <FormControl mt={6}>
            <FormLabel>
                {label} 
                {
                    required && <span style={{color:'crimson'}} aria-label="required">&nbsp;*</span>
                }
            </FormLabel>
            
            <Input 
                name={name}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={handleChange}
                required
            />
        </FormControl>
    )
}