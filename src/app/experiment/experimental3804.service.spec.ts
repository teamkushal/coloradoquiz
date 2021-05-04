import { TestBed } from '@angular/core/testing';

import { Experimental3804Service } from './experimental3804.service';

describe('Experimental3804Service', () => {
  let service: Experimental3804Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3804Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
