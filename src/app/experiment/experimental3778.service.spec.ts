import { TestBed } from '@angular/core/testing';

import { Experimental3778Service } from './experimental3778.service';

describe('Experimental3778Service', () => {
  let service: Experimental3778Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3778Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
