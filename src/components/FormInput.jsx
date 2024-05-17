import { __ } from '@wordpress/i18n';

const FormInput = ({ label, type, name, value, onChange, styles, ...props }) => {
    return (
        <label className='
            block
            mb-2
            text-gray-600
            text-sm
            font-medium
        '>
            {__(label, 'wp-aws-mli')}
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

export default FormInput