import { TestBed } from '@angular/core/testing';

import { Experimental3551Service } from './experimental3551.service';

describe('Experimental3551Service', () => {
  let service: Experimental3551Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3551Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
