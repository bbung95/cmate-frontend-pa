import { HTMLAttributes, LabelHTMLAttributes } from 'react';

interface FieldProps {
	children: React.ReactNode;
}

const Field = ({ children }: FieldProps) => {
	return <div className="flex w-full flex-col gap-16">{children}</div>;
};

const Label = ({ children, ...props }: LabelHTMLAttributes<HTMLLabelElement> & FieldProps) => {
	return (
		<label className="text-gray-black text-h2" {...props}>
			{children}
		</label>
	);
};

const HelpMessage = ({ children }: FieldProps) => {
	return <p className="text-gray-2 text-b2">{children}</p>;
};

const ErrorMessage = ({ children }: FieldProps) => {
	return <p className="text-sub-red text-b2">{children}</p>;
};

Field.Label = Label;
Field.HelpMessage = HelpMessage;
Field.ErrorMessage = ErrorMessage;

export default Field;
