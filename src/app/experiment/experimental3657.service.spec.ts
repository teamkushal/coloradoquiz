import { TestBed } from '@angular/core/testing';

import { Experimental3657Service } from './experimental3657.service';

describe('Experimental3657Service', () => {
  let service: Experimental3657Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3657Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
