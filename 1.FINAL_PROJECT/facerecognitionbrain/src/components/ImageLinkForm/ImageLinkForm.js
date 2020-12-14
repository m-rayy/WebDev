import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onImageSubmit }) => {
    return (
        <div>
            <p className='f3'>
                <div>
                    {'This Magic Brain will detect faces in your image URLs.'}
                </div>
                <div>
                    {'Give it a try!'}
                </div>
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input
                        className='f4 pa2 w-70 center'
                        type='tex' 
                        onChange={onInputChange}
                    />
                    <button
                        className='f4 b w-30 grow link ph3 pv2 dib white bg-light-purple'
                        onClick={onImageSubmit}
                    >
                        Detect
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;