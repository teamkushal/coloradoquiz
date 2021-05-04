import { TestBed } from '@angular/core/testing';

import { Experimental2123Service } from './experimental2123.service';

describe('Experimental2123Service', () => {
  let service: Experimental2123Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2123Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
