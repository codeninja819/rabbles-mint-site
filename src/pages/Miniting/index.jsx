/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */

const Minting = () => {
  return (
    <>
      <header class="mb-5">
        <video
          id="rabbleBG"
          playsinline="playsinline"
          autoplay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source src="./rabble_banner.mp4" type="video/mp4" />
        </video>
        <div class="container h-100">
          <div
            class="d-flex justify-content-center h-100 align-items-center"
            style={{ height: "85%!important" }}
          >
            <div class="card" style={{ width: "60vh" }}>
              <div class="card-header icon">
                <h4 class="my-0 font-weight-normal ">
                  <img src="/icons/note-0.png" /> RabblePass Mint
                </h4>
              </div>
              <div class="card-body">
                <ul class="list-unstyled mt-3 mb-4">
                  <li>
                    <label
                      for="mint3"
                      class="col-sm-2 col-form-label"
                      style={{ maxWidth: "50%" }}
                    >
                      <img src="/icons/user_world-0.png" class="icon-16-4" />{" "}
                      Mint
                    </label>
                    <div
                      class="col-sm-10"
                      style={{ maxWidth: "20%", display: "inline-block" }}
                    >
                      <input type="text" class="form-95" id="mint3" />
                    </div>
                  </li>
                  <li>
                    <label
                      for="mint3"
                      class="col-sm-2 col-form-label"
                      style={{ maxWidth: "50%" }}
                    >
                      <img src="/icons/globe_map-4.png" class="icon-16-4" />{" "}
                      Mint Price: 0.00 ETH
                    </label>
                  </li>
                  <li>
                    <label
                      for="mint3"
                      class="col-sm-2 col-form-label"
                      style={{ maxWidth: "50%" }}
                    >
                      <img src="/icons/globe_map-4.png" class="icon-16-4" />{" "}
                      Minted/Supply: 200/4000{" "}
                    </label>
                  </li>
                </ul>
                <div
                  class="btn-group btn-block"
                  role="group"
                  aria-label="Basic example"
                >
                  <button type="button" class="btn btn-secondary">
                    <img src="/icons/globe_map-4.png" class="icon-16" /> Mint
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div class="text-center mb-4" style={{ background: "black" }}>
        <img
          src="https://therabbles.io/wp-content/uploads/2022/08/icon-150x150.png"
          style={{ height: "5em" }}
        />
      </div>
    </>
  );
};


export default Minting;
