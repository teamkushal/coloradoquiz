import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent499Component } from './test-component499.component';

describe('TestComponent499Component', () => {
  let component: TestComponent499Component;
  let fixture: ComponentFixture<TestComponent499Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent499Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent499Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
