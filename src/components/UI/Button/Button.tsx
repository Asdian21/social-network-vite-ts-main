import { SButton } from "./Button.style";

interface TButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    buttonText: string;
    isPrimary?: boolean;
}

export const Button = ({ buttonText, isPrimary, ...props }: TButton) => {
    return (
        <SButton isPrimary={isPrimary} {...props}> 
            {buttonText} 
        </SButton>
    );
};
