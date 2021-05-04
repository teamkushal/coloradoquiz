import { TestBed } from '@angular/core/testing';

import { Experimental517Service } from './experimental517.service';

describe('Experimental517Service', () => {
  let service: Experimental517Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental517Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
