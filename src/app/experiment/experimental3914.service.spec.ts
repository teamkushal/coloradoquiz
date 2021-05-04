import { TestBed } from '@angular/core/testing';

import { Experimental3914Service } from './experimental3914.service';

describe('Experimental3914Service', () => {
  let service: Experimental3914Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3914Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
