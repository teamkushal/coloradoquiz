import { TestBed } from '@angular/core/testing';

import { Experimental3337Service } from './experimental3337.service';

describe('Experimental3337Service', () => {
  let service: Experimental3337Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3337Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
