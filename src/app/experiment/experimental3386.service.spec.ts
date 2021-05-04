import { TestBed } from '@angular/core/testing';

import { Experimental3386Service } from './experimental3386.service';

describe('Experimental3386Service', () => {
  let service: Experimental3386Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3386Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
