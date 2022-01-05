import React from 'react';

const Article = () => {
    return (
        <>
            <div className="article">
                <div className="article-left">
                    <img src="/free.jpg" alt="missing" width="200" />
                    <p>
                        Contrary to pop belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                        in classical literature, discovered the undoubtable source.
                        This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
                        "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    </p>
                    <div className="article-clear" />
                </div>
                <div className="article-right">
                    <img src="/free.jpg" alt="missing" width="200" />
                    <p>
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        Latin words, consectetur, from a Lorem Ipsum passage,
                        and going through the cites of the word in classical literature, discovered the undoubtable source.
                        a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
                        "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    </p>
                    <div className="article-clear" />
                </div>
            </div>

        </>
    )
}
export default Article;