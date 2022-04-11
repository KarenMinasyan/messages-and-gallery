const NewPost = ({ textValue, changeHandler, postHandler, buttonText }) => (
        <div className='new-post'>
            <h3>Write a reply</h3>
            <div className='new-post_inputs'>
                <textarea
                    value={textValue}
                    onChange={changeHandler}
                    className='new-post_area'
                />
            </div>
            <button onClick={postHandler} className='btn'>{buttonText}</button>
        </div>
    )

export default NewPost;
