import { TestBed } from '@angular/core/testing';

import { Experimental3193Service } from './experimental3193.service';

describe('Experimental3193Service', () => {
  let service: Experimental3193Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3193Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
