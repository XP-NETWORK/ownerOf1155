# ownerOf1155

1. Install

    - git clone https://github.com/XP-NETWORK/ownerOf1155.git 
    - yarn install
2.
    create .evn in root as in .env.example
    
      CONTRACT - address of deployed erc1155 contract
      
      TOKENS_NUMBER - Will check if account is owner of any token with ids from 0 to TOKENS_NUMBER
      
      REDIRECT_URL - If account is not owner, will be redirected to
      
      FILE_NAME - If account IS owner, will recive a file
      
      MESSAGE_TO_SIGN - Message that will be shown in MetaMask
