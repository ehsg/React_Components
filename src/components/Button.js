import className from "classnames";

function Button({ children, 
                  primary, 
                  secondary, 
                  success, 
                  warning, 
                  danger, 
                  outline, 
                  rounded,
                  ...rest
                }) {
    const classes = className(rest.className, 'flex items-center px-3 py-1.5 border', {
                        'border-blue-600 bg-blue-500 text-white': primary, 
                        'border-gray-900 bg-gray-500 text-white': secondary, 
                        'border-green-600 bg-green-500 text-white': success, 
                        'border-yelow-600 bg-yellow-400 text-white': warning, 
                        'border-red-600 bg-red-500 text-white': danger,
                        'rounded-full': rounded,
                        'bg-white': outline,
                        'text-blue-500': outline && primary,
                        'text-gray-500': outline && secondary,
                        'text-green-500': outline && success,
                        'text-yellow-500': outline && warning,
                        'text-red-500': outline && danger,
                    });

    return <button {...rest} className={classes}>{children}</button>;
}



Button.propTypes = {
    checkVariationValue: ({primary, secondary, success, warning, danger}) => {
        const count = 
            Number(!!primary)+
            Number(!!secondary) +
            Number(!!warning) +
            Number(!!success) +
            Number(!!danger);

            if (count > 1) {
                return new Error('Invalid, only one must be used primary, secondary, success, warning, danger');
            }

        
    },
};

export default Button;