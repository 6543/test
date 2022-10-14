"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[3671],{2006:e=>{e.exports=JSON.parse('[{"name":"Git Plugin","url":"https://github.com/woodpecker-ci/plugin-git","icon":"https://woodpecker-ci.org/img/logo.svg","description":"This is the default plugin for the clone step.","docs":"<p>This plugin is automatically introduced into your pipeline as the first step.\\nIts purpose is to clone your Git repository.</p>\\n<h2 id=\\"features\\">Features</h2>\\n<ul>\\n<li>Git LFS support is enabled by default.</li>\\n<li>Fetch tags when needed.</li>\\n<li>Ajust submodules.</li>\\n</ul>\\n<h2 id=\\"overriding-settings\\">Overriding Settings</h2>\\n<p>You can manually define your <code>clone</code> step in order to change plugin or override some of the default settings.\\nConsult <a href=\\"https://woodpecker-ci.org/docs/usage/pipeline-syntax#clone\\">the <code>clone</code> section of the pipeline documentation</a> for more information;\\nthis documentation page only describes this plugin.</p>\\n<pre><code class=\\"language-yaml\\">clone:\\n  git:\\n    image: woodpeckerci/plugin-git\\n    settings:\\n      depth: 50\\n      lfs: false\\n</code></pre>\\n<h2 id=\\"settings\\">Settings</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>Settings Name</th>\\n<th>Default</th>\\n<th>Description</th>\\n</tr>\\n</thead>\\n<tbody><tr>\\n<td><code>depth</code></td>\\n<td><em>none</em></td>\\n<td>If specified, uses git&#39;s <code>--depth</code> option to create a shallow clone with a limited number of commits</td>\\n</tr>\\n<tr>\\n<td><code>lfs</code></td>\\n<td><code>true</code></td>\\n<td>Set this to <code>false</code> to disable retrieval of LFS files</td>\\n</tr>\\n<tr>\\n<td><code>recursive</code></td>\\n<td><code>false</code></td>\\n<td>Clones submodules recursively</td>\\n</tr>\\n<tr>\\n<td><code>skip_verify</code></td>\\n<td><code>false</code></td>\\n<td>Skips the SSL verification</td>\\n</tr>\\n<tr>\\n<td><code>tags</code></td>\\n<td><code>false</code> (except on tag event)</td>\\n<td>Fetches tags when set to true, default is false if event is not tag else true</td>\\n</tr>\\n<tr>\\n<td><code>submodule_overrides</code></td>\\n<td><em>none</em></td>\\n<td>Override submodule urls</td>\\n</tr>\\n<tr>\\n<td><code>submodule_update_remote</code></td>\\n<td><code>false</code></td>\\n<td>Pass the --remote flag to git submodule update</td>\\n</tr>\\n<tr>\\n<td><code>custom_ssl_path</code></td>\\n<td><em>none</em></td>\\n<td>Set path to custom cert</td>\\n</tr>\\n<tr>\\n<td><code>custom_ssl_url</code></td>\\n<td><em>none</em></td>\\n<td>Set url to custom cert</td>\\n</tr>\\n<tr>\\n<td><code>backoff</code></td>\\n<td><code>5sec</code></td>\\n<td>Change backoff duration</td>\\n</tr>\\n<tr>\\n<td><code>attempts</code></td>\\n<td><code>5</code></td>\\n<td>Change backoff attempts</td>\\n</tr>\\n<tr>\\n<td><code>branch</code></td>\\n<td>$CI_COMMIT_BRANCH</td>\\n<td>Change branch name to checkout to</td>\\n</tr>\\n</tbody></table>\\n","tags":["git","clone"],"containerImage":"woodpeckerci/plugin-git","containerImageUrl":"https://hub.docker.com/r/woodpeckerci/plugin-git","verified":true},{"name":"Docker Buildx","url":"https://codeberg.org/woodpecker-plugins/plugin-docker-buildx","icon":"https://woodpecker-ci.org/img/logo.svg","description":"plugin to build multiarch Docker images with buildx","docs":"<p>Woodpecker CI plugin to build multiarch Docker images with buildx. This plugin is a fork of <a href=\\"https://github.com/thegeeklab/drone-docker-buildx/\\">thegeeklab/drone-docker-buildx</a> which itself is a fork of <a href=\\"https://github.com/drone-plugins/drone-docker\\">drone-plugins/drone-docker</a>. You can find the full documentation at You can find the full documentation at <a href=\\"https://woodpecker-plugins.codeberg.page/plugins/drone-docker-buildx\\">woodpecker-plugins.codeberg.page</a>.</p>\\n<h2 id=\\"features\\">Features</h2>\\n<ul>\\n<li>Build without push</li>\\n<li>Use custom registries</li>\\n<li>Build based on existing tags when needed</li>\\n<li>Push to multible registries/repos</li>\\n</ul>\\n<p>It will automatically generate buildkit configuration to use custom CA certificate if following conditions are met:</p>\\n<ul>\\n<li>Setting <code>buildkit_config</code> is not set</li>\\n<li>Custom <code>registry</code>/<code>logins</code> value is provided</li>\\n<li>File exists <code>/etc/docker/certs.d/&lt;registry-value&gt;/ca.crt</code></li>\\n</ul>\\n<blockquote>\\n<p>NB! To mount custom CA you can use Woodpecker CI runner configuration environment <code>WOODPECKER_BACKEND_DOCKER_VOLUMES</code> with value <code>/etc/ssl/certs:/etc/ssl/certs:ro,/etc/docker/certs.d:/etc/docker/certs.d:ro</code>. And have created file <code>/etc/docker/certs.d/&lt;registry-value&gt;/ca.crt</code> with CA certificate on runner server host.</p>\\n</blockquote>\\n<h2 id=\\"settings\\">Settings</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>Settings Name</th>\\n<th>Default</th>\\n<th>Description</th>\\n</tr>\\n</thead>\\n<tbody><tr>\\n<td><code>dry-run</code></td>\\n<td><code>false</code></td>\\n<td>disables docker push</td>\\n</tr>\\n<tr>\\n<td><code>repo</code></td>\\n<td><em>none</em></td>\\n<td>sets repository name for the image (can be a list)</td>\\n</tr>\\n<tr>\\n<td><code>username</code></td>\\n<td><em>none</em></td>\\n<td>sets username to authenticates with</td>\\n</tr>\\n<tr>\\n<td><code>password</code></td>\\n<td><em>none</em></td>\\n<td>sets password / token to authenticates with</td>\\n</tr>\\n<tr>\\n<td><code>email</code></td>\\n<td><em>none</em></td>\\n<td>sets email address to authenticates with</td>\\n</tr>\\n<tr>\\n<td><code>registry</code></td>\\n<td><code>https://index.docker.io/v1/</code></td>\\n<td>sets docker registry to authenticate with</td>\\n</tr>\\n<tr>\\n<td><code>dockerfile</code></td>\\n<td><code>Dockerfile</code></td>\\n<td>sets dockerfile to use for the image build</td>\\n</tr>\\n<tr>\\n<td><code>tag</code>/<code>tags</code></td>\\n<td>@&quot;.tags&quot;</td>\\n<td>sets repository tags to use for the image</td>\\n</tr>\\n<tr>\\n<td><code>platforms</code></td>\\n<td><em>none</em></td>\\n<td>sets target platform for build</td>\\n</tr>\\n</tbody></table>\\n<h2 id=\\"examples\\">Examples</h2>\\n<pre><code class=\\"language-yml\\">  publish-next-agent:\\n    image: woodpeckerci/plugin-docker-buildx\\n    secrets: [docker_username, docker_password]\\n    settings:\\n      repo: woodpeckerci/woodpecker-agent\\n      dockerfile: docker/Dockerfile.agent.multiarch\\n      platforms: windows/amd64,darwin/amd64,darwin/arm64,freebsd/amd64,linux/amd64,linux/arm64/v8\\n      tag: next\\n    when:\\n      branch: ${CI_REPO_DEFAULT_BRANCH}\\n      event: push\\n</code></pre>\\n<pre><code class=\\"language-yml\\">  publish:\\n    image: woodpeckerci/plugin-docker-buildx\\n    settings:\\n      platforms: linux/386,linux/amd64,linux/arm/v6,linux/arm64/v8,linux/ppc64le,linux/riscv64,linux/s390x\\n      repo: codeberg.org/${CI_REPO_OWNER}/hello\\n      registry: codeberg.org\\n      tags: latest\\n      username: ${CI_REPO_OWNER}\\n      password:\\n        from_secret: cb_token\\n</code></pre>\\n<pre><code class=\\"language-yml\\">  docker-build:\\n    image: woodpeckerci/plugin-docker-buildx\\n    settings:\\n      repo: codeberg.org/${CI_REPO_OWNER}/hello\\n      registry: codeberg.org\\n      dry_run: true\\n      output: type=oci,dest=${CI_REPO_OWNER}-hello.tar\\n</code></pre>\\n<h2 id=\\"advanced-settings\\">Advanced Settings</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>Settings Name</th>\\n<th>Default</th>\\n<th>Description</th>\\n</tr>\\n</thead>\\n<tbody><tr>\\n<td><code>mirror</code></td>\\n<td><em>none</em></td>\\n<td>sets a registry mirror to pull images</td>\\n</tr>\\n<tr>\\n<td><code>storage_driver</code></td>\\n<td><em>none</em></td>\\n<td>sets the docker daemon storage driver</td>\\n</tr>\\n<tr>\\n<td><code>storage_path</code></td>\\n<td><code>/var/lib/docker</code></td>\\n<td>sets the docker daemon storage path</td>\\n</tr>\\n<tr>\\n<td><code>bip</code></td>\\n<td><em>none</em></td>\\n<td>allows the docker daemon to bride ip address</td>\\n</tr>\\n<tr>\\n<td><code>mtu</code></td>\\n<td><em>none</em></td>\\n<td>sets docker daemon custom mtu setting</td>\\n</tr>\\n<tr>\\n<td><code>custom_dns</code></td>\\n<td><em>none</em></td>\\n<td>sets custom docker daemon dns server</td>\\n</tr>\\n<tr>\\n<td><code>custom_dns_search</code></td>\\n<td><em>none</em></td>\\n<td>sets custom docker daemon dns search domain</td>\\n</tr>\\n<tr>\\n<td><code>insecure</code></td>\\n<td><code>false</code></td>\\n<td>allows the docker daemon to use insecure registries</td>\\n</tr>\\n<tr>\\n<td><code>ipv6</code></td>\\n<td><code>false</code></td>\\n<td>enables docker daemon IPv6 support</td>\\n</tr>\\n<tr>\\n<td><code>experimental</code></td>\\n<td><code>false</code></td>\\n<td>enables docker daemon experimental mode</td>\\n</tr>\\n<tr>\\n<td><code>debug</code></td>\\n<td><code>false</code></td>\\n<td>enables verbose debug mode for the docker daemon</td>\\n</tr>\\n<tr>\\n<td><code>daemon_off</code></td>\\n<td><code>false</code></td>\\n<td>disables the startup of the docker daemon</td>\\n</tr>\\n<tr>\\n<td><code>buildkit_config</code></td>\\n<td><em>none</em></td>\\n<td>sets content of the docker <a href=\\"https://github.com/moby/buildkit/blob/master/docs/buildkitd.toml.md\\">buildkit TOML config</a></td>\\n</tr>\\n<tr>\\n<td><code>context</code></td>\\n<td><code>.</code></td>\\n<td>sets the path of the build context to use</td>\\n</tr>\\n<tr>\\n<td><code>default_tags</code>/<code>auto_tag</code></td>\\n<td><code>false</code></td>\\n<td>generates tag names automatically based on git branch and git tag</td>\\n</tr>\\n<tr>\\n<td><code>default_suffix&quot;</code>/<code>auto_tag_suffix</code></td>\\n<td><em>none</em></td>\\n<td>generates tag names with the given suffix</td>\\n</tr>\\n<tr>\\n<td><code>label</code>/<code>labels</code></td>\\n<td><em>none</em></td>\\n<td>sets labels to use for the image in format <code>&lt;name&gt;=&lt;value&gt;</code></td>\\n</tr>\\n<tr>\\n<td><code>default_labels</code>/<code>auto_labels</code></td>\\n<td><code>true</code></td>\\n<td>sets docker image labels based on git information</td>\\n</tr>\\n<tr>\\n<td><code>build_args</code></td>\\n<td><em>none</em></td>\\n<td>sets custom build arguments for the build</td>\\n</tr>\\n<tr>\\n<td><code>build_args_from_env</code></td>\\n<td><em>none</em></td>\\n<td>forwards environment variables as custom arguments to the build</td>\\n</tr>\\n<tr>\\n<td><code>quiet</code></td>\\n<td><code>false</code></td>\\n<td>enables suppression of the build output</td>\\n</tr>\\n<tr>\\n<td><code>target</code></td>\\n<td><em>none</em></td>\\n<td>sets the build target to use</td>\\n</tr>\\n<tr>\\n<td><code>cache_from</code></td>\\n<td><em>none</em></td>\\n<td>sets images to consider as cache sources</td>\\n</tr>\\n<tr>\\n<td><code>pull_image</code></td>\\n<td><code>true</code></td>\\n<td>enforces to pull base image at build time</td>\\n</tr>\\n<tr>\\n<td><code>compress</code></td>\\n<td><code>false</code></td>\\n<td>enables compression of the build context using gzip</td>\\n</tr>\\n<tr>\\n<td><code>config</code></td>\\n<td><em>none</em></td>\\n<td>sets content of the docker daemon json config</td>\\n</tr>\\n<tr>\\n<td><code>purge</code></td>\\n<td><code>true</code></td>\\n<td>enables cleanup of the docker environment at the end of a build</td>\\n</tr>\\n<tr>\\n<td><code>no_cache</code></td>\\n<td><code>false</code></td>\\n<td>disables the usage of cached intermediate containers</td>\\n</tr>\\n<tr>\\n<td><code>add_host</code></td>\\n<td><em>none</em></td>\\n<td>sets additional host:ip mapping</td>\\n</tr>\\n<tr>\\n<td><code>output</code></td>\\n<td><em>none</em></td>\\n<td>sets build output in format <code>type=&lt;type&gt;[,&lt;key&gt;=&lt;value&gt;]</code></td>\\n</tr>\\n<tr>\\n<td><code>logins</code></td>\\n<td><em>none</em></td>\\n<td>option to log into multible registrys</td>\\n</tr>\\n</tbody></table>\\n<h2 id=\\"multi-registry-push-example\\">Multi registry push example</h2>\\n<p>Only supported with <code>woodpecker &gt;= 1.0.0</code> (next-da997fa3).</p>\\n<pre><code class=\\"language-yml\\">settings:\\n  repo: a6543/tmp,codeberg.org/6543/tmp\\n  tag: demo\\n  logins:\\n    - registry: https://index.docker.io/v1/\\n      username: a6543\\n      password:\\n        from_secret: docker_token\\n    - registry: https://codeberg.org\\n      username: &quot;6543&quot;\\n      password:\\n        from_secret: cb_token\\n</code></pre>\\n","tags":["docker","image","container","build"],"containerImage":"woodpeckerci/plugin-docker-buildx","containerImageUrl":"https://hub.docker.com/r/woodpeckerci/plugin-docker-buildx","verified":true},{"name":"Codecov plugin","url":"https://github.com/woodpecker-ci/plugin-codecov","icon":"https://woodpecker-ci.org/img/logo.svg","description":"Plugin to upload coverage reports to Codecov.io.","docs":"<p>The Codecov plugin uploads coverage reports in one of the <a href=\\"https://docs.codecov.com/docs/supported-report-formats\\">supported formats</a> to <a href=\\"https://about.codecov.io/\\">Codecov.io</a>.</p>\\n<h2 id=\\"usage\\">Usage</h2>\\n<p>To use the plugin add a step similar to the following one to your Woodpecker pipeline config:</p>\\n<pre><code class=\\"language-yml\\">pipeline:\\n  codecov:\\n    image: woodpeckerci/plugin-codecov\\n    settings:\\n      files:\\n        - my-coverage-report-output.out\\n        - another-coverage-report.json\\n      token:\\n        from_secret: codecov_token\\n</code></pre>\\n","tags":["coverage","testing"],"containerImage":"woodpeckerci/plugin-codecov","containerImageUrl":"https://hub.docker.com/r/woodpeckerci/plugin-codecov","verified":true},{"name":"Surge preview plugin","url":"https://github.com/woodpecker-ci/plugin-surge-preview","icon":"https://woodpecker-ci.org/img/logo.svg","description":"Plugin to create static pages deployments as preview environments on pull-requests.","docs":"<p>The surge-preview plugin uploads a files of a directory to the CDN of <a href=\\"https://surge.sh/\\">surge.sh</a> it automatically generates an url and posts the status of the deployment with an url as a comment to the pull-request. After closing a pull-request it automatically destroys the preview environment again.</p>\\n<h2 id=\\"usage\\">Usage</h2>\\n<p>To use the plugin add a step similar to the following one to your Woodpecker pipeline config:</p>\\n<pre><code class=\\"language-yml\\">pipeline:\\n  preview:\\n    image: woodpeckerci/plugin-surge-preview\\n    settings:\\n      path: dist/ # path to directory to publish files from\\n      surge_token: xxx # install surge cli and run `surge token`: https://surge.sh/help/getting-started-with-surge\\n      forge_type: github # or gitea, gitlab, ...\\n      forge_url: https://github.com # or https://codeberg.org, https://gitlab.com, ...\\n      forge_repo_token: xxx # access token for your forge\\n    when:\\n      event: pull_request\\n</code></pre>\\n","tags":["publish","cdn","preview"],"containerImage":"woodpeckerci/plugin-surge-preview","containerImageUrl":"https://hub.docker.com/r/woodpeckerci/plugin-surge-preview","verified":true},{"name":"S3 Plugin","url":"https://github.com/woodpecker-ci/plugin-s3","icon":"https://woodpecker-ci.org/img/logo.svg","description":"Plugin to publish files and artifacts to Amazon S3 or Minio.","docs":"<p>The S3 plugin uploads files and build artifacts to your S3 bucket, or S3-compatible bucket such as Minio.\\nThe below pipeline configuration demonstrates simple usage:</p>\\n<pre><code class=\\"language-yml\\">pipeline:\\n  upload:\\n    image: woodpeckerci/plugin-s3\\n    settings:\\n      bucket: my-bucket-name\\n      access_key: a50d28f4dd477bc184fbd10b376de753\\n      secret_key: ****************************************\\n      source: public/**/*\\n      target: /target/location\\n</code></pre>\\n<p>Source the aws credentials from secrets:</p>\\n<pre><code class=\\"language-yml\\">pipeline:\\n  upload:\\n    image: woodpeckerci/plugin-s3\\n    settings:\\n      bucket: my-bucket-name\\n      access_key:\\n        from_secret: aws_access_key_id\\n      secret_key:\\n        from_secret: aws_secret_access_key\\n      source: public/**/*\\n      target: /target/location\\n</code></pre>\\n<p>Use the build number in the S3 target prefix:</p>\\n<pre><code class=\\"language-yml\\">pipeline:\\n  upload:\\n    image: woodpeckerci/plugin-s3\\n    settings:\\n      bucket: my-bucket-name\\n      source: public/**/*\\n      target: /target/location/${CI_BUILD_NUMBER}\\n</code></pre>\\n<p>Override the default acl and region:</p>\\n<pre><code class=\\"language-yml\\">steps:\\n- name: upload\\n  image: woodpeckerci/plugin-s3\\n  settings:\\n    bucket: my-bucket-name\\n    acl: public-read\\n    region: us-east-1\\n    source: public/**/*\\n    target: /target/location\\n</code></pre>\\n<p>Configure the plugin to strip path prefixes when uploading:</p>\\n<pre><code class=\\"language-yml\\">pipeline:\\n  upload:\\n    image: woodpeckerci/plugin-s3\\n    settings:\\n      bucket: my-bucket-name\\n      source: public/**/*\\n      target: /target/location\\n      strip_prefix: public/\\n</code></pre>\\n<p>Configure the plugin to exclude files from upload:</p>\\n<pre><code class=\\"language-yml\\">pipeline:\\n  upload:\\n    image: woodpeckerci/plugin-s3\\n    settings:\\n      bucket: my-bucket-name\\n      source: public/**/*\\n      target: /target/location\\n      exclude:\\n        - **/*.xml\\n</code></pre>\\n<p>Configure the plugin to connect to a Minio server:</p>\\n<pre><code class=\\"language-yml\\">pipeline:\\n  upload:\\n    image: woodpeckerci/plugin-s3\\n    settings:\\n      bucket: my-bucket-name\\n      source: public/**/*\\n      target: /target/location\\n      path_style: true\\n      endpoint: https://play.minio.io:9000\\n</code></pre>\\n<h1 id=\\"parameter-reference\\">Parameter Reference</h1>\\n<p>endpoint\\n: custom endpoint URL (optional, to use a S3 compatible non-Amazon service)</p>\\n<p>access_key\\n: amazon key (optional)</p>\\n<p>secret_key\\n: amazon secret key (optional)</p>\\n<p>bucket\\n: bucket name</p>\\n<p>region\\n: bucket region (<code>us-east-1</code>, <code>eu-west-1</code>, etc)</p>\\n<p>acl\\n: access to files that are uploaded (<code>private</code>, <code>public-read</code>, etc)</p>\\n<p>source\\n: source location of the files, using a glob matching pattern. Location must be within the woodpecker workspace.</p>\\n<p>target\\n: target location of files in the bucket</p>\\n<p>encryption\\n: if provided, use server-side encryption</p>\\n<p>strip_prefix\\n: strip the prefix from source path</p>\\n<p>exclude\\n: glob exclusion patterns</p>\\n<p>path_style\\n: whether path style URLs should be used (true for minio)</p>\\n","tags":["publish","s3","amazon","minio","storage"],"containerImage":"woodpeckerci/plugin-s3","containerImageUrl":"https://hub.docker.com/r/woodpeckerci/plugin-s3","verified":true},{"name":"Block Git changes","url":"https://codeberg.org/qwerty287/woodpecker-block-git-changes","description":"Plugin to block uncommited  changes in the Git repository","docs":"<p>Plugin that fails if the Git repository contains any uncommited changes.</p>\\n<h2 id=\\"usage\\">Usage</h2>\\n<pre><code class=\\"language-yaml\\">pipeline:\\n    block-changes:\\n        image: qwerty287/woodpecker-block-git-changes\\n</code></pre>\\n<p>This will never fail because there isn&#39;t any change done before.</p>\\n<pre><code class=\\"language-yaml\\">pipeline:\\n    echo:\\n        image: alpine\\n        commands:\\n            - echo &quot;hello world&quot; &gt; README.md\\n\\n    block-changes:\\n      image: qwerty287/woodpecker-block-git-changes\\n</code></pre>\\n<p>This will fail if your README.md doesn&#39;t already contain <code>hello world</code>.</p>\\n","tags":["git","changes"],"containerImage":"qwerty287/woodpecker-block-git-changes","containerImageUrl":"https://hub.docker.com/r/qwerty287/woodpecker-block-git-changes","verified":false},{"name":"Regex Check","url":"https://codeberg.org/qwerty287/woodpecker-regex-check","description":"Plugin to check if files contain specified regex or match the wildcard","docs":"<p>Plugin to check if files contain specified regex or match the wildcard.</p>\\n<h2 id=\\"usage\\">Usage</h2>\\n<p>Example pipeline:</p>\\n<pre><code class=\\"language-yaml\\">pipeline:\\n    find-static-imports:\\n        image: qwerty287/woodpecker-regex-check\\n        settings:\\n            pattern: &quot;*.java&quot;\\n            regex: &quot;import static .*;&quot;\\n</code></pre>\\n<h3 id=\\"config-file\\">Config file</h3>\\n<p>With the <code>config</code> setting, you can set a path to the config file. This allows you to specify multiple rules. It can be a JSON or a YAML file, must be a list of items with the following options:</p>\\n<table>\\n<thead>\\n<tr>\\n<th>Name</th>\\n<th>Description</th>\\n<th>Default</th>\\n</tr>\\n</thead>\\n<tbody><tr>\\n<td><code>pattern</code></td>\\n<td>File pattern on which formatting should run</td>\\n<td><code>*</code> (all files)</td>\\n</tr>\\n<tr>\\n<td><code>path</code></td>\\n<td>Subdirectory of repository root to check</td>\\n<td><code>.</code> (repository root directory)</td>\\n</tr>\\n<tr>\\n<td><code>regex</code></td>\\n<td>Regex to search for</td>\\n<td>none</td>\\n</tr>\\n<tr>\\n<td><code>glob</code></td>\\n<td>Wildcard to match file contents</td>\\n<td>none</td>\\n</tr>\\n<tr>\\n<td><code>must_contain</code></td>\\n<td>If files must (if <code>true</code>) or must not (if <code>false</code>) contain the regex/wildcard</td>\\n<td><code>false</code></td>\\n</tr>\\n</tbody></table>\\n<p><code>regex</code> or <code>glob</code> is necessary, but you are not allowed to set both.</p>\\n<h2 id=\\"settings\\">Settings</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>Name</th>\\n<th>Description</th>\\n<th>Default</th>\\n</tr>\\n</thead>\\n<tbody><tr>\\n<td><code>pattern</code></td>\\n<td>File pattern on which checks should run</td>\\n<td><code>*</code> (all files)</td>\\n</tr>\\n<tr>\\n<td><code>path</code></td>\\n<td>Subdirectory of repository root to check</td>\\n<td><code>.</code> (repository root directory)</td>\\n</tr>\\n<tr>\\n<td><code>regex</code></td>\\n<td>Regex to search for</td>\\n<td>none</td>\\n</tr>\\n<tr>\\n<td><code>glob</code></td>\\n<td>Wildcard to match file contents</td>\\n<td>none</td>\\n</tr>\\n<tr>\\n<td><code>config</code></td>\\n<td>Path to config file</td>\\n<td>none</td>\\n</tr>\\n<tr>\\n<td><code>must_contain</code></td>\\n<td>If files must (if <code>true</code>) or must not (if <code>false</code>) contain the regex/wildcard</td>\\n<td><code>false</code></td>\\n</tr>\\n</tbody></table>\\n<p><code>regex</code>, <code>glob</code> or <code>config</code> is necessary, but you are not allowed to set both <code>regex</code> and <code>glob</code>. If you set <code>config</code>, the other options are ignored.\\n<code>pattern</code> and <code>glob</code> use <a href=\\"https://github.com/gobwas/glob\\">https://github.com/gobwas/glob</a>.</p>\\n","tags":["regex","wildcard"],"containerImage":"qwerty287/woodpecker-regex-check","containerImageUrl":"https://hub.docker.com/r/qwerty287/woodpecker-regex-check","verified":false}]')}}]);