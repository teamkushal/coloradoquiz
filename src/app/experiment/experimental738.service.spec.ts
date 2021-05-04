import { TestBed } from '@angular/core/testing';

import { Experimental738Service } from './experimental738.service';

describe('Experimental738Service', () => {
  let service: Experimental738Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental738Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
