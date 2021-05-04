import { TestBed } from '@angular/core/testing';

import { Experimental3050Service } from './experimental3050.service';

describe('Experimental3050Service', () => {
  let service: Experimental3050Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3050Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
