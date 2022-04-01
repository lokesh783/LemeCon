import React from "react"
import { signInWithGoogle } from "../firebase"
import { FcGoogle } from 'react-icons/fc';

export function Pricing() {
    return (
        <div>
            <h2 class="section-heading" >A Plan for Every Social Enthusiast</h2>
            <p>Simple and affordable price plans for you.</p>
            {/* </div> */}
            <div class="pricing-row row">
                <div class="pricing-col col-lg-4 col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="pricing-card-header-heading">Normal</h3>
                        </div>
                        <div class="card-body">
                            <h2 class="price-heading" >Free</h2>
                            <p>10 Messages Per Day</p>
                            <p>Unlimited App Usage</p>
                            {' '}
                            <button onClick={signInWithGoogle} class="btn btn-lg btn-block btn-outline-dark" type="button"><FcGoogle className="g-icon" />Sign Up</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="pricing-card-header-heading" >Premium</h3>
                        </div>
                        <div class="card-body">
                            <h2 class="price-heading" >$49 / mo</h2>
                            <p>Unlimited Messages</p>
                            <p>Unlimited App Usage</p>
                            <button class="btn btn-lg btn-primary" type="button">Sign Up</button>
                        </div>
                    </div>
                </div>
                <div class=" col-lg-4 col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="pricing-card-header-heading" >Premium+</h3>
                        </div>
                        <div class="card-body">
                            <h2 class="price-heading" >$99 / mo</h2>
                            <p>Pirority Listing</p>
                            <p>Unlimited Messages</p>
                            <p>Unlimited App Usage</p>
                            <button class="btn btn-lg btn-block btn-primary" type="button">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            )
}