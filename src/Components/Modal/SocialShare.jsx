import React from 'react';
import { LinkedinShareButton, LinkedinIcon, TwitterShareButton, TwitterIcon, FacebookShareButton, FacebookIcon } from 'react-share';

const SocialShare = (props) => {
    return (
        <>
            <div
                className="modal fade"
                id="socialShareModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Share
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <h3>Share it with your friends!</h3>
                            <div className='d-flex justify-content-center gap-2'>
                                <FacebookShareButton 
                                url='https://www.facebook.com/'>
                                    <FacebookIcon logoFillcolor='white'></FacebookIcon>
                                </FacebookShareButton>
                                <TwitterShareButton
                                    url="https://www.facebook.com/"
                                    quote="share on facebook"
                                >
                                    <TwitterIcon logoFillcolor='white'></TwitterIcon>
                                </TwitterShareButton>

                                <LinkedinShareButton
                                    title="My Personality Trait"
                                    url="https://www.linkedin.com/"
                                >
                                    <LinkedinIcon logoFillcolor='white'></LinkedinIcon>
                                </LinkedinShareButton>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div>
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary mx-1"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button type="button" className="btn btn-dark mx-1">
                                    Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default SocialShare;