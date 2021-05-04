import { TestBed } from '@angular/core/testing';

import { Experimental3817Service } from './experimental3817.service';

describe('Experimental3817Service', () => {
  let service: Experimental3817Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3817Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
