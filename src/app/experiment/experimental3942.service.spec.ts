import { TestBed } from '@angular/core/testing';

import { Experimental3942Service } from './experimental3942.service';

describe('Experimental3942Service', () => {
  let service: Experimental3942Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3942Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
