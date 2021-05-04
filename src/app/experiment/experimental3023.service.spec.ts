import { TestBed } from '@angular/core/testing';

import { Experimental3023Service } from './experimental3023.service';

describe('Experimental3023Service', () => {
  let service: Experimental3023Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3023Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
