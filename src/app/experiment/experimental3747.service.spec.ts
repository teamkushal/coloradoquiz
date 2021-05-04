import { TestBed } from '@angular/core/testing';

import { Experimental3747Service } from './experimental3747.service';

describe('Experimental3747Service', () => {
  let service: Experimental3747Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3747Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
