import React, {useState, useEffect, Component} from 'react';

function Resume() {
    return (
        <div className="leading-tight">

            <div className="right">
                <bx-link href="mailto:wdn0@icloud.com"> wdn0@icloud.com</bx-link>
                / 847 250 2979
            </div>

            <h1 className="text-4xl">Dannong Wang</h1>
            <h4>Education</h4>
            <div>
                <div className="right">
                    Troy, NY <br/>
                    Aug 2019 - Dec 2022
                </div>
                <h4>Rensselaer Polytechnic Institute</h4>
                Bachelor of Science in Computer Science, GPA: 3.69
            </div>

            <h4>Experience</h4>

            <div>
                <div className="right">
                    Troy, NY <br/>
                    May 2022 - Aug 2022
                </div>
                <b>Undergraduate CS Mentor for Operating System</b>, Rensselaer
                Polytechnic Institute

                <div className="taglist">
                    <bx-tag size="sm" type="green">C</bx-tag>
                </div>
                <bx-unordered-list>
                    <bx-list-item
                    >Assisted students with homework and held office hours on topics like
                        Multi-Threaded Programming, Synchronization, Memory Management, and
                        CPU Scheduling.
                    </bx-list-item>
                    <bx-list-item>
                        Graded exams and provided feedback on student performance.
                    </bx-list-item>
                </bx-unordered-list>
            </div>

            <div>
                <div className="right">
                    Beijing, China <br/>
                    Dec 2020 – Feb 2021
                </div>
                <b>Machine Learning Intern</b>, Huafeng-AccuWeather

                <div className="taglist">
                    <bx-tag size="sm" type="green">Node.js</bx-tag>
                    <bx-tag size="sm" type="green">Python</bx-tag>
                    <bx-tag size="sm" type="green">MongoDB</bx-tag>
                    <bx-tag size="sm" type="green">Azure</bx-tag>
                </div>
                <bx-unordered-list>
                    <bx-list-item>
                        Developed a REST API that uses NLP to provide answers to
                        weather-related questions.
                    </bx-list-item>
                    <bx-list-item>
                        Created NLP models with Microsoft Azure Language Understanding and
                        integrated them into the API using Python with techniques like
                        Named-entity recognition.
                    </bx-list-item>
                    <bx-list-item
                    >Utilized users’ historical data to improve the relevance of the API’s
                        responses, including city name and date prediction for vague or
                        incomplete queries.
                    </bx-list-item>
                    <bx-list-item>
                        Developed multiple models and selected the most optimal one based on
                        testing results and performance metrics such as precision and recall.
                    </bx-list-item>
                </bx-unordered-list>
            </div>

            <h4>Projects</h4>

            <div>
                <div className="right">
                    Sept 2022 – Dec 2022
                </div>
                <b>LEGUP, A tool to teach formal logic using puzzles</b>

                <div className="taglist">
                    <bx-tag size="sm" type="green">Java</bx-tag>
                </div>
                <bx-unordered-list>
                    <bx-list-item>
                        Created validation functions for puzzles to check puzzle integrity
                        after edits while leveraging object-oriented design principles.
                    </bx-list-item>
                    <bx-list-item>
                        Created features to update a list of dependency used and their license
                        with markdown, which will assist future developers in using the list
                        as a reference and ensure that licenses are followed.
                    </bx-list-item>
                    <bx-list-item
                    >Contributed to UI enhancements and bug fixes using Java Swing GUI
                        toolkit.
                    </bx-list-item>
                </bx-unordered-list>
            </div>

            <div>
                <div className="right">
                    Sept 2021 – Dec 2021
                </div>
                <b>University MaketPlace - Course final project</b>

                <div className="taglist">
                    <bx-tag size="sm" type="green">Angular</bx-tag>
                    <bx-tag size="sm" type="green">Express.js</bx-tag>
                    <bx-tag size="sm" type="green">MongoDB</bx-tag>
                </div>
                <bx-unordered-list>
                    <bx-list-item>
                        Implemented back-end with inventory management, order tracking, and
                        payment processing features.
                    </bx-list-item>
                    <bx-list-item>
                        Utilized Angular and Material UI to create a responsive, user-friendly
                        single-page application that leverages the latest web technologies.
                    </bx-list-item>
                    <bx-list-item>
                        Used Google Cloud Vision AI to automatically categorize products using
                        product images, improving the application’s search functionality.
                    </bx-list-item>
                </bx-unordered-list>
            </div>

            <div>
                <div className="right">
                    Jan 2020 – Apr 2020
                </div>
                <b>University Event Scheduler - Course final project</b>

                <div className="taglist">
                    <bx-tag size="sm" type="green">React</bx-tag>
                    <bx-tag size="sm" type="green">Express.js</bx-tag>
                    <bx-tag size="sm" type="green">PostgreSQL</bx-tag>
                </div>
                <bx-unordered-list>
                    <bx-list-item>
                        Implemented Mapbox API to create an interactive map displaying
                        available campus venues and their details.
                    </bx-list-item>
                    <bx-list-item>
                        Integrated SendGrid email API for secure one-time password login and
                        automated event reminders.
                    </bx-list-item>
                </bx-unordered-list>
            </div>

            <h4>Skills</h4>
            <div id="skills">
                <bx-structured-list>
                    <bx-structured-list-body>
                        <bx-structured-list-row>
                            <bx-structured-list-cell>Languages</bx-structured-list-cell>
                            <bx-structured-list-cell>
                                Java, Python, C/C++, JavaScript,
                                HTML/CSS.
                            </bx-structured-list-cell
                            >
                        </bx-structured-list-row>
                        <bx-structured-list-row>
                            <bx-structured-list-cell
                            >Frameworks & Libraries
                            </bx-structured-list-cell
                            >
                            <bx-structured-list-cell
                            >Angular, React, Node.js, JUnit, pandas, scikit-learn, NumPy,
                                Matplotlib
                            </bx-structured-list-cell>
                        </bx-structured-list-row>
                        <bx-structured-list-row id="last">
                            <bx-structured-list-cell>Database</bx-structured-list-cell>
                            <bx-structured-list-cell>SQL, MongoDB</bx-structured-list-cell>
                        </bx-structured-list-row>
                    </bx-structured-list-body>
                </bx-structured-list>
            </div>

        </div>

    )
        ;
}

export default Resume;
