import { TestBed } from '@angular/core/testing';

import { Experimental3730Service } from './experimental3730.service';

describe('Experimental3730Service', () => {
  let service: Experimental3730Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3730Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
