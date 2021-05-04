import { TestBed } from '@angular/core/testing';

import { Experimental79Service } from './experimental79.service';

describe('Experimental79Service', () => {
  let service: Experimental79Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental79Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
