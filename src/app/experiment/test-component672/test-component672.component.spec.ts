import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent672Component } from './test-component672.component';

describe('TestComponent672Component', () => {
  let component: TestComponent672Component;
  let fixture: ComponentFixture<TestComponent672Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent672Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent672Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
