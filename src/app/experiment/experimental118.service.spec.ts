import { TestBed } from '@angular/core/testing';

import { Experimental118Service } from './experimental118.service';

describe('Experimental118Service', () => {
  let service: Experimental118Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental118Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
