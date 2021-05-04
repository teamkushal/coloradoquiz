import { TestBed } from '@angular/core/testing';

import { Experimental237Service } from './experimental237.service';

describe('Experimental237Service', () => {
  let service: Experimental237Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental237Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
