import { TestBed } from '@angular/core/testing';

import { Experimental123Service } from './experimental123.service';

describe('Experimental123Service', () => {
  let service: Experimental123Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental123Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
