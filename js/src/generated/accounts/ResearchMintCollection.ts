/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beetSolana from '@metaplex-foundation/beet-solana'
import * as beet from '@metaplex-foundation/beet'

/**
 * Arguments used to create {@link ResearchMintCollection}
 * @category Accounts
 * @category generated
 */
export type ResearchMintCollectionArgs = {
  readerPubkey: web3.PublicKey
  dataMerkleRoot: number[] /* size: 64 */
  bump: number
}
/**
 * Holds the data for the {@link ResearchMintCollection} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class ResearchMintCollection implements ResearchMintCollectionArgs {
  private constructor(
    readonly readerPubkey: web3.PublicKey,
    readonly dataMerkleRoot: number[] /* size: 64 */,
    readonly bump: number
  ) {}

  /**
   * Creates a {@link ResearchMintCollection} instance from the provided args.
   */
  static fromArgs(args: ResearchMintCollectionArgs) {
    return new ResearchMintCollection(
      args.readerPubkey,
      args.dataMerkleRoot,
      args.bump
    )
  }

  /**
   * Deserializes the {@link ResearchMintCollection} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0
  ): [ResearchMintCollection, number] {
    return ResearchMintCollection.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link ResearchMintCollection} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig
  ): Promise<ResearchMintCollection> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig
    )
    if (accountInfo == null) {
      throw new Error(
        `Unable to find ResearchMintCollection account at ${address}`
      )
    }
    return ResearchMintCollection.fromAccountInfo(accountInfo, 0)[0]
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey(
      'C5M2JxBaxmsW62BgujPXEPytw65igtUjr6mFbD5pmypM'
    )
  ) {
    return beetSolana.GpaBuilder.fromStruct(
      programId,
      researchMintCollectionBeet
    )
  }

  /**
   * Deserializes the {@link ResearchMintCollection} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(
    buf: Buffer,
    offset = 0
  ): [ResearchMintCollection, number] {
    return researchMintCollectionBeet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link ResearchMintCollection} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return researchMintCollectionBeet.serialize(this)
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link ResearchMintCollection}
   */
  static get byteSize() {
    return researchMintCollectionBeet.byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link ResearchMintCollection} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      ResearchMintCollection.byteSize,
      commitment
    )
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link ResearchMintCollection} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === ResearchMintCollection.byteSize
  }

  /**
   * Returns a readable version of {@link ResearchMintCollection} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      readerPubkey: this.readerPubkey.toBase58(),
      dataMerkleRoot: this.dataMerkleRoot,
      bump: this.bump,
    }
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const researchMintCollectionBeet = new beet.BeetStruct<
  ResearchMintCollection,
  ResearchMintCollectionArgs
>(
  [
    ['readerPubkey', beetSolana.publicKey],
    ['dataMerkleRoot', beet.uniformFixedSizeArray(beet.u8, 64)],
    ['bump', beet.u8],
  ],
  ResearchMintCollection.fromArgs,
  'ResearchMintCollection'
)
