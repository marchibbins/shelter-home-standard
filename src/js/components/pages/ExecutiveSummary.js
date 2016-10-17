import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

export default class ExecutiveSummary extends React.Component {

    render () {
        return (
            <Grid>
                <article>
                    <Row>
                        <Col md={7}>
                            <h1>Executive Summary</h1>
                            <p>The Living Home Standard represents the first definition of what home means that has been defined by the public, for the public. It defines what the public believes an acceptable home should provide, something that we should all be able to expect from our home in order to secure our wellbeing and provide a foundation from which we can build and live our lives.</p>

                            <p>The Standard is the result of 9 months of research undertaken by Ipsos MORI on behalf of Shelter and British Gas, and involved a series of discussion groups, workshops and quantitative surveys as well as an online community. These different strands brought together public views on what a home should provide, which was honed into a list of 39 attributes which together define the Living Home Standard – a standard that we should aspire all homes meet, irrespective of their tenure, size or age.</p>

                            <p>The 39 statements which make up the Living Home Standard are split across five different dimensions:</p>

                            <p>
                                <ul>
                                    <li>Decent conditions</li>
                                    <li>Affordability</li>
                                    <li>Space</li>
                                    <li>Stability</li>
                                    <li>Neighbourhood</li>
                                </ul>
                            </p>

                            <p>Within each dimension some attributes are classed as essentials – conditions that every home must meet in order to meet the Living Home Standard. Other attributes were classed as tradables, features many people believed were important, but they were not universally applicable to or equally desired by everyone. A home needs to meet a certain number of the tradable conditions in each dimension of the Standard, but not all, in order for it to achieve the Living Home Standard overall.</p>

                            <p>Whether a household meets the Living Home Standard or not can be measured by determining whether the 39 attributes included in the Standard are stated as true or false.</p>

                            <p>A home must meet all of the essential attributes a third to one half of the tradable attributes in each dimension.</p>

                            <h3>Affordability</h3>

                            <p>
                                <ul>
                                    <li>Can meet the rent or mortgage payments on the home without regularly having to cut spending on household essentials like food or heating</li>
                                    <li>Not worried that rent or mortgage payments could rise to a level that would be difficult to pay</li>
                                    <li>Can meet rent or mortgage payments on the home without regularly preventing participation in social activities</li>
                                    <li>Can meet the rent or mortgage payments on the home without regularly being prevented from putting enough money aside to cover unexpected costs</li>
                                </ul>
                            </p>

                            <h3>Decent conditions</h3>

                            <p>
                                <ul>
                                    <li>The home can be heated safely and effectively</li>
                                    <li>The home has hot and cold running water</li>
                                    <li>The home is free from safety hazards such as faulty wiring or fire risks</li>
                                    <li>The home is structurally sound with no important defects to the roof and/or walls</li>
                                    <li>The home has a toilet, and a bath and/or shower</li>
                                    <li>The home feels physically secure (for example with adequate locks on doors and windows)</li>
                                    <li>The home is free from pest problems</li>
                                    <li>The home is free from mould or damp problems</li>
                                    <li>The home is suitable for the current age and/or disability related needs of everyone in the household</li>
                                    <li>There is adequate space to store essential items, such as a reasonable amount of clothes, towels and bedding</li>
                                    <li>There are enough bathroom facilities for everyone living in the household to be able to use them at a time suitable for their needs</li>
                                    <li>The home has access to outdoor space, for example a private or shared garden, or balcony</li>
                                    <li>There is enough space to have visitors during the day or evening</li>
                                    <li>There is enough space for members of the household to study or do work or homework if they need to</li>
                                    <li>There is enough space for a guest to stay overnight, for instance on a sofa or sofa bed</li>
                                    <li>There is enough space to store domestic items like vacuum cleaners and ironing boards to keep them out of the way</li>
                                    <li>There is enough space to store some personal belongings, such as books or children’s toys</li>
                                </ul>
                            </p>

                            <h3>Neighbourhood</h3>

                            <p>
                                <ul>
                                    <li>Feel reasonably safe and secure in the local neighbourhood</li>
                                    <li>Amenities such as grocery shops, schools and/or a doctor’s surgery, are within reasonable reach of the home</li>
                                    <li>The home is close enough to family, friends or other support networks</li>
                                    <li>Anyone in the household who works outside the home can usually reach their place of work in an hour or less</li>
                               </ul>
                            </p>
                            </Col>
                    </Row>
                </article>
           </Grid>
        );
    }

}
