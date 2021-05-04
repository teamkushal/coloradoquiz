import { TestBed } from '@angular/core/testing';

import { Experimental3582Service } from './experimental3582.service';

describe('Experimental3582Service', () => {
  let service: Experimental3582Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3582Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
