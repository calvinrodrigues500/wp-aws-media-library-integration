import { __ } from '@wordpress/i18n';

const InputField = ({ label, type, name, value, onChange, styles }) => {
    return (
        <label>
            {__({ label }, 'wp-aws-mli')}
            <input
                type={type}
                name={name}
                value={value}
                onChange={onchange}
                className='
                    mt-1
                    block
                    w-full
                    p-2
                    border
                    border-gray-300
                    rounded-mdshadow-sm
                    focus:border-indigo-300
                    focus:ring
                    focus:ring-indigo-200
                    focus:ring-opacity-50
                '
            />
        </label>
    )
}

export default InputField