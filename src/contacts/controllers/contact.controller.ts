import { Controller, Get, Query } from '@nestjs/common';
import { ContactsService } from '../services/contacts.service';
import { Contact } from '../models/contact.entity';
import { FindOptionsOrder, FindOptionsOrderValue } from 'typeorm';
import * as ccxt from 'ccxt';
import * as fs from 'fs';

@Controller('contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) { }

  @Get()
  index(): Promise<Contact[]> {
    return this.contactsService.findAll();
  }

  // @Query('age') age: number, @Query('breed') breed: string
  @Get('/filter')
  index1(@Query('take') take: number,
    @Query('skip') skip: number,
    @Query('nft_id') nft_id: number,
    @Query('network') network: string,
    @Query('token0') token0: string,
    @Query('token1') token1: string,
    @Query('owner') owner: string,
    @Query('in_range') in_range: '1' | '2',
    @Query('date') date: string,
    @Query('order') order: FindOptionsOrderValue): Promise<Contact[]> {



    const find = {
      take: take ?? 10,
      skip: skip ?? 0,
      order: { id: order ?? 'DESC' },
      where: {
      }
    }

    if (nft_id) {
      find['where']['nft_id'] = nft_id
    }
    if (network) {
      find['where']['network'] = network
    }
    if (token0) {
      find['where']['token0'] = token0
    }

    if (token1) {
      find['where']['token1'] = token1
    }
    if (owner) {
      find['where']['owner'] = owner
    }
    if (owner) {
      find['where']['owner'] = owner
    }
    if (date) {
      find['where']['date'] = date
    }

    if (in_range) {
      find['where']['in_range'] = in_range
    }

    return this.contactsService.find(find);
  }
  @Get('/save') index2() {



    // Initialize the exchange (Binance is used in this example)
    const exchange = new ccxt.kraken(); // You can change this to another exchange if needed

    // Define the trading pair and the time frame
    const symbol = 'ETH/USDT';
    const years = 3;
    const since = new Date();
    since.setFullYear(since.getFullYear() - years);
    const sinceTimestamp = since.getTime();

    async function fetchHistoricalData() {
      try {
        // Load markets
        await exchange.loadMarkets();

        // Fetch OHLCV data (Open, High, Low, Close, Volume) with a 1-day interval
        const ohlcv = await exchange.fetchOHLCV(symbol, '1d', sinceTimestamp, 1000000);


        console.log(11111111, ohlcv)
        // Format the data
        const formattedData = ohlcv.map((candle: any) => ({
          timestamp: new Date(candle[0]).toISOString(),
          open: candle[1],
          high: candle[2],
          low: candle[3],
          close: candle[4],
          volume: candle[5],
        }));

        // Save data to CSV
        saveToCSV(formattedData);
      } catch (error) {
        console.error('Error fetching historical data:', error);
      }
    }

    function saveToCSV(data: Array<{ timestamp: string; open: number; high: number; low: number; close: number; volume: number; }>) {
      const csvContent = 'Timestamp,Open,High,Low,Close,Volume\n' +
        data.map(candle => `${candle.timestamp},${candle.open},${candle.high},${candle.low},${candle.close},${candle.volume}`).join('\n');

      const filename = `eth_usdt_historical_${new Date().toISOString().slice(0, 10)}.csv`;
      fs.writeFileSync(filename, csvContent);
      console.log(`Data saved to ${filename}`);
    }

    // Execute the script
    fetchHistoricalData();


    return '2'

  }

  // @Post('create')
  // async create(@Body() contactData: Contact): Promise<any> {
  //   return this.contactsService.create(contactData);
  // }

  // @Put(':id/update')
  // async update(@Param('id') id, @Body() contactData: Contact): Promise<any> {
  //   contactData.id = Number(id);
  //   console.log('Update #' + contactData.id);
  //   return this.contactsService.update(contactData);
  // }

  // @Delete(':id/delete')
  // async delete(@Param('id') id): Promise<any> {
  //   return this.contactsService.delete(id);
  // }
}
