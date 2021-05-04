import { TestBed } from '@angular/core/testing';

import { Experimental582Service } from './experimental582.service';

describe('Experimental582Service', () => {
  let service: Experimental582Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental582Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
