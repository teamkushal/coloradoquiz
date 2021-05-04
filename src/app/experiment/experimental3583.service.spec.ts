import { TestBed } from '@angular/core/testing';

import { Experimental3583Service } from './experimental3583.service';

describe('Experimental3583Service', () => {
  let service: Experimental3583Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3583Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
