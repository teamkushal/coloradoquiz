import { TestBed } from '@angular/core/testing';

import { Experimental285Service } from './experimental285.service';

describe('Experimental285Service', () => {
  let service: Experimental285Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental285Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
