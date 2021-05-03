import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent858Component } from './test-component858.component';

describe('TestComponent858Component', () => {
  let component: TestComponent858Component;
  let fixture: ComponentFixture<TestComponent858Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent858Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent858Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
