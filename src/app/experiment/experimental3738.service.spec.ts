import { TestBed } from '@angular/core/testing';

import { Experimental3738Service } from './experimental3738.service';

describe('Experimental3738Service', () => {
  let service: Experimental3738Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3738Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
