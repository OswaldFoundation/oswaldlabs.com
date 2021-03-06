---
title: GDPR Export
description: You can use this GDPR Export tool to export all collected data that belongs to you.
---

<section class="hero pb-5">
	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<h1>GDPR Export</h1>
                <p>You can use this tool to export all collected data that belongs to you.</p>
                <p>Starting May 2018, we stopped collected any personally identifiable information to protect our users’ privacy. We only collect completely anonymized information keyed using one-way (undecryptable) hashing algorithms.</p>
                <p>You will receive an email containing a ZIP export of your data in JSON format within 48 hours.</p>
			</div>
            <div class="col-md-6 mt-4 mt-md-0">
                <div class="card p-4">
                    <form action="https://formspree.io/yourfriends@oswaldlabs.com" method="POST">
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" name="email" class="form-control" id="email" placeholder="Enter your email" required>
                        </div>
                        <div class="form-group">
                            <label for="ip">IP address</label>
                            <input name="ip" class="form-control ip-address-fill" id="ip" placeholder="Enter your IP address" required>
                        </div>
                        <input type="hidden" name="type" value="export">
                        <input type="hidden" name="page" class="agastya-url-prefill">
                        <p class="small">By submitting this form, you are agreeing with our <a href="/policies/">policies</a>.</p>
                        <button class="btn btn-primary btn-lg">Send me an export &rarr;</button>
                    </form>
                </div>
                <a href="/contact/?department=Data+Protection+Officer" class="btn btn-outline-primary btn-block mt-4">Contact our Data Protection Officer &rarr;</a>
            </div>
		</div>
	</div>
</section>