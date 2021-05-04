import { TestBed } from '@angular/core/testing';

import { Experimental3869Service } from './experimental3869.service';

describe('Experimental3869Service', () => {
  let service: Experimental3869Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3869Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
